<template>
<div>
<div v-if="pages.length">
<div v-for="page in pages" :key="page.key" class="mb-4 pl-2 border-bottom"> 
    <h5><a :href="page.path" class="article-link">{{page.title}}</a></h5>
    <div v-if="show_excerpt && page.excerpt">
        <div v-html="page.excerpt"></div>
    </div>
</div>

</div>
<div v-else>
    No articles found.
</div>
</div>
</template>

<script>
export default {
    props:{
        pages:{type: Array},
        show_excerpt:{type:Boolean, default:false}
    }
}
</script>

