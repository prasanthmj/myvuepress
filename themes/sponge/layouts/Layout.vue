<template> 
<div :style="$site.themeConfig.body_style">
    <style>
    h1,h2,h3,h4
    {
        font-family: "{{$site.themeConfig.style.heading_font}}" , sans-serif;
    }
    </style>
    
    <Header />
    <div class="container my-5">
        <div class="row">
            <div class="col-md-9">
                <Home v-if="$page.frontmatter.home" />
                <Page v-else />
            </div>
            <div class="col-md-3" >
                <Sidebar />
            </div>
        </div>
    </div>
    <Footer/>
</div>
</template>
<style lang="scss">
html, body {
    overscroll-behavior: none;
}
h1,h2,h3,h4
{
    margin-top:2rem;
    & a
    {
        color:#222;
        text-decoration:none;
        &:hover
        {
            color:#222;
            text-decoration:none;
        }
    }
}
img
{
    max-width:100%;
}
</style>

