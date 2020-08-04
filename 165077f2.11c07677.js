(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(2),r=(a(0),a(142));const o={id:"flashSwap",title:"Flash Swap",sidebar_label:"Flash Swap"},s={id:"flashSwap",isDocsHomePage:!1,title:"Flash Swap",description:"What is flash swap",source:"@site/docs/flashSwap.md",permalink:"/docs/docs/flashSwap",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/flashSwap.md",sidebar_label:"Flash Swap",sidebar:"someSidebar",previous:{title:"Use Guide",permalink:"/docs/docs/contractUseGuide"},next:{title:"Deployed Infomation",permalink:"/docs/docs/deployedInfo"}},i=[{value:"What is flash swap",id:"what-is-flash-swap",children:[]},{value:"How does flash swap work",id:"how-does-flash-swap-work",children:[]},{value:"What can flash swap do",id:"what-can-flash-swap-do",children:[]},{value:"Some thoughts on flash swap",id:"some-thoughts-on-flash-swap",children:[]}],c={rightToc:i};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-flash-swap"},"What is flash swap"),Object(r.b)("p",null,"\u7b80\u5355\u6765\u8bb2\uff0c\u5c31\u662f\u5141\u8bb8\u4f60\u8d4a\u8d26\uff01\u5f53\u4f60\u5728 DODO buy/sell \u7684\u65f6\u5019\uff0c\u4f60\u53ef\u4ee5\u5148\u83b7\u5f97\u8981\u8d2d\u4e70\u7684 token\uff0cdo anything you want with \u8fd9\u7b14\u94b1\u3002\u4e4b\u540e\u518d\u652f\u4ed8\u8d27\u6b3e\u3002"),Object(r.b)("p",null,"Simply put, you are allowed to pay on credit! When you buy or sell on DODO, you can first get the token you want to buy, do anything you want with the token and then pay for it later."),Object(r.b)("h2",{id:"how-does-flash-swap-work"},"How does flash swap work"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_flash_swap.jpeg",alt:null}))),Object(r.b)("p",null,"The picture above shows the four steps to make flash swap"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Call the buyBaseToken of the DODO smart contract"),Object(r.b)("li",{parentName:"ol"},"DODO will transfer the Base token to the message sender first"),Object(r.b)("li",{parentName:"ol"},"If the parameter Data of buyBaseToken is not null, the DODO smart contract will call the dodoCall method of the message sender"),Object(r.b)("li",{parentName:"ol"},"After the dodoCall is executed, the DODO smart contract will retrieve the quote token required for this transaction from the message sender")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The sellBaseToken can also perform flash swap in the same way."))),Object(r.b)("p",null,"Flash swap requires the message sender to be a contract that follows below interface."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"interface IDODOCallee {\n    function dodoCall(\n        bool isBuyBaseToken,\n        uint256 baseAmount,\n        uint256 quoteAmount,\n        bytes calldata data\n    ) external;\n}\n")),Object(r.b)("h2",{id:"what-can-flash-swap-do"},"What can flash swap do"),Object(r.b)("p",null,"Flash swap can significantly improve market effectiveness."),Object(r.b)("p",null,"Market parity is maintained by arbitrageurs. Flash swap can completely eliminate the arbitrageur\u2019s capital requirements, greatly reduce the arbitrage threshold, and promote market effectiveness. Here we will demonstrate a completely trustless and risk free arbitrage contract as a use case of swap flash."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radar-bear/dodo-smart-contract/blob/master/contracts/helper/UniswapArbitrageur.sol"}),"source code")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"deployed address")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_one_click_arbitrage.jpeg",alt:null}))),Object(r.b)("p",null,"An arbitrage consists of the following 9 steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"User calls executeBuyArbitrage on Arbitrageur Contract"),Object(r.b)("li",{parentName:"ol"},"Arbitrageur Contract calls buyBaseToken on DODO and triggers flash swap"),Object(r.b)("li",{parentName:"ol"},"DODO transfers 1 WETH to Arbitrageur Contract"),Object(r.b)("li",{parentName:"ol"},"DODO calls dodoCall on Arbitrageur Contract"),Object(r.b)("li",{parentName:"ol"},"Arbitrageur Contract transfers 1 WETH received from DODO to UniswapV2"),Object(r.b)("li",{parentName:"ol"},"Arbitrageur Contract call swap on UniswapV2"),Object(r.b)("li",{parentName:"ol"},"UniswapV2 transfers 200 USDC to Arbitrageur Contract"),Object(r.b)("li",{parentName:"ol"},"DODO call transferFrom and retrieve 150 USDC from Arbitrageur Contract"),Object(r.b)("li",{parentName:"ol"},"Arbitrageur Contract transfers the remaining 50 USDC to User")),Object(r.b)("p",null,"In summary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Flash swap is made up of step 2, 3, 4, and 8"),Object(r.b)("li",{parentName:"ul"},"Uniswap is made up of step 5, 6, and 7"),Object(r.b)("li",{parentName:"ul"},"An user would only notice the process of sending transaction and making profits!")),Object(r.b)("p",null,"The shining point of this contract is that users do not need any capital, nor do they need to know dodo and uniswap. Just simply call a function and if the execution succeeds, it will make a profit. In contrast, if the execution fails, only gas will be lost."),Object(r.b)("p",null,"In order to avoid unnecessary gas consumption, we recommend that users use eth_call to execute executeBuyArbitrage or executeSellArbitrage in advance to estimate arbitrage returns. If there is an arbitrage opportunity, these two functions will return profit of quote token and base token after successful execution."),Object(r.b)("h2",{id:"some-thoughts-on-flash-swap"},"Some thoughts on flash swap"),Object(r.b)("p",null,"Once you have a deep understanding of flash swap, you will find the superiority of the Defi world over the centralized world. The combinability of smart contracts has increased the fund utilization of Defi to an unprecedented level. Due to the feature of trustlessness, the cost of credit in Defi is incredibly low. Once this financial system can be integrated into the real world, the improvement of productivity for human kind is unbelievable."),Object(r.b)("p",null,"I have discussed the fascinating features of smart contracts with many people, but few people can really feel it. I hope flash swap can become an interesting case that ordinary people can understand and accept."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Flash swap is inspired by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dydx.exchange/"}),"DyDx")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://uniswap.org/docs/v2/core-concepts/flash-swaps"}),"Uniswap"),". We really appriciate what they have done before!"))))}l.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,h=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(h,i(i({ref:t},l),{},{components:a})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);