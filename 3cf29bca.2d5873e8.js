(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(11),r=(n(0),n(202)),o={title:"General Principles"},l={id:"animations-general-principles",title:"General Principles",description:"Just like building UIs with ComponentKit might require a slightly different way of thinking compared to traditional iOS UI frameworks, the same principle applies to animations.",source:"@site/docs/animations-general-principles.md",permalink:"/docs/animations-general-principles",sidebar:"docs",previous:{title:"Debugging",permalink:"/docs/debugging"},next:{title:"Initial / Final Animations",permalink:"/docs/animations-initial-and-final"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Just like building UIs with ComponentKit might require a slightly different way of thinking compared to traditional iOS UI frameworks, the same principle applies to animations."),Object(r.b)("p",null,'Generally, all changes to your UI should be done via state or props updates instead of mutating view attributes directly. Similarly, animations in ComponentKit are only triggered by regenerating a component tree, so there has to be a state or props update. You should avoid reaching out to a component view and applying animations to it or its layer directly because component views are managed by CK infra and your changes are not guaranteed to be preserved. In addition to that, you risk introducing inconsistencies between animation values and the current values of the animated properties which will result in "jumps" and other visual artefacts.'),Object(r.b)("p",null,"In the majority of the cases, you should be doing one of three things below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"animate from a given value to the value specified in the view configuration")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"animate from the value specified in the view configuration to a given value")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"animate between values specified in the view configurations of a different generations of a given component"))),Object(r.b)("p",null,"On the code level this translates to you specifying either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"the initial value for an animated property (often referred to as ",Object(r.b)("inlineCode",{parentName:"p"},"from")," value)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"the final value for an animated property (",Object(r.b)("inlineCode",{parentName:"p"},"to")," value)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"no values at all, since they will be inferred from the view configuration"))),Object(r.b)("p",null,"Specifying both initial and final values is usually a sign that you're doing more work than necessary or even introducing a bug."),Object(r.b)("p",null,'Another way to think about this is that only view configuration is permanent and animation values are temporary. A common mistake is to make animation values "permanent" by using a ',Object(r.b)("inlineCode",{parentName:"p"},"forwards")," fill mode and setting ",Object(r.b)("inlineCode",{parentName:"p"},"removedOnCompletion")," property to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", which causes animated values to override the values in the model layer. In addition to writing more code, this also increases the load on the render server process by keeping these animations around thus affecting performance. In the vast majority of the cases this wouldn't be an issue if you make sure to have the right values in the view configuration."),Object(r.b)("p",null,"The rest of this document will demonstrate how to apply these principles when writing animation code for your components."))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||r;return n?a.a.createElement(d,l({ref:t},s,{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);