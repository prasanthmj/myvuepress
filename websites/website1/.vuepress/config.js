
module.exports = {
    title: 'A test Website to test the plugins and themes',
    description: 'An example website for the vuepress theme',
    theme: "@myvuepress/vuepress-theme-sponge",
    base:"/",
    plugins: [ 
                
             ],


             themeConfig: {
                site_name:"test.site",
                append_title:true,
                top_navbar:
                {
                    brand:
                    {
                        site_name: 'Test.site'
                    },
                    menu:[
                        {
                            link:"/",
                            text:"Home"
                        },
                        
                        {
                            link:"/site-map",
                            text:"All Articles"
                        }
                    ]
                },
                sidebar:
                {
                    items: [
                        
                        {type:'related-by-category'},
                        {type:'adsense', ad_client:'ca-pub-3769017195253484', ad_slot:'8990517010'}
                    ]
                },
                bottom_block:
                [
                    {type:'tag-list'},
                    
                    {type:'related-by-category'}
                ],
                footer:
                {
                    classes:['fg-footer'],
                    columns:
                    [
                        {
                            type:'menu',
                            items:
                            [
                                {link:"/about",text:"About"},
                                {link:"/site-map",text:"Site Map"},
                            ]
                        },
                        {
                            type:'copyright',
                            css_classes:['float-right']
                        }
                    ]
                }
          
            },
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap' }],
        
        ['link', { rel: 'shortcut icon', href: 'http://form.guide/wp-content/themes/thesis/lib/images/favicon.ico' }]
    ]
}