(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],a[u[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",s),f}}},9230:function(e,t,r){"use strict";r.d(t,{L:function(){return h},M:function(){return T},P:function(){return w},S:function(){return M},_:function(){return s},a:function(){return a},b:function(){return u},g:function(){return l},h:function(){return c}});var n=r(7294),o=(r(2369),r(5697)),i=r.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function u(e,t,r,n,o){return void 0===o&&(o={}),a({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:a({},o,{opacity:t?1:0})})}function l(e,t,r,n,o,i,s,c){var u={};i&&(u.backgroundColor=i,"fixed"===r?(u.width=n,u.height=o,u.backgroundColor=i,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),c&&(u.objectPosition=c);var l=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return l}var f,p=["children"],d=function(e){var t=e.layout,r=e.width,o=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+o+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(d,a({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],m=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,o=e.loading,i=e.alt,c=void 0===i?"":i,u=e.shouldLoad,l=s(e,g);return n.createElement("img",a({},l,{decoding:"async",loading:o,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:c}))},b=function(e){var t=e.fallback,r=e.sources,o=void 0===r?[]:r,i=e.shouldLoad,c=void 0===i||i,u=s(e,m),l=u.sizes||(null==t?void 0:t.sizes),f=n.createElement(y,a({},u,t,{sizes:l,shouldLoad:c}));return o.length?n.createElement("picture",null,o.map((function(e){var t=e.media,r=e.srcSet,o=e.type;return n.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,sizes:l})})),f):f};y.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,r=s(e,v);return t?n.createElement(b,a({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",a({},r))};w.displayName="Placeholder",w.propTypes={fallback:o.string,sources:null==(f=b.propTypes)?void 0:f.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var T=function(e){return n.createElement(n.Fragment,null,n.createElement(b,a({},e)),n.createElement("noscript",null,n.createElement(b,a({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=b.propTypes;var C,E,A=function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),a=3;a<n;a++)o[a-3]=arguments[a];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(o)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:A},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],L=new Set,k=function(e){var t=e.as,o=void 0===t?"div":t,i=e.image,u=e.style,l=e.backgroundColor,f=e.className,p=e.class,d=e.onStartLoad,h=e.onLoad,g=e.onError,m=s(e,O),y=i.width,b=i.height,v=i.layout,w=function(e,t,r){var n={},o="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:n}}(y,b,v),T=w.style,A=w.className,S=s(w,x),k=(0,n.useRef)(),j=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(f=p);var P=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return E=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=k.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==d||d({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==d||d({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void L.add(j)):E&&L.has(j)?void 0:(C.then((function(r){var n=r.renderImageToString,o=r.swapPlaceholderImage;k.current.innerHTML=n(a({isLoading:!0,isLoaded:L.has(j),image:i},m)),L.has(j)||(e=requestAnimationFrame((function(){k.current&&(t=o(k.current,j,L,u,d,h,g))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){L.has(j)&&E&&(k.current.innerHTML=E(a({isLoading:L.has(j),isLoaded:L.has(j),image:i},m)),null==d||d({wasCached:!0}),null==h||h({wasCached:!0}))}),[i]),(0,n.createElement)(o,a({},S,{style:a({},T,u,{backgroundColor:l}),className:A+(f?" "+f:""),ref:k,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(k,e):null}));j.propTypes=S,j.displayName="GatsbyImage";var P,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],R=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},N=new Set(["fixed","fullWidth","constrained"]),_={src:i().string.isRequired,alt:A,width:R,height:R,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!N.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(P=j,function(e){var t=e.src,r=e.__imageData,o=e.__error,i=s(e,I);return o&&console.warn(o),r?n.createElement(P,a({image:r},i)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=_},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,o=0;o<e.length;o++){var i=e[o];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,n=r,r=!0,o++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,o-1)+"-"+e.slice(o-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},1290:function(e,t,r){"use strict";var n=r(7294),o=r(7946),i=r(2660);var a={name:"f9dc4c",styles:"padding:24px;text-align:center"},s={name:"1bwgem4",styles:"margin-top:24px;background-color:#F5F5F5;font-size:1.7rem;color:#797979"};t.Z=()=>{const e=s,t=(0,o.iv)({paddingTop:"24px",display:"flex",justifyContent:"center",gap:"48px",a:{color:"#797979"},"a:hover":{textDecoration:"none"},[i.Z[0]]:{flexDirection:"column",textAlign:"center",gap:"0px",p:{borderBottom:"1px solid rgba(0, 0, 0, 0.12);",padding:"16px"}}},"","","","","","","",""),r=a;return(0,o.tZ)(n.Fragment,null,(0,o.tZ)("div",{css:e},(0,o.tZ)("div",{css:t},(0,o.tZ)("a",{href:"/user-policy"},(0,o.tZ)("p",null,"利用規約")),(0,o.tZ)("a",{href:"/privacy-policy"},(0,o.tZ)("p",null,"プライバシーポリシー")),(0,o.tZ)("a",{href:"/terms-of-sale"},(0,o.tZ)("p",null,"特定商取引法に基づく表記")),(0,o.tZ)("a",{href:"/company"},(0,o.tZ)("p",null,"運営会社")),(0,o.tZ)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSdTRSPZJ9PS5lAXBJTui5n_25DscUlz09jy333w1GcrFkLWvg/viewform"},(0,o.tZ)("p",null,"お問い合わせ"))),(0,o.tZ)("p",{css:r},"©2022 Lagoon Corporation, inc. Icon made by Font Awesome is licensed by CC 4.0BY")))}},8721:function(e,t,r){"use strict";r.d(t,{Z:function(){return we}});var n,o,i,a,s=r(5697),c=r.n(s),u=r(4839),l=r.n(u),f=r(2993),p=r.n(f),d=r(7294),h=r(6494),g=r.n(h),m="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",C="href",E="http-equiv",A="innerHTML",S="itemprop",O="name",x="property",L="rel",k="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",N="encodeSpecialCharacters",_="onChangeClientState",M="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),Z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,v.TITLE),r=Q(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,I);return t||n||void 0},V=function(e){return Q(e,_)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||r===L&&"canonical"===e[r].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==A&&s!==T&&s!==S||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=g()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(v.BODY,n),ce(v.HTML,o),se(f,p);var d={baseTag:ue(v.BASE,r),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,s),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},h={},g={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(g[e]=d[e].oldTags)})),t&&t(),c(e,h,g)},ae=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(v.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(z):r.getAttribute(z)!==a.join(",")&&r.setAttribute(z,a.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(z,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,o=fe(r,n),[d.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===A||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===Z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(m,r,n),htmlAttributes:pe(y,o,n),link:pe(v.LINK,i,n),meta:pe(v.META,a,n),noscript:pe(v.NOSCRIPT,s,n),script:pe(v.SCRIPT,c,n),style:pe(v.STYLE,u,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},he=l()((function(e){return{baseTag:$([C,j],e),bodyAttributes:J(m,e),defer:Q(e,R),encode:Q(e,N),htmlAttributes:J(y,e),linkTags:G(v.LINK,[L,C],e),metaTags:G(v.META,[O,w,E,x,S],e),noscriptTags:G(v.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:G(v.SCRIPT,[k,A],e),styleTags:G(v.STYLE,[T],e),title:K(e),titleAttributes:J(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ge=(o=he,a=i=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return H({},o,((t={})[n.type]=a,t.titleAttributes=H({},i),t));case v.BODY:return H({},o,{bodyAttributes:H({},i)});case v.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((r={})[n.type]=H({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(o,n)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ge.renderStatic=ge.rewind;var me=ge,ye=r(1597),be=r(7946);var ve={name:"1em2kwy",styles:"html{font-size:50%;}*{margin:0;padding:0;}"},we=e=>{const{title:t,description:r,children:n}=e,o=ve;return(0,be.tZ)(d.Fragment,null,(0,be.tZ)(be.xB,{styles:o}),(0,be.tZ)(me,{htmlAttributes:{lang:"ja"},link:[{rel:"icon",href:(0,ye.dq)("/favicon.ico")}],title:t,meta:[{name:"description",content:r},{name:"viewport",content:"width=device-width, initial-scale=1.0"}]}),n)}},1426:function(e,t,r){"use strict";var n=r(7294);const o=(0,n.createContext)({advantageRef:n.createRef(),detailRef:n.createRef(),priceRef:n.createRef(),qandARef:n.createRef(),announcementRef:n.createRef(),scrollToRef:e=>{}});t.Z=o},4457:function(e,t,r){"use strict";var n=r(7294),o=r(1426);t.Z=()=>(0,n.useContext)(o.Z)},7881:function(e,t){"use strict";t.Z={primary:{main:"#009688",light:"#00968808",select:"#B2DFDB"},secondary:"#E91E63"}},2660:function(e,t){"use strict";const r=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`));t.Z=r},9235:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/hp/static/17127386f16c7a373e078b2532081a51/d5167/join-logo.png","srcSet":"/hp/static/17127386f16c7a373e078b2532081a51/d25a7/join-logo.png 10w,\\n/hp/static/17127386f16c7a373e078b2532081a51/d470a/join-logo.png 20w,\\n/hp/static/17127386f16c7a373e078b2532081a51/d5167/join-logo.png 40w","sizes":"(min-width: 40px) 40px, 100vw"},"sources":[{"srcSet":"/hp/static/17127386f16c7a373e078b2532081a51/46057/join-logo.webp 10w,\\n/hp/static/17127386f16c7a373e078b2532081a51/31045/join-logo.webp 20w,\\n/hp/static/17127386f16c7a373e078b2532081a51/2be77/join-logo.webp 40w","type":"image/webp","sizes":"(min-width: 40px) 40px, 100vw"}]},"width":40,"height":36}')},3400:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/hp/static/7d40ef44bce5b4f5c106c33997426239/6488e/logo.png","srcSet":"/hp/static/7d40ef44bce5b4f5c106c33997426239/d50dc/logo.png 200w,\\n/hp/static/7d40ef44bce5b4f5c106c33997426239/90a92/logo.png 400w,\\n/hp/static/7d40ef44bce5b4f5c106c33997426239/6488e/logo.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/hp/static/7d40ef44bce5b4f5c106c33997426239/2aea7/logo.webp 200w,\\n/hp/static/7d40ef44bce5b4f5c106c33997426239/6a964/logo.webp 400w,\\n/hp/static/7d40ef44bce5b4f5c106c33997426239/c0f85/logo.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":160}')}}]);
//# sourceMappingURL=commons-72d03a67f8624e4e7200.js.map