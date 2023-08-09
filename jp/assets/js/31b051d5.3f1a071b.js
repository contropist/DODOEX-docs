(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{116:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return u}));var n=t(0),s=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),l=function(e){var a=s.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=l(e.components);return s.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},h=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),o=l(t),h=n,u=o["".concat(r,".").concat(h)]||o[h]||b[h]||i;return t?s.a.createElement(u,p(p({ref:a},c),{},{components:t})):s.a.createElement(u,p({ref:a},c))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=h;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,r[1]=p;for(var c=2;c<i;c++)r[c]=t[c];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},80:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return m})),t.d(a,"default",(function(){return l}));var n=t(3),s=t(7),i=(t(0),t(116)),r={id:"publicPool",title:"DODO vending machine",sidebar_label:"DODO vending machine"},p={unversionedId:"publicPool",id:"publicPool",isDocsHomePage:!1,title:"DODO vending machine",description:"What is DODO vending machine",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/publicPool.md",slug:"/publicPool",permalink:"/docs/jp/docs/publicPool",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/publicPool.md",version:"current",sidebar_label:"DODO vending machine",sidebar:"someSidebar",previous:{title:"PMM\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u5b66\u539f\u7406",permalink:"/docs/jp/docs/math"},next:{title:"DODO Private Pool",permalink:"/docs/jp/docs/privatePool"}},m=[{value:"What is DODO vending machine",id:"what-is-dodo-vending-machine",children:[{value:"Use case1:",id:"use-case1",children:[]},{value:"Use case2\uff1a",id:"use-case2\uff1a",children:[]},{value:"Use case3:",id:"use-case3",children:[]}]},{value:"About the math",id:"about-the-math",children:[]},{value:"Others",id:"others",children:[]}],c={toc:m};function l(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-dodo-vending-machine"},"What is DODO vending machine"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"From Selling Apples to a Liquidity Market")),Object(i.b)("p",null,"You have an apple tree in your backyard and you recently harvested 100 apples from it. Now you want to set up a stand to sell them. The simplest and most obvious idea is to sell all of them at a constant price, say $1 for an apple. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dvm_1.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dvm_2.png",alt:null})),Object(i.b)("p",null,"You soon discover that the market is better than you expected and so many people in the neighborhood are coming to buy your apples that you have fewer and fewer apples in your inventory. That\u2019s when you realize that the price may have been set too low. You figure that the more apples you sell, the stronger the demand for apples is, so you should sell them at a higher price to make a larger profit overall. As the number of apples sold goes up, so does the price."),Object(i.b)("p",null,"This relationship is captured by the following pricing curve (it\u2019s a curve because it\u2019s not a straight line anymore). The yellow area above the dotted line represents the extra profit you will make by using this new pricing model."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dvm_3.png",alt:null})),Object(i.b)("p",null,"Some of your customers ask you if they can return an apple after they\u2019ve bought it if they don\u2019t want it anymore (let us assume that your apples never go bad)."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dvm_4.png",alt:null})),Object(i.b)("p",null,"This refund/buyback policy means that the market for your apples is now two-way: people can buy and sell apples. Congratulations! You\u2019ve just created a market where apples have great liquidity, since apples can now be bought and sold instantly near their fair market value. The apple price will fluctuate as people continue to trade apples."),Object(i.b)("p",null,"But why is it good to have high liquidity? Because a highly liquid market is efficient and usually associated with less risk."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dvm_5.png",alt:null})),Object(i.b)("p",null,"So what do you need to create such a liquidity market for your apples? The answer is extremely simple:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Apples"),Object(i.b)("li",{parentName:"ul"},"A pricing curve")),Object(i.b)("p",null,"That\u2019s exactly what the DODO Vending Machine model does."),Object(i.b)("p",null,"After reading this, you will definitely ask, what specific use cases are there for DODO vending machine?"),Object(i.b)("h3",{id:"use-case1"},"Use case1:"),Object(i.b)("p",null,"Suppose you are a blockchain developer and want to build a community-driven project. You can issue 10 million tokens, of which 1% or 100 thousand is for yourself. The rest (i.e. 9.9 million tokens) is distributed to the community and let\u2019s say you set the token price to $1. If you want to create a liquidity market for all 9.9 million tokens on an AMM, you need another $9.9 million as the bid-side liquidity to do it, which is obviously a huge amount of money that you probably don\u2019t have, and therefore this project becomes infeasible."),Object(i.b)("p",null,"Your alternative is to create a simple AMM pool with much fewer tokens and less liquidity in it, say $1,000 and 1,000 tokens, but if someone wants to invest $100,000 in your project token, he will have to pay $100,000 and receive only 1,000 tokens in return, which amounts to $100 per token, 100x the market price you set! This is, of course, not desirable, and this market is definitely not an efficient market."),Object(i.b)("p",null,"However, you can choose to build a DODO Vending Machine with these 9.9 million tokens at an initial price of $1 and with k value set to 1 (which means the pricing curve is a bonding curve, as discussed above). If a community member is bullish on your project and buys 100,000 tokens, his average price is only $1.005 per token! Much more desirable."),Object(i.b)("h3",{id:"use-case2\uff1a"},"Use case2\uff1a"),Object(i.b)("p",null,"You are a project team with a need to maintain and manage the price of your token. DODO Vending Machine can help you buy and set up liquidity in a flexible manner to achieve your objectives."),Object(i.b)("p",null,"Let us use an algorithmic stablecoin that is meant to be pegged to 1 DAI as an example. Call the token X. If X\u2019s token price dips below 1 DAI, then you, the project team, need to raise bid-side liquidity as soon as possible to counter the selling pressure to avoid the death spiral, a vicious cycle where tokens are dumped continuously as the price decreases. If the dumping can be stopped at 1 X = 0.9 DAI, then you will instill confidence in your project\u2019s investors and users, convincing them that you can be trusted to maintain the peg. Conversely, if the dumping stopped at 1 X =0.5 DAI, the consequences could be catastrophic \u2014 the lack of liquidity might have already triggered an irreversible death spiral."),Object(i.b)("p",null,"So here\u2019s what you can do. You can use DODO Vending Machine to set up a DAI-X pool, set the initial price to 1 X = 1 DAI, and set k to a very small value, say 0.01. In addition, you incentivize liquidity providers to deposit their LP tokens into this pool with rewards in X. This way, you can ensure ample bid-side liquidity that is allocated near 1 X = 1 DAI, which is much more capital-efficient funding than traditional AMMs."),Object(i.b)("p",null,"Even if it\u2019s not an algorithmic stablecoin project, you can still raise funds for your token at key support price levels with DODO Vending Machine, coupled with reward incentive program to encourage liquidity provision."),Object(i.b)("h3",{id:"use-case3"},"Use case3:"),Object(i.b)("p",null,"You can use the DODO Vending Machine model to control the magnitude of your token\u2019s pumps in order to discourage speculative trading and the formation of a speculative bubble."),Object(i.b)("p",null,"For most people who are new to the cryptocurrency world, this need may be a bit baffling and difficult to understand. In fact, it is not good for the price to go up too high in a project\u2019s very early stages. An asset\u2019s price being driven up to unsubstantiated levels often indicates a bubble, which will lead to many people eventually being dumped on by whales and speculators."),Object(i.b)("p",null,"The most effective way to curb speculation is to provide enough liquidity at low prices to keep the average token price low for most people. This is exactly the kind of flexibility DODO Vending Machine can provide. To minimize speculation, set i at a low price and k to a small value."),Object(i.b)("h2",{id:"about-the-math"},"About the math"),Object(i.b)("p",null,"DODO vending machine also uses the PMM algorithm. There may be a question, doesn't PMM adjust prices in real time based on oracle? There is no external price for the long tail tokens in the pool."),Object(i.b)("p",null,"Here we will introduce ",Object(i.b)("a",{parentName:"p",href:"./pmm"},"PMM")," \uff1aA compressed order book. DODO vending machine uses the PMM algorithm to arrange a selling liquidity with a price ranging from i to \u221e. Here i no longer represents the external price, but represents the starting price. The specific pricing formula is as follows:"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("msub",{parentName:"mrow"},Object(i.b)("mi",{parentName:"msub"},"P"),Object(i.b)("mrow",{parentName:"msub"},Object(i.b)("mi",{parentName:"mrow"},"m"),Object(i.b)("mi",{parentName:"mrow"},"a"),Object(i.b)("mi",{parentName:"mrow"},"r"),Object(i.b)("mi",{parentName:"mrow"},"g"),Object(i.b)("mi",{parentName:"mrow"},"i"),Object(i.b)("mi",{parentName:"mrow"},"n"))),Object(i.b)("mo",{parentName:"mrow"},"="),Object(i.b)("mi",{parentName:"mrow"},"i"),Object(i.b)("mi",{parentName:"mrow"},"R")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P_{margin}=iR")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.969438em",verticalAlign:"-0.286108em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.13889em"}},"P"),Object(i.b)("span",{parentName:"span",className:"msupsub"},Object(i.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.311664em"}},Object(i.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.13889em",marginRight:"0.05em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"m"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"a"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.02778em"}},"r"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.03588em"}},"g"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"i"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"n"))))),Object(i.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.286108em"}},Object(i.b)("span",{parentName:"span"})))))),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(i.b)("span",{parentName:"span",className:"mrel"},"="),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathdefault"},"i"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.00773em"}},"R")))))),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"I"),Object(i.b)("mi",{parentName:"mrow"},"f"),Object(i.b)("mi",{parentName:"mrow"},"B"),Object(i.b)("mo",{parentName:"mrow"},"<"),Object(i.b)("msub",{parentName:"mrow"},Object(i.b)("mi",{parentName:"msub"},"B"),Object(i.b)("mn",{parentName:"msub"},"0")),Object(i.b)("mo",{parentName:"mrow",separator:"true"},","),Object(i.b)("mi",{parentName:"mrow"},"t"),Object(i.b)("mi",{parentName:"mrow"},"h"),Object(i.b)("mi",{parentName:"mrow"},"e"),Object(i.b)("mi",{parentName:"mrow"},"n"),Object(i.b)("mi",{parentName:"mrow"},"R"),Object(i.b)("mo",{parentName:"mrow"},"="),Object(i.b)("mn",{parentName:"mrow"},"1"),Object(i.b)("mo",{parentName:"mrow"},"\u2212"),Object(i.b)("mi",{parentName:"mrow"},"k"),Object(i.b)("mo",{parentName:"mrow"},"+"),Object(i.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(i.b)("mfrac",{parentName:"mrow"},Object(i.b)("msub",{parentName:"mfrac"},Object(i.b)("mi",{parentName:"msub"},"B"),Object(i.b)("mn",{parentName:"msub"},"0")),Object(i.b)("mi",{parentName:"mfrac"},"B")),Object(i.b)("msup",{parentName:"mrow"},Object(i.b)("mo",{parentName:"msup",stretchy:"false"},")"),Object(i.b)("mn",{parentName:"msup"},"2")),Object(i.b)("mi",{parentName:"mrow"},"k")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"If B<B_0, then R=1-k+(\\frac{B_0}{B})^2k")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.07847em"}},"I"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.10764em"}},"f"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.05017em"}},"B"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(i.b)("span",{parentName:"span",className:"mrel"},"<"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.05017em"}},"B"),Object(i.b)("span",{parentName:"span",className:"msupsub"},Object(i.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},Object(i.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.05017em",marginRight:"0.05em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(i.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(i.b)("span",{parentName:"span"})))))),Object(i.b)("span",{parentName:"span",className:"mpunct"},","),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathdefault"},"t"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault"},"h"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault"},"e"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault"},"n"),Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.00773em"}},"R"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(i.b)("span",{parentName:"span",className:"mrel"},"="),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.72777em",verticalAlign:"-0.08333em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},"1"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(i.b)("span",{parentName:"span",className:"mbin"},"\u2212"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03148em"}},"k"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(i.b)("span",{parentName:"span",className:"mbin"},"+"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"1.233431em",verticalAlign:"-0.345em"}}),Object(i.b)("span",{parentName:"span",className:"mopen"},"("),Object(i.b)("span",{parentName:"span",className:"mord"},Object(i.b)("span",{parentName:"span",className:"mopen nulldelimiter"}),Object(i.b)("span",{parentName:"span",className:"mfrac"},Object(i.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8884309999999999em"}},Object(i.b)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.05017em"}},"B")))),Object(i.b)("span",{parentName:"span",style:{top:"-3.23em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(i.b)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),Object(i.b)("span",{parentName:"span",style:{top:"-3.4101em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},Object(i.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.05017em"}},"B"),Object(i.b)("span",{parentName:"span",className:"msupsub"},Object(i.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.31731428571428577em"}},Object(i.b)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"-0.05017em",marginRight:"0.07142857142857144em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(i.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},Object(i.b)("span",{parentName:"span"})))))))))),Object(i.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},Object(i.b)("span",{parentName:"span"}))))),Object(i.b)("span",{parentName:"span",className:"mclose nulldelimiter"})),Object(i.b)("span",{parentName:"span",className:"mclose"},Object(i.b)("span",{parentName:"span",className:"mclose"},")"),Object(i.b)("span",{parentName:"span",className:"msupsub"},Object(i.b)("span",{parentName:"span",className:"vlist-t"},Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},Object(i.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},"2")))))))),Object(i.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03148em"}},"k")))))),Object(i.b)("p",null,"B0 in the above formula is the number of tokens initially recharged, and B is the current token inventory."),Object(i.b)("p",null,"It can be seen from the formula that the pool is an one side PMM algorithm (the current token amount B is less than the initial token amount B0), so it has the following properties:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the beginning, there is no quote, only need the project's base tokens to start, and the amount is unlimited."),Object(i.b)("li",{parentName:"ol"},"Starting price i"),Object(i.b)("li",{parentName:"ol"},"As base tokens are sold, the balance in the contract decreases and the price increases"),Object(i.b)("li",{parentName:"ol"},'The quote token is used as buying liquidity, and the consumed selling liquidity will be "flipped" into buying liquidity, so buying liquidity can always support selling pressure'),Object(i.b)("li",{parentName:"ol"},"The price curve is adjustable, the smaller k, the slower price changes, the larger k, the faster price changes. When k=0, it is a constant price, when k=1, it is a bonding curve")),Object(i.b)("p",null,"ps: DODO vending machine allows anyone to deposit and withdraw freely, but it must be based on the current ratio of base and quote. For example, if the current price is 2$, there are 100w base and 10w quote, the ration will be base:quote = 10:1. This design is to make the deposit and withdrawal do not affecting the price. Note that the current price does not affect the deposit and withdrawal ratio, only the inventory affects."),Object(i.b)("h2",{id:"others"},"Others"),Object(i.b)("p",null,"The money and apples placed in the pool provide liquidity for market. And this money and apples have opportunity costs. Therefore, we will charge liquidity providers fee to all those who trade apples."),Object(i.b)("p",null,"Of course, you can manage your assets in the pool. Deposit and withdraw apples and money in a proportions. If someone else is willing to join, they can also deposit or withdraw the two assets in a proportions. This will neither affect your assets nor market prices."))}l.isMDXComponent=!0}}]);