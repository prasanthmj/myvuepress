<template>
<div>
    <index-list :pages="pages" :show_excerpt="true" />
</div>
</template>
<script>
export default {
    props:["category"],
    computed:
    {
        pages()
        {
            let count=0;
            return(this.$site.pages.filter((page) => 
            {
                //same page
                if(page.key === this.$page.key)
                {
                    return false;
                }
                if(page.regularPath.indexOf(this.category) >= 0)
                {
                    return true;
                }
                return false;
            }));
        }
    }
}
</script>