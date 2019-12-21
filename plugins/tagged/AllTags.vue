<template>
<div>
<div v-for="tg in tags" :key="tg.text">
<h3 ><a :href="tg.link">{{tg.text}}</a></h3>
<div v-if="tg.pages" class="px-2"> 
    <index-list :pages="tg.pages" />
</div>
</div>

</div>
</template>
<script>
import slugify from "slugify";

export default {
    data()
    {
        return({
            tags:[]
        })
    },
    
    mounted()
    {
        let tag_map={};
        for(let pg of this.$site.pages)
        {
            if(pg.frontmatter && pg.frontmatter.is_generated)
            {
                continue;
            }
            if(pg.frontmatter && pg.frontmatter.tags)
            {
                for(let tg of pg.frontmatter.tags)
                {
                    if(!tag_map[tg])
                    {
                        tag_map[tg] ={
                            text: tg,
                            pages:[],
                            link:'/tag/'+slugify(tg)
                        }
                        
                    }
                    tag_map[tg].pages.push(pg);
                }
            }
        }
        let tag_keys = Object.keys(tag_map);
        for(let tgx of tag_keys)
        {
            this.tags.push( tag_map[tgx]);
        }
        this.tags.sort((tx1,tx2)=>(tx2.pages.length - tx1.pages.length));
        
        
    }
}
</script>