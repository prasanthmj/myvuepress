<template>
<div>
<div v-for="ct in categories" :key="ct.link">
<h3 ><a :href="ct.link">{{ct.text}}</a></h3>
<div v-if="ct.pages" class="px-2"> 
    <index-list :pages="ct.pages" />
</div>
</div>

</div>
</template>
<script>
export default {
    data()
    {
        return({
            categories:[]
        })
    },
    
    mounted()
    {
        let category_map={};
        for(let pg of this.$site.pages)
        {
            if(pg.frontmatter && pg.frontmatter.is_generated)
            {
                continue;
            }
            if(pg.frontmatter && pg.frontmatter.categories)
            {
                for(let cat of pg.frontmatter.categories)
                {
                    if(!category_map[cat.link])
                    {
                        category_map[cat.link] = cat;
                        category_map[cat.link].pages = [];
                    }
                    category_map[cat.link].pages.push(pg);
                }
            }
        }
        let cat_keys = Object.keys(category_map);
        for(let ct of cat_keys)
        {
            this.categories.push( category_map[ct]);
        }
        this.categories.sort((ct1,ct2)=>(ct2.pages.length - ct1.pages.length));
        //console.log("this.categories", this.categories);
        
    }
}
</script>