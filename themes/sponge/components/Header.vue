<template>
<nav class="navbar navbar-expand-sm navbar-dark">

<a href="/" class="navbar-brand">
<img :src='$site.themeConfig.top_navbar.brand.icon' v-if="$site.themeConfig.top_navbar.brand.icon" 
class="top-bar-site-icon" /><span v-if="$site.themeConfig.top_navbar.brand.site_name">
{{ $site.themeConfig.top_navbar.brand.site_name }}</span>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" 
data-target="#navbarsExample03" aria-controls="navbarsExample03" 
aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" >
<ul class="navbar-nav ml-auto fg-menu">
    <li class="nav-item " v-for="opt in $site.themeConfig.top_navbar.menu" :key="opt.link">
    <a class="nav-link" :href="opt.link">{{opt.text}}</a>
    </li>
</ul>

</div>
</nav>

</template>
<style>
.top-bar-site-icon
{
    max-width: 40px;
    max-height: 40px;
}
.navbar-nav.fg-menu .nav-item a
{
    font-size:1.1rem;
    font-weight: bold;
}
.navbar-dark .navbar-nav .nav-link 
{
    color: rgba(255,255,255,0.7);
}
.navbar-dark .navbar-nav .nav-link:hover
{
    color:#fff;
    text-decoration: underline;
}
</style>
