<template>
<nav class="navbar navbar-expand-sm navbar-dark" :style="$site.themeConfig.top_navbar_style">

<a href="/" class="navbar-brand">{{ $site.themeConfig.site_name }}</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" 
data-target="#navbarsExample03" aria-controls="navbarsExample03" 
aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" >
<ul class="navbar-nav ml-auto fg-menu">
    <li class="nav-item " v-for="opt in $site.themeConfig.top_menu" :key="opt.link">
    <a class="nav-link" :href="opt.link">{{opt.text}}</a>
    </li>
</ul>

</div>
</nav>

</template>
<style>
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
