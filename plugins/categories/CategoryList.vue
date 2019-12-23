<template>
<div v-if="pages.length && !$page.frontmatter.is_page">
<h4>{{heading}}</h4>
<ul class="list-unstyled">
    <li v-for="page in pages" :key="page.key" class="pb-3 pl-2">
        <a :href="page.path">{{page.title}}</a>
    </li>
</ul>
</div>
</template>
<script>
export default {
    props:{
        heading:{
            type:String,
            default:'Related'
        }
    },
    computed:
    {
        pages()
        {
            let count=0;
            return(this.$site.pages.filter((page) => 
            {
                return((page.key !== this.$page.key) && 
                (this.dir_of(page) === this.dir_of(this.$page)) &&
                !page.frontmatter.is_generated &&
                count++ < 10);
            }) );
        }
    },
    methods:
    {
        dir_of(page)
        {
           return page.regularPath.split("/").slice(0,-1).join("/");
        }
    }
}
</script>