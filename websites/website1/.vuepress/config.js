module.exports = {
    title: 'A test Website to test the plugins and themes',
    description: 'An example website for the vuepress theme',
    theme: "@myvuepress/vuepress-theme-sponge",
    plugins: [ require('@myvuepress/vuepress-plugin-categories'), 
               require('@myvuepress/vuepress-plugin-tagged') ],


    themeConfig: {
        style:{
            heading_font:'Lato'
        },
        body_style:{
            "font-family":"Roboto,sans-serif",
            "font-size":"16px",
            "color":"#333"
        },
        top_navbar_style:
        {
            "background-color": "#00695c",
            "box-shadow": "1px 2px 5px 0px rgba(0,0,0,0.75)"
        },
        
        site_name:"example-site.com",
        append_title:true,
        sidebar:
        [
            {type:'banner', 
            link:'https://simfatic.com',
            image:'http://form.guide/wp-content/uploads/2017/08/forms-with-calcs1.png',
             alt_text:'Simfatic Forms'},
            {type:'related-by-category'}
        ],
        bottom_block:
        [
            {type:'related-by-category'}
        ],
        top_menu:
        [
            {
                link:"/",
                text:"Home"
            },
            {
                link:"/category/tutorial",
                text:"Tutorials"
            }
        ],
        footer:
        {
            style:
            {
                "background-color":"#444",
                "font-size":"0.9rem"
            },
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