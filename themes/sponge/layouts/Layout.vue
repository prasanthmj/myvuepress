<template> 
<div>
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


