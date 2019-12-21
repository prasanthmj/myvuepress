var util = require("util");
var slugify =  require("slugify");
const path = require('path');

function tagsPlugin(options, ctx)
{
    return({
        name: 'tagged',
        enhanceAppFiles: 
        [
            path.resolve(__dirname, 'enhanceAppFile.js')
        ],
        plugins: [
            require("@myvuepress/vuepress-plugin-indexlist")
        ],
        additionalPages(cx){ return makeTagPages(cx); }
    })
}


function makeTagPages(cx)
{
    let map ={};
    for(let page of cx.pages)
    {
        if(page.frontmatter && 
            page.frontmatter.tags )
        {
            page.frontmatter.tag_details =[];
            for(let tag of page.frontmatter.tags)
            {
                
                if(map[tag])
                {
                    continue;
                }

                const content=`
<tag-page tag="${tag}"/>
                `;

                let tag_path = '/tag/'+slugify(tag);
                map[tag] = {
                    path: tag_path,
                    title:`Pages tagged ${tag}`,
                    frontmatter:
                    {
                        no_related_pages:true,
                        is_generated:true
                    },
                    content
                }

                page.frontmatter.tag_details.push({link:tag_path, tag})
                
            }
        }
    }

    let ret=[];
    //console.log("mapping of tags ", map);

    for(let tag_page in map)
    {
        ret.push(map[tag_page]);
    }
    //console.log("additional pages (tagged) ", ret);
    
    ret.push({
        path:'/tag/',
        title:'All tags',
        frontmatter:
        {
            no_related_pages:true
        },
        content:'<all-tags />'
    })
    
    return ret;
}

module.exports = tagsPlugin;