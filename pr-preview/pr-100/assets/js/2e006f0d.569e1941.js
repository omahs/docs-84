"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||n;return r?o.createElement(m,l(l({ref:t},p),{},{components:r})):o.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<n;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:7,sidebar_label:"How to restart your rollup",description:"Restart your Rollkit rollup safely"},l="How to restart your Rollup",s={unversionedId:"tutorials/restart-rollkit-rollup",id:"tutorials/restart-rollkit-rollup",title:"How to restart your Rollup",description:"Restart your Rollkit rollup safely",source:"@site/docs/tutorials/restart-rollkit-rollup.md",sourceDirName:"tutorials",slug:"/tutorials/restart-rollkit-rollup",permalink:"/pr-preview/pr-100/docs/tutorials/restart-rollkit-rollup",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/restart-rollkit-rollup.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"How to restart your rollup",description:"Restart your Rollkit rollup safely"},sidebar:"tutorialSidebar",previous:{title:"Ethermint Tutorial",permalink:"/pr-preview/pr-100/docs/tutorials/ethermint"}},i={},u=[{value:"Setup of this example",id:"setup-of-this-example",level:2},{value:"Errors in this example",id:"errors-in-this-example",level:3},{value:"Re-fund your account",id:"re-fund-your-account",level:2},{value:"Stopping your rollup",id:"stopping-your-rollup",level:2},{value:"Restarting your rollup",id:"restarting-your-rollup",level:2},{value:"Increase the gas fee",id:"increase-the-gas-fee",level:3},{value:"Reduce gas fee &amp; restart again",id:"reduce-gas-fee--restart-again",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-restart-your-rollup"},"How to restart your Rollup"),(0,a.kt)("p",null,"This guide will teach you how to restart your Rollkit rollup in the case that the node that you are using to post blocks to your DA and consensus layer runs out of funds (tokens)."),(0,a.kt)("h2",{id:"setup-of-this-example"},"Setup of this example"),(0,a.kt)("p",null,"In this example, we're using Celestia's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/mocha-testnet/"},"Mocha Testnet")," and running an ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-100/docs/tutorials/ethermint"},"Ethermint")," chain. In this example, our Celestia DA light node ran out of Mocha TIA and we are unable to post new blocks to Celestia due to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/types/errors/errors.go#L95"},(0,a.kt)("inlineCode",{parentName:"a"},"Code: 19"))," error. This error is defined by Cosmos SDK as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// ErrTxInMempoolCache defines an ABCI typed error where a tx already exists in the mempool.\nErrTxInMempoolCache = Register(RootCodespace, 19, "tx already in mempool")\n')),(0,a.kt)("p",null,"In order to get around this error, and the same error on other Rollkit rollups, you will need to re-fund your Celestia account and increase the gas fee. This will override the transaction that is stuck in the mempool."),(0,a.kt)("p",null,"If you top up the balance of your node and don't increase the gas fee, you will still encounter the ",(0,a.kt)("inlineCode",{parentName:"p"},"Code: 19")," error because there is a transaction (posting block to DA) that is duplicate to one that already exists. In order to get around this, you'll need to increase the gas fee and restart the chain."),(0,a.kt)("h3",{id:"errors-in-this-example"},"Errors in this example"),(0,a.kt)("p",null,"This is what the errors will look like if your DA node runs out of funding or you restart the chain without changing the gas fee:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"4:51PM INF submitting block to DA layer height=28126 module=BlockManager\n4:51PM ERR DA layer submission failed error=\"Codespace: 'sdk', Code: 19, Message: \" attempt=1 module=BlockManager\n4:51PM ERR DA layer submission failed Error=\"Codespace: 'sdk', Code: 19, Message: \" attempt=2 module=BlockManager\n4:51PM ERR DA layer submission failed error=\"Codespace: 'sdk', Code: 19, Message: \" attempt=3 module=BlockManager\n4:51PM ERR DA layer submission failed error=\"Codespace: 'sdk', Code: 19, Message: \" attempt=4 module=BlockManager\n4:51PM ERR DA layer submission failed error=\"Codespace: 'sdk', Code: 19, Message: \" attempt=5 module=BlockManager\n4:51PM ERR DA layer submission failed error=\"Codespace: 'sdk', Code: 19, Message: \" attempt=6 module=BlockManager\n")),(0,a.kt)("h2",{id:"re-fund-your-account"},"Re-fund your account"),(0,a.kt)("p",null,"First, you'll need to send more tokens to the account running your Celestia node. If you didn't keep track of your key, you can run the following to get your address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME && cd celestia-node\n./cel-key list --keyring-backend test --node.type light\n")),(0,a.kt)("h2",{id:"stopping-your-rollup"},"Stopping your rollup"),(0,a.kt)("p",null,"You can stop your Ethermint chain (or other Rollkit rollup) by using ",(0,a.kt)("inlineCode",{parentName:"p"},"Control + C")," in your terminal where the node is running."),(0,a.kt)("h2",{id:"restarting-your-rollup"},"Restarting your rollup"),(0,a.kt)("p",null,"First, be sure that you are using the same Namespace ID as you were before your Celestia node ran out of tokens."),(0,a.kt)("p",null,"Next, you'll need to fetch the current block height and set the variable accordingly for your start command. In this example, we're using Mocha Testnet on Celestia for DA and consensus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"DA_BLOCK_HEIGHT=$(curl https://rpc-mocha.pops.one/block | jq -r '.result.block.header.height')\n")),(0,a.kt)("h3",{id:"increase-the-gas-fee"},"Increase the gas fee"),(0,a.kt)("p",null,"To reiterate, before restarting the chain, you will need to increase the gas fee in order to avoid a ",(0,a.kt)("inlineCode",{parentName:"p"},"Code: 19")," error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ethermintd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://localhost:26659","timeout":60000000000,"gas_limit":6000000,"fee":6900}\' --rollmint.namespace_id 8BE3175CBF305BC2 --rollmint.da_start_height $DA_BLOCK_HEIGHT\n')),(0,a.kt)("h3",{id:"reduce-gas-fee--restart-again"},"Reduce gas fee & restart again"),(0,a.kt)("p",null,"In order to save your TIA, we also recommend stopping the chain with ",(0,a.kt)("inlineCode",{parentName:"p"},"Control + C"),", changing the gas fee back to the default (in our case, 6000 utia), fetching current block height, and restarting the chain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ethermintd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://localhost:26659","timeout":60000000000,"gas_limit":6000000,"fee":6000}\' --rollmint.namespace_id 8BE3175CBF305BC2 --rollmint.da_start_height $DA_BLOCK_HEIGHT\n')),(0,a.kt)("p",null,"Congrats! You've successfully restarted your Rollkit rollup after running out of TIA."))}c.isMDXComponent=!0}}]);