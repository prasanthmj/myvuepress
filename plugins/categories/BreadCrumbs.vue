<template>
<div>
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb" >
    <li class="breadcrumb-item" v-for="(cr,idx) in crumbs" :key="idx"
    :class="{active:cr.link==null}"
    ><a :href="cr.link" v-if="cr.link">{{cr.text}}</a>
    <span v-else>{{cr.text}}</span>
    </li>
    </ol>
    </nav>
</div>
</template>
<script>
function getCategories(regularPath)
{
    let p = regularPath;
    let crum=[];
    
    while(p !== '/' && p)
    {
        p = dir_of(p);
        let itm={
            link:'',
            text:''
        };

        if(!p)
        {
            itm.link = '/';
            itm.text='Home'
        }
        else
        {
            itm.link = p;
            itm.text = p.replace('/','');
        }
        
        crum.push(itm);
    }
    return crum.reverse();
}
function dir_of(path)
{
    return path.split("/").slice(0,-1).join("/");
}

export default {

    computed:
    {
        crumbs()
        {
            let pglink={link:null,text:this.$page.title};
            
            const crumbs = getCategories(this.$page.regularPath);

            crumbs.push(pglink);
            
            return crumbs;
        }
    }

}
</script>