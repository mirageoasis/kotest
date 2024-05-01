"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[37562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"xmethods",title:"Conditional tests with X Methods",slug:"conditional-tests-with-x-methods.html",sidebar_label:"X Methods"},a=void 0,s={unversionedId:"framework/conditional/xmethods",id:"version-5.8/framework/conditional/xmethods",title:"Conditional tests with X Methods",description:"An idea that is popular with Javascript testing frameworks is to allow the test keywords to be prefixed with 'x' to disable the test, and any nested tests.",source:"@site/versioned_docs/version-5.8/framework/conditional/xmethods.md",sourceDirName:"framework/conditional",slug:"/framework/conditional/conditional-tests-with-x-methods.html",permalink:"/docs/framework/conditional/conditional-tests-with-x-methods.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/framework/conditional/xmethods.md",tags:[],version:"5.8",frontMatter:{id:"xmethods",title:"Conditional tests with X Methods",slug:"conditional-tests-with-x-methods.html",sidebar_label:"X Methods"},sidebar:"framework",previous:{title:"Focus and Bang",permalink:"/docs/framework/conditional/conditional-tests-with-focus-and-bang.html"},next:{title:"Spec Annotations",permalink:"/docs/framework/conditional/spec-annotations-conditional-evaluation.html"}},l={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An idea that is popular with Javascript testing frameworks is to allow the test keywords to be prefixed with 'x' to disable the test, and any nested tests."),(0,o.kt)("p",null,"This is similar to using the bang character in the test name."),(0,o.kt)("p",null,"For example, with ",(0,o.kt)("inlineCode",{parentName:"p"},"DescribeSpec")," we can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"xdescribe")," as in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class XMethodsExample : DescribeSpec({\n\n  xdescribe("this block and it\'s children are now disabled") {\n    it("will not run") {\n      // disabled test\n    }\n  }\n\n})\n')),(0,o.kt)("p",null,"Similarly, we could add the prefix to a nested test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class XMethodsExample : DescribeSpec({\n\n  describe("this block is enabled") {\n    xit("will not run") {\n      // disabled test\n    }\n    it("will run") {\n       // enabled test\n    }\n  }\n\n})\n')),(0,o.kt)("p",null,"See which specs support this, and the syntax required on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html"},"specs styles guide"),"."))}p.isMDXComponent=!0}}]);