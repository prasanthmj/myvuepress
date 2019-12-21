<template>
<div >
<index-list :pages="pages" />
</div>
</template>
<script>

export default {
    props:["tag"],
    computed:
    {
        pages()
        {
            let count=0;
            return(this.$site.pages.filter((page) => 
            {
                if(!page.frontmatter || !page.frontmatter.tags)
                {
                    return false;
                }
                return(page.frontmatter.tags.indexOf(this.tag) >=0); 
            }) );
        }
    }
}
</script>