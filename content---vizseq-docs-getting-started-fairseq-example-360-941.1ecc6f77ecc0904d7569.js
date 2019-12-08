(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));n(59),n(32),n(23),n(24),n(60),n(0);var r=n(174),a=n(176);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={id:"fairseq_example",title:"Fairseq Integration",sidebar_label:"Fairseq Integration"},s=[],c={rightToc:s},p="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(p,i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/pytorch/fairseq"}),"Fairseq")," is a popular sequence modeling toolkit developed by Facebook AI Research.\nVizSeq can directly import and analyze model predictions generated by\n",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/pytorch/fairseq/blob/master/generate.py"}),Object(r.b)("inlineCode",{parentName:"a"},"fairseq-generate"))," or\n",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/pytorch/fairseq/blob/master/interactive.py"}),Object(r.b)("inlineCode",{parentName:"a"},"fairseq-interactive"))," in Jupyter Notebook. ",Object(r.b)("a",i({parentName:"p"},{href:"../features/fairseq_api"}),"The\nAPIs")," are almost the same as ",Object(r.b)("a",i({parentName:"p"},{href:"ipynb_example"}),"the normal Jupyter Notebook APIs"),":"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-python"}),"from vizseq.ipynb import fairseq_viz as vizseq_fs\n\nlog_path = 'examples/data/wmt14_fr_en_test.fairseq_generate.log'\n\nvizseq_fs.view_stats(log_path)\nvizseq_fs.view_examples(log_path, ['bleu', 'meteor'], need_g_translate=True)\nvizseq_fs.view_scores(log_path, ['bleu', 'meteor'])\nvizseq_fs.view_n_grams(log_path)\n")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(a.a)("img/fairseq_view_examples.png"),alt:"Fairseq View"})))}l.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=o(n),u=r,f=l[s+"."+u]||l[u]||p[u]||i;return n?a.a.createElement(f,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},175:function(e,t,n){"use strict";var r=n(0),a=n(61);t.a=function(){return Object(r.useContext)(a.a)}},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(177);var r=n(175);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},177:function(e,t,n){"use strict";var r=n(9),a=n(25),i=n(94),o="".startsWith;r(r.P+r.F*n(95)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);