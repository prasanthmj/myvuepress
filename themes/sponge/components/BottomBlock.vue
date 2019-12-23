<template>
    <div v-if="!$page.frontmatter.is_generated">
        <div v-for="(item,idx) in $site.themeConfig.bottom_block" :key="idx" class="mb-4">
            <div v-if="item.type == 'banner'">
            <a :href="item.link"><img 
                        :src="item.image" :alt="item.alt_text"></a>
            </div>
            <div v-if="item.type == 'related-by-category' && show_related_items" >
                <related-by-category :heading="item.heading"/>
            </div>
            <div v-if="item.type == 'tag-list'" class="tag-list-ctr">
                <tag-list />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:
    {
        show_related_items()
        {
            return (!this.$page.frontmatter.no_related_pages)
        }
    }
}
</script>

