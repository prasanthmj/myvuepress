<template>
<div>
<a :href="selected.link" :title="selected.alt" 
 :alt="selected.alt" target="_blank" ><img :src="selected.image"/></a>
</div>
</template>
<script>
export default 
{
    props:["banners"],
    data:()=>({
        selected:
        {
            image:'',
            link:'',
            alt:''
        }
    }),
    mounted()
    {
        if(this.banners && this.banners.length > 0)
        {
            this.selected = this.banners[Math.floor(Math.random() * this.banners.length)];
        }
    }
}
</script>