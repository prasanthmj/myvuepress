<template>
    <div :class="$site.themeConfig.sidebar.classes">
        <div v-for="(side_item,idx) in $site.themeConfig.sidebar.items" :key="idx" class="mb-4" >
            <div v-if="side_item.type == 'banner'">
                <banner-rotation  :banners="side_item.banners" />
            </div>
            <div v-if="side_item.type == 'related-by-category' && show_related_items">
                <category-list :heading="side_item.heading"/>
            </div>
            <div v-if="side_item.type == 'adsense'" >
                <Adsense
                :data-ad-client="side_item.ad_client"
                :data-ad-slot="side_item.ad_slot">
                </Adsense>
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
