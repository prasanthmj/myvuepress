<template>
<div class="vjotted">
<div ref="html_code" v-show="false">
<slot name='html'></slot>
</div>
<div ref="css_code" v-show="false">
<slot name='css'></slot>
</div>
<div ref="js_code" v-show="false">
<slot name='js'></slot>
</div>
<div ref="jotted_ctr"> </div>
</div>
</template>
<style>
.vjotted .jotted
{
    height:24rem;
    margin:1rem 0;
}

.jotted-plugin-pen .jotted-pane
{
  min-height:400px;
  font-size: 0.8rem;
}

.jotted-plugin-pen .jotted-pane.jotted-pane-result
{
  height: 30%;
  min-height:100px;
}


</style>
<script>
import Jotted from "jotted";
import 'jotted/jotted.css'
import 'codemirror/lib/codemirror.css';
import beautify from 'js-beautify';

export default {
    data: ()=>({
        the_html:'',
        the_css:''
    }),
    props:
    {
        show_console:
        {
            type: Boolean,
            default: false
        }
    },

    async mounted()
    {
        //More info:
        // https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions

        let cm = await import('codemirror');
        await import('codemirror/mode/htmlmixed/htmlmixed.js');
        await import('codemirror/mode/javascript/javascript.js');
        await import('codemirror/mode/css/css.js');
        

        window.CodeMirror =  cm.default;
        let types = ['html', 'css', 'js'];
        let files =[];
        for(let type of types)
        {
            let content = this.$refs[type+'_code'].innerHTML.trim();
            if(!content){ continue; }
            content = beautify[type](content);
            files.push({type,content});
        }
        
        let options = {
            files,
            plugins: [ 'codemirror', 'pen' ]
        };

        if(this.show_console)
        {
            options.plugins.unshift('console');
        }
        

        new Jotted(this.$refs.jotted_ctr, options);

    }
}
</script>