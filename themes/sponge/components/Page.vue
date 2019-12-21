<template>
<div>
    <bread-crumbs />
    <article itemtype="http://schema.org/Article">
    <div class="post_content" itemprop="articleBody">
    <header class="headline-container mb-3 border-bottom">
    <h1 class="headline" itemprop="headline">
        <a :href="$page.path" rel="bookmark">{{$page.title}}</a>
    </h1>
    <tag-list />
    </header>
    <div class="post_content" itemprop="articleBody">
        <Content />
    </div>
    </div>
    </article>
    <bottom-block />
</div>
</template>
<style >
a.header-anchor
{
    display:none;
}

.gf-divider 
{
    clear: both;
    height: 70px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1.5rem;
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
.tag-list
{
    font-size:0.8rem;
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
