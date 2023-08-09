(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,h=s["".concat(i,".").concat(p)]||s[p]||b[p]||o;return n?r.a.createElement(h,c(c({ref:t},d),{},{components:n})):r.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(116)),i={id:"nftTechSpec",title:"DODO NFT Tech Spec",sidebar_label:"DODO NFT Tech Spec"},c={unversionedId:"nftTechSpec",id:"nftTechSpec",isDocsHomePage:!1,title:"DODO NFT Tech Spec",description:"DODONFT Relevant Contracts",source:"@site/docs/nftTechSpec.md",slug:"/nftTechSpec",permalink:"/docs/jp/docs/nftTechSpec",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/nftTechSpec.md",version:"current",sidebar_label:"DODO NFT Tech Spec",sidebar:"someSidebar",previous:{title:"DODO NFT Core Features",permalink:"/docs/jp/docs/nftCoreFeatures"},next:{title:"DODO: The liquid, flexible DEX that\u2019s enabling truly distributed finance",permalink:"/docs/jp/docs/ThisIsDODO"}},l=[{value:"DODONFT Relevant Contracts",id:"dodonft-relevant-contracts",children:[]},{value:"DODONFT Contract Overview",id:"dodonft-contract-overview",children:[]},{value:"Process",id:"process",children:[{value:"Create Vault",id:"create-vault",children:[]},{value:"Deposit NFT",id:"deposit-nft",children:[]},{value:"Fragmentation",id:"fragmentation",children:[]},{value:"Buyout",id:"buyout",children:[]},{value:"Redeem",id:"redeem",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"dodonft-relevant-contracts"},"DODONFT Relevant Contracts"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Contract Name"),Object(o.b)("th",{parentName:"tr",align:null},"Catalog"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DODONFTProxy"),Object(o.b)("td",{parentName:"tr",align:null},"contracts/SmartRoute/proxies/")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"NFTCollateralVault"),Object(o.b)("td",{parentName:"tr",align:null},"contracts/CollateralVault/")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Fragment"),Object(o.b)("td",{parentName:"tr",align:null},"contracts/GeneralizedFragment/")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DODONFTRegistry"),Object(o.b)("td",{parentName:"tr",align:null},"contracts/Factory/Registries/")))),Object(o.b)("h2",{id:"dodonft-contract-overview"},"DODONFT Contract Overview"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dodonft_framework.png",alt:null})),Object(o.b)("h2",{id:"process"},"Process"),Object(o.b)("h3",{id:"create-vault"},"Create Vault"),Object(o.b)("p",null,"First, users can create a new Vault contract by calling the createNFTCollateralVault function in the ",Object(o.b)("inlineCode",{parentName:"p"},"DODONFTProxy")," contract, which is used to store NFT compatible with ERC721, ERC1155. Also, users can set the name and baseURI for Vault, which can point to the resource file as the Vault's introductory information."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"function createNFTCollateralVault(string memory name, string memory baseURI) external returns (address newVault);\n")),Object(o.b)("h3",{id:"deposit-nft"},"Deposit NFT"),Object(o.b)("p",null,"The Vault that has been just created can be used to deposit NFT compatible with ERC721 or ERC1155, and there is no limit on the number of NFT users can deposit. The deposited NFTs are owned by the owner of the Vault contract, and the owner has the right to fragment the whole NFT by the unit of Vault."),Object(o.b)("p",null,"If users deposit ERC721 to the Vault, the ERC721 needs to be authorized to the Vault contract. The second step is to call the depositERC721 function of the ",Object(o.b)("inlineCode",{parentName:"p"},"NFTCollateralVault"),", and include the following in the deposited parameter package: deposited contract address of the ERC721 and deposited tokenId array. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"function depositERC721(address nftContract, uint256[] memory tokenIds) external;\n")),Object(o.b)("p",null,"If users deposit ERC1155 to the Vault, the ERC1155 needs to be authorized to the Vault contract. The second step is to call the depositERC1155 function of the ",Object(o.b)("inlineCode",{parentName:"p"},"NFTCollateralVault"),", and include the following in the deposited parameter package: deposited contract address of the ERC1155, deposited tokenId array and its amount. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"function depoistERC1155(address nftContract, uint256[] memory tokenIds, uint256[] memory amounts) external;\n")),Object(o.b)("h3",{id:"fragmentation"},"Fragmentation"),Object(o.b)("p",null,"Fragmentation refers to the process in which the deposited NFT is being fragmented. The whole process involves the creation of ERC20, the creation of ",Object(o.b)("a",{parentName:"p",href:"./publicPool"},"DODO Vending Machine public pool"),", liquidity provision to the pool, and circulation in the secondary market. Then users can trade against these ERC20 tokens using any tokens. The process also involves transferring the ownership of the Vault contract to the Fragment contract. After the fragmentation, no one can withdraw these NFTs, ensuring that the fragmented ERC20 tokens represent all the NFTs in the Vault."),Object(o.b)("p",null,"Fragmentation needs to be triggered by the owner of the Vault, which is achieved by calling the createFragment function in ",Object(o.b)("inlineCode",{parentName:"p"},"NFTCollateralVault"),"."),Object(o.b)("h3",{id:"buyout"},"Buyout"),Object(o.b)("p",null,"The fragmented NFT will be circulated in the secondary market, and those who own the fragmented tokens also own a portion of the NFT. If the buyer is looking to own the whole NFT, the buyout can be triggered by calling the buyout function of ",Object(o.b)("inlineCode",{parentName:"p"},"DODONFTProxy"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"function buyout(\n    address fragment,\n    uint256 quoteMaxAmount,\n    uint8 flag, // 0 - ERC20, 1 - quoteInETH\n    uint256 deadLine\n) external;\n")),Object(o.b)("p",null,"In order to make a buyout, buyers need to provide tokens corresponding to the total valuation at the current unit price of the fragmented NFT multiplied by the total amount. The following is what the buyout process looks like. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Buyers must deposit tokens, with the token's total valuation corresponding to that of the fragmented NFT.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Remove the current liquidity pool of fragmented tokens and destroy the fragmented tokens in the liquidity pool.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Allocate the deposited token. Including paying the original NFT creator the market value of the uncirculated portion of the tokens and leaving the rest of the deposited token in the ",Object(o.b)("inlineCode",{parentName:"p"},"Fragment")," contract. This will allow the holder of the fragmented token to redeem at the equivalent price of buyout.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Transfer the ownership of the Vault to themselves. Buyers can subsequently transfer the NFT out of the Vault. This NFT can be fragmented again, which will create a new ERC20 and a new liquidity pool."))),Object(o.b)("h3",{id:"redeem"},"Redeem"),Object(o.b)("p",null,"After the buyout, the holder of the fragmented NFT in circulation, in the secondary market, can redeem the token at the same value as the unit price at the time of the buyout, and call the redeem function within the Fragment contract to destroy their fragmented NFT in exchange for the equivalent value of the tokens."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"function redeem(address to, bytes calldata data) external;\n")))}u.isMDXComponent=!0}}]);