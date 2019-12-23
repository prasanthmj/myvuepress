<template>
<div class="footer w-100 mt-3 pt-3" :class="$site.themeConfig.footer.classes">
<div class="container">
<div class="row">
    <div class="col" v-for="(column,ci) in $site.themeConfig.footer.columns" :key="ci">
        <ul class="list-unstyled footer-menu" v-if="column.type == 'menu'" :class="column.css_classes">
            <li v-for="(it,idx) in column.items" :key="idx"><a
                    :href="it.link">{{it.text}}</a></li>
        </ul>
        <div v-if="column.type == 'copyright'" :class="column.css_classes"> &copy; {{ $site.themeConfig.site_name}} </div>
    </div>
    
</div>
</div>
</div>
</template>
<style>
.footer
{
    background-color:rgb(26, 26, 26);
    color:#eee;

}
.footer a
{
    color:#eee;
}
.footer .footer-menu li
{
    padding:0.5rem 0.25rem;
}
</style>