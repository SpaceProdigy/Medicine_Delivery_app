"use strict";(self.webpackChunkproducts_app=self.webpackChunkproducts_app||[]).push([[448],{1572:function(r,n,t){t.d(n,{t:function(){return B}});var e=t(1413),u=t(5987),o=t(5956),i=t(2791),a=(0,i.createContext)(null),c=t(9592),f=t(9829),v=t(3898),l=t(1252);var d=["children","as","axis","onReorder","values"];var s=(0,i.forwardRef)((function(r,n){var t=r.children,s=r.as,p=void 0===s?"ul":s,g=r.axis,x=void 0===g?"y":g,m=r.onReorder,Z=r.values,E=(0,u.Z)(r,d),R=(0,f.h)((function(){return(0,c.E)(p)})),S=[],I=(0,i.useRef)(!1);(0,o.k)(Boolean(Z),"Reorder.Group must be provided a values prop");var k={axis:x,registerItem:function(r,n){var t=S.findIndex((function(n){return r===n.value}));-1!==t?S[t].layout=n[x]:S.push({value:r,layout:n[x]}),S.sort(h)},updateOrder:function(r,n,t){if(!I.current){var e=function(r,n,t,e){if(!e)return r;var u=r.findIndex((function(r){return r.value===n}));if(-1===u)return r;var o=e>0?1:-1,i=r[u+o];if(!i)return r;var a=r[u],c=i.layout,f=(0,l.t)(c.min,c.max,.5);return 1===o&&a.layout.max+t>f||-1===o&&a.layout.min+t<f?(0,v.uo)(r,u,u+o):r}(S,r,n,t);S!==e&&(I.current=!0,m(e.map(y).filter((function(r){return-1!==Z.indexOf(r)}))))}}};return(0,i.useEffect)((function(){I.current=!1})),i.createElement(R,(0,e.Z)((0,e.Z)({},E),{},{ref:n,ignoreStrict:!0}),i.createElement(a.Provider,{value:k},t))}));function y(r){return r.value}function h(r,n){return r.layout.min-n.layout.min}var p=t(9439),g=t(937),x=t(9090);function m(r){var n=(0,f.h)((function(){return(0,g.BX)(r)}));if((0,i.useContext)(x._).isStatic){var t=(0,i.useState)(r),e=(0,p.Z)(t,2)[1];(0,i.useEffect)((function(){return n.on("change",e)}),[])}return n}var Z=t(9983),E=function(r){return function(r){return r&&"object"===typeof r&&r.mix}(r)?r.mix:void 0};var R=t(2199),S=t(9650);function I(r,n){var t=m(n()),e=function(){return t.set(n())};return e(),(0,R.L)((function(){var n=function(){return S.Wi.update(e,!1,!0)},t=r.map((function(r){return r.on("change",n)}));return function(){t.forEach((function(r){return r()})),(0,S.Pn)(e)}})),t}function k(r,n,t,u){if("function"===typeof r)return function(r){g.S1.current=[],r();var n=I(g.S1.current,r);return g.S1.current=void 0,n}(r);var o="function"===typeof n?n:function(){var r=!Array.isArray(arguments.length<=0?void 0:arguments[0]),n=r?0:-1,t=0+n<0||arguments.length<=0+n?void 0:arguments[0+n],u=1+n<0||arguments.length<=1+n?void 0:arguments[1+n],o=2+n<0||arguments.length<=2+n?void 0:arguments[2+n],i=3+n<0||arguments.length<=3+n?void 0:arguments[3+n],a=(0,Z.s)(u,o,(0,e.Z)({mixer:E(o[0])},i));return r?a(t):a}(n,t,u);return Array.isArray(r)?w(r,o):w([r],(function(r){var n=(0,p.Z)(r,1)[0];return o(n)}))}function w(r,n){var t=(0,f.h)((function(){return[]}));return I(r,(function(){t.length=0;for(var e=r.length,u=0;u<e;u++)t[u]=r[u].get();return n(t)}))}var b=t(1453),C=["children","style","value","as","onDrag","layout"];function A(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,b.i)(r)?r:m(n)}var B={Group:s,Item:(0,i.forwardRef)((function(r,n){var t=r.children,v=r.style,l=void 0===v?{}:v,d=r.value,s=r.as,y=void 0===s?"li":s,h=r.onDrag,g=r.layout,x=void 0===g||g,m=(0,u.Z)(r,C),Z=(0,f.h)((function(){return(0,c.E)(y)})),E=(0,i.useContext)(a),R={x:A(l.x),y:A(l.y)},S=k([R.x,R.y],(function(r){var n=(0,p.Z)(r,2),t=n[0],e=n[1];return t||e?1:"unset"}));(0,o.k)(Boolean(E),"Reorder.Item must be a child of Reorder.Group");var I=E.axis,w=E.registerItem,b=E.updateOrder;return i.createElement(Z,(0,e.Z)((0,e.Z)({drag:I},m),{},{dragSnapToOrigin:!0,style:(0,e.Z)((0,e.Z)({},l),{},{x:R.x,y:R.y,zIndex:S}),layout:x,onDrag:function(r,n){var t=n.velocity;t[I]&&b(d,R[I].get(),t[I]),h&&h(r,n)},onLayoutMeasure:function(r){return w(d,r)},ref:n,ignoreStrict:!0}),t)}))}},4330:function(r,n,t){t.d(n,{j7p:function(){return u}});var e=t(2119);function u(r){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"},child:[]}]})(r)}}}]);
//# sourceMappingURL=448.b664336c.chunk.js.map