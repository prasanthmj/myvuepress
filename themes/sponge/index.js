const path = require('path')

var defaultSettings=
{
  site_name:"form.guide",
  append_title:true,
  top_navbar:
  {
    classes:[],
    menu:[
      {
          link:"/",
          text:"Home"
      }
    ]
  },
  sidebar:
  {
    classes:[],
    items:[]
  },
  bottom_block:
  [
      { type:'related-by-category' }
  ],
  footer:
  {
      classes:[],
      columns: [ ]
  }
}

function spongeTheme(opts, ctx)
{
    var options = 
    {
      name: 'vuepress-theme-sponge',
      enhanceAppFiles: 
      [
          path.resolve(__dirname, 'enhanceApp.js')
      ],
      plugins: [
        [
          '@vuepress/register-components', {
          componentsDir: [
            path.resolve(__dirname, 'components')
          ]
        }],
        require('@myvuepress/vuepress-plugin-categories'),
        require('@myvuepress/vuepress-plugin-tagged'),
        require("@myvuepress/vuepress-plugin-indexlist"),
        require("@myvuepress/vuepress-plugin-vcode")
      ],
      ready()
      {
          const { siteConfig = {} } = ctx;
          siteConfig.head = siteConfig.head || [];

          console.log("themeConfig ",siteConfig.themeConfig);

          let headers = [
              ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }],
              
              ['script', {  src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js' }],
              ['script', {  src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' }],

              ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism.min.css' }],
      
              ['script', {  src: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js' }]
              
          ];
          for(let header of headers)
          {
              siteConfig.head.push(header);
          }
      }
    }

    return options;
}

module.exports = spongeTheme;
