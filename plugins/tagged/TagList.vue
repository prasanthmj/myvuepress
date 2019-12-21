<template>
<div class="tag-list " v-if="has_tags">
<ul class="list-inline"><li class="list-inline-item" v-for="(tg,idx) of tags" :key="idx"><a :href="tg.link">{{tg.tag}}</a></li></ul>
</div>
</template>
<style>
.tag-list
{
    font-size:0.8rem;
}
</style>
<script>
export default {
    computed:
    {
        tags()
        {
            if(!this.$page.frontmatter || !this.$page.frontmatter.tags)
            {
                return [];
            }
            return this.$page.frontmatter.tag_details;
        },
        has_tags()
        {
            return(this.$page.frontmatter && this.$page.frontmatter.tags)
        }
    }

}
</script>