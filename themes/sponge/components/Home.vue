<template> 
<div>
    <index-list :pages="featured_pages" :show_excerpt="true"/>
    <index-list :pages="all_pages" :show_excerpt="true"/>
</div>
</template>

<script>
export default {
    data()
    {
        return({
            index_pages:[]
        });
    },
    computed:
    {
        featured_pages()
        {
            return(this.$site.pages.filter((page) => 
            {
                return (page.frontmatter.featured );
            }));
        },

        all_pages()
        {
            return(this.$site.pages.filter((page) => 
            {
                return (page.path != '/doc.html' && 
                        page.path != '/' &&
                        !page.frontmatter.is_generated &&
                        !page.frontmatter.is_page );
            })).slice(0,10);
        }
    },
    mounted()
    {

    },
    methods:
    {
        getIndexPages()
        {
            let pages = this.$site.pages.filter((pg)=>(
                page.path != '/doc.html' &&  page.path != '/' && !pg.frontmatter.is_generated));
            
            pages.slice(0,10);
        }
    }


}
</script>