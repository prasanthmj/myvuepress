//version update check
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
        require("@myvuepress/vuepress-plugin-banner"),
        [
          'vuepress-plugin-container',
          {
            type: 'note',
            defaultTitle: 'Note',
          }
        ]
      ],
      ready()
      {
          const { siteConfig = {} } = ctx;
          siteConfig.head = siteConfig.head || [];

          console.log("themeConfig ",siteConfig.themeConfig);

          let headers = [
              ['link', { rel: 'stylesheet', href: 'https://ajax.aspnetcdn.com/ajax/bootstrap/4.4.1/css/bootstrap.min.css' }],
              
              ['script', {  src: 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.slim.min.js' }],
              ['script', {  src: 'https://ajax.aspnetcdn.com/ajax/bootstrap/4.4.1/bootstrap.min.js' }],

              ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism-tomorrow.min.css' }],
      
              ['script', {  src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/prism.min.js' }],
              ['script', {  src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/autoloader/prism-autoloader.min.js' }]
              
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
