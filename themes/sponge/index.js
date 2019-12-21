const path = require('path')

module.exports = function(opts, ctx)
{
  var options = 
  {
    name: 'vuepress-theme-sponge',

    plugins: [
      [
        '@vuepress/register-components', {
        componentsDir: [
          path.resolve(__dirname, 'components')
        ]
      }],
      require('@myvuepress/vuepress-plugin-categories'),
      require("@myvuepress/vuepress-plugin-indexlist")
    ],
    ready()
    {
        const { siteConfig = {} } = ctx;
        siteConfig.head = siteConfig.head || [];

        let headers = [
            ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }],
            
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
