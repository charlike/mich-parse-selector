!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.michParseSelector=t()}(this,function(){var e=function(e){var t,r,n=0,i=[],o={type:"element",tagName:"div",properties:{},children:[]};for(e=e||"";n<=e.length;){var f=e[n++];if(!f||"."===f||"#"===f){var p=e.slice(r,n-1);p&&("."===t?i.push(p):"#"===t?o.properties.id=p:o.tagName=p),r=n,t=f}}return i.length&&(o.properties.className=i),o};return e});
//# sourceMappingURL=mich-parse-selector.umd.js.map