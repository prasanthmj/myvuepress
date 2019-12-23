<template>
<div>
    <bread-crumbs />
    <article class="post_content" itemtype="http://schema.org/Article">
    <header class="headline-container mb-3 border-bottom">
    <h1 class="headline">
        <a :href="$page.path" rel="bookmark">{{$page.title}}</a>
    </h1>
    </header>
    <div class="article_content" >
        <Content />
    </div>
    
    </article>
    <bottom-block />
</div>
</template>
<style lang="scss">
a.header-anchor
{
    display:none;
}

.crumbs a
{
    font-size: 0.9rem;
    text-decoration: none;
}
.crumbs a:hover
{
    text-decoration: underline;
}

</style>
<script>
export default {
    computed:
    {
        url_details()
        {
            
            let dir = this.$page.regularPath.split("/").slice(0,-1).join("/");
            return dir;
        },
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
