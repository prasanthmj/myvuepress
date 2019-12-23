
var util = require("@myvuepress/utils");
var slugify =  require("slugify");
const path = require('path');


function categoriesPlugin(options, ctx)
{
    return({
        name: 'categories',
        enhanceAppFiles: 
        [
            path.resolve(__dirname, 'enhanceAppFile.js')
        ],
        plugins: [
            require("@myvuepress/vuepress-plugin-indexlist")
        ],
        additionalPages(cx){ return makeAdditionalPages(cx) }
    });
}

function makeAdditionalPages(cx)
{
    let page_map = {};
    for(let pg of cx.pages)
    {
        page_map[pg.path] = pg;
    }

    let cat_pages={};
    for(let page of cx.pages)
    {
        //Skip Generated pages
        if(page.frontmatter)
        {
            if(page.frontmatter.is_generated || page.frontmatter.is_page)
            {
                continue;
            }
            
        }
        let cats = util.catutil.getCategories(page.regularPath);
        
        cats = cats.filter((catx)=>(catx.link !== '/'));
        cats = cats.map((ctx)=>{ 
            ctx.link = ctx.link.replace(/\/$/,'')+'/'; 
            return ctx; });

        if(!page.frontmatter)
        {
            page.frontmatter = {};
        }

        page.frontmatter.categories = cats;
        
        for(let cx of cats)
        {
            
            if(!page_map[cx.link] && !cat_pages[cx.link])
            {
                cat_pages[cx.link] = {
                    path:cx.link,
                    title:"Category: "+cx.text,
                    frontmatter:
                    {
                        no_related_pages:true,
                        is_generated:true
                    },
                    content:`<CategoryPage category="${cx.link}" />`
                }
            }
            
            let link = '/category/'+slugify(cx.text);

            if(!page_map[link] && !cat_pages[link])
            {
                cat_pages[link] = {
                    path:link,
                    title:"Category: "+cx.text,
                    frontmatter:
                    {
                        no_related_pages:true,
                        is_generated:true,
                        is_category_page:true
                    },
                    content:`<CategoryPage category="${cx.link}" />`
                }
            }
        }

        //console.log("path ",page.path, " page title",page.title, " categories ",cats);
    }

    console.log("Category pages ", cat_pages);

    //throw new Error("run till this point!");

    let ret=[];
    

    for(let cat_page in cat_pages)
    {
        ret.push(cat_pages[cat_page]);
    }
    ret.push(
        {
            path:'/site-map/',
            title:"SiteMap - All articles arranged by categories",
            frontmatter:
            {
                no_related_pages:true,
                is_generated:true,
                is_category_page:true
            },
            content:`<site-map-page/>`
        });
        
    return ret;
}


module.exports = categoriesPlugin;