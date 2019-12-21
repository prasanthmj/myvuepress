<template>
    <div>
        <div v-for="(side_item,idx) in $site.themeConfig.sidebar" :key="idx" class="mb-4">
            <div v-if="side_item.type == 'banner'">
            <a :href="side_item.link"><img 
                        :src="side_item.image" :alt="side_item.alt_text"></a>
            </div>
            <div v-if="side_item.type == 'related-by-category' && show_related_items">
                <category-list :heading="side_item.heading"/>
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
