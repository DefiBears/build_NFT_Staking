(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],{371:function(e,t){},392:function(e,t){},394:function(e,t){},468:function(e,t){},470:function(e,t){},503:function(e,t){},508:function(e,t){},510:function(e,t){},517:function(e,t){},530:function(e,t){},553:function(e,t){},555:function(e,t){},563:function(e,t){},565:function(e,t){},579:function(e,t){},581:function(e,t){},648:function(e,t){},683:function(e,t){},785:function(e,t,n){},786:function(e,t,n){},787:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,u,l,d,p,j,f,b=n(4),x=n.n(b),h=n(131),O=n.n(h),g=n(86),m=n(0),w=n.n(m),v=n(5),C=n(41),y=n(20),k=n(56),A=n(84),S=n.n(A),T=n(334),N=n.n(T),E=n(335),D=n.n(E),R=n(349),_=n(24),I=n(107),F=n(344),K={loading:!1,account:null,smartContract:null,stakingContract:null,web3:null,errorMsg:""},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(_.a)(Object(_.a)({},K),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,stakingContract:t.payload.stakingContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(_.a)(Object(_.a)({},K),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(_.a)(Object(_.a)({},e),{},{account:t.payload.account});default:return e}},U={loading:!1,nftTokens:[],depositNFTs:[],cost:0,accumulatedReward:0,error:!1,errorMsg:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(_.a)(Object(_.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,nftTokens:t.payload.nftTokens,depositNFTs:t.payload.depositNFTs,accumulatedReward:t.payload.accumulatedReward,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(_.a)(Object(_.a)({},U),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},P=Object(I.b)({blockchain:M,data:L}),G=[F.a],z=Object(I.c)(I.a.apply(void 0,G)),W=Object(I.d)(P,z),H=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},B=function(){var e=Object(v.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(v.a)(w.a.mark((function e(t){var n,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=W.getState(),c=n.blockchain,e.next=3,Promise.all(t.map((function(e){return c.smartContract.methods.tokenURI(e).call()})));case 3:return r=e.sent,e.next=6,Promise.all(r.map((function(e){return B(e)})));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e){return function(){var t=Object(v.a)(w.a.mark((function t(n){var c,r,a,o,i,s,u;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,c=W.getState(),r=c.blockchain,t.next=5,r.smartContract.methods.NFTsOfOwner(e).call();case 5:return a=t.sent,t.next=8,r.stakingContract.methods.depositsOf(r.account).call();case 8:return o=t.sent,t.next=11,Y(o);case 11:return i=t.sent,t.next=14,i.reduce(function(){var e=Object(v.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.stakingContract.methods.calculateReward(r.account,n.name.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1")).call();case 3:return c=e.sent,e.abrupt("return",t+c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),0);case 14:return s=t.sent,i=i.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{isDeposited:!0})})),t.next=18,Y(a);case 18:u=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{nftTokens:u,depositNFTs:i,accumulatedReward:s}}),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(1),console.log(t.t0),n(H("Could not load data from contract."));case 26:case"end":return t.stop()}}),t,null,[[1,22]])})));return function(e){return t.apply(this,arguments)}}()},q=function(e){return{type:"CONNECTION_FAILED",payload:e}},Q={walletconnect:{package:R.a,options:{infuraId:"8043bb2cf99347b1bfadfb233c5325c0",rpc:{56:"https://bsc-dataseed.binance.org/",97:"https://data-seed-prebsc-1-s1.binance.org:8545/"}}}},J=function(e){return function(){var t=Object(v.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n($(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=n(21),V=X.a.div(c||(c=Object(y.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Z=(X.a.div(r||(r=Object(y.a)(["\n  height: 8px;\n  width: 8px;\n"]))),X.a.div(a||(a=Object(y.a)(["\n  height: 16px;\n  width: 16px;\n"])))),ee=X.a.div(o||(o=Object(y.a)(["\n  height: 24px;\n  width: 24px;\n"]))),te=X.a.div(i||(i=Object(y.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ne=X.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ce=X.a.p(u||(u=Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),re=X.a.p(l||(l=Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ae=X.a.p(d||(d=Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),oe=X.a.p(p||(p=Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),ie=(X.a.div(j||(j=Object(y.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(2)),se=X.a.span(f||(f=Object(y.a)(["\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n"])));function ue(e){var t=e.isActive,n=e.title,c=e.children,r=e.confirmButton,a=e.onConfirm,o=e.closeModal;return Object(ie.jsxs)("div",{className:"modal fixed w-full h-full top-0 left-0 flex items-center justify-center transition-opacity duration-300 ".concat(t?"overflow-x-hidden overflow-y-visible":"opacity-0 pointer-events-none"),children:[Object(ie.jsx)("div",{className:"modal-overlay absolute w-full h-full bg-gray-900 opacity-50","aria-hidden":"true",onClick:o}),Object(ie.jsxs)("div",{className:"relative modal-container bg-white w-5/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-y-auto",children:[Object(ie.jsxs)("div",{className:"modal-content py-5 text-left px-6",children:[Object(ie.jsx)("div",{className:"flex justify-between items-center pb-3",children:Object(ie.jsx)("p",{className:"ml-3 text-2xl font-bold text-gray-700",children:n})}),Object(ie.jsx)("div",{className:"px-5 py-3 text-gray-700",children:c}),Object(ie.jsx)("div",{className:"text-right mt-5",children:"string"===typeof r?Object(ie.jsx)("button",{className:"bg-green-500 px-4 py-2 font-bold rounded text-white hover:bg-green-600",type:"button",onClick:a,children:r}):r})]}),Object(ie.jsx)(se,{onClick:o,className:"absolute top-0 right-0 mr-4 mt-2 text-gray-600 text-3xl hover:text-gray-700 cursor-pointer",children:"\xd7"})]})]})}var le,de,pe,je,fe,be,xe,he,Oe,ge;n(348);var me=function(e){return e.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")},we=X.a.button(le||(le=Object(y.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: var(--accent);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--accent-text);\n  width: 160px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ve=X.a.div(de||(de=Object(y.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: column;\n  justify-content: stretched;\n  // align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n    justify-content: center;\n  }\n"])),(function(e){var t=e.flex;return t||0})),Ce=X.a.div(pe||(pe=Object(y.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-content: center;\n  width: 70%;\n"]))),ye=X.a.div(je||(je=Object(y.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n"]))),ke=X.a.div(fe||(fe=Object(y.a)(["\n  color: white;\n  width: 30%;\n  margin: 10px;\n  text-align: center;\n  line-height: 75px;\n\n  @media (max-width: 768px) {\n    width: 40%;\n  }\n\n  @media (max-width: 375px) {\n    width: 100%;\n  }\n"]))),Ae=X.a.img(be||(be=Object(y.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Se=X.a.img(xe||(xe=Object(y.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px var(--secondary);\n  background-color: var(--accent);\n  border-radius: ",";\n  width: 180px;\n  max-width: 90%;\n  @media (min-width: 900px) {\n    width: 200px;\n  }\n  @media (min-width: 1000px) {\n    width: 350px;\n  }\n  transition: width 0.5s;\n"])),(function(e){return e.isSqure?0:"100%"})),Te=X.a.img(he||(he=Object(y.a)(["\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n"]))),Ne=X.a.div(Oe||(Oe=Object(y.a)(["\n  border: 4px solid var(--secondary);\n  margin: 12px 0;\n  padding: 4px;\n"])));X.a.a(ge||(ge=Object(y.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n  word-break: break-all;\n  white-space: break-spaces;\n"])));var Ee=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.blockchain})),n=x.a.useState(!1),c=Object(C.a)(n,2),r=c[0],a=c[1],o=Object(b.useState)(0),i=Object(C.a)(o,2),s=i[0],u=i[1],l=Object(b.useState)(0),d=Object(C.a)(l,2),p=(d[0],d[1]),j=x.a.useState(!1),f=Object(C.a)(j,2),h=f[0],O=f[1],m=x.a.useState(0),y=Object(C.a)(m,2),A=y[0],T=y[1],E=x.a.useState(null),R=Object(C.a)(E,2),_=R[0],I=R[1],F=(Object(k.c)((function(e){return e.data.accumulatedReward})),Object(k.c)((function(e){return e.data.depositNFTs}))),K=Object(k.c)((function(e){return e.data.nftTokens})),M=Object(b.useState)({CONTRACT_ADDRESS:"",STAKING_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),U=Object(C.a)(M,2),L=U[0],P=U[1],G=function(){""!==t.account&&null!==t.smartContract&&e($(t.account))},z=function(){var e=Object(v.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,P(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){z()}),[]),Object(b.useEffect)((function(){G()}),[t.account]);var W=function(){var e=Object(v.a)(w.a.mark((function e(n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isDeposited){e.next=13;break}return e.prev=1,e.next=4,t.stakingContract.methods.calculateReward(t.account,n.name.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1")).call();case 4:c=e.sent,T(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:e.next=14;break;case 13:try{T(0)}catch(r){console.log(r)}case 14:I(n),O(!0);case 16:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(v.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.stakingContract){e.next=5;break}return e.next=3,t.stakingContract.methods.TotalRewards(t.account).call();case 3:n=e.sent,u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(v.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.stakingContract.methods.deposit([n]).send({to:L.STAKING_ADDRESS,from:t.account}).once("error",(function(e){console.log(e)})).then((function(e){O(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(v.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.stakingContract.methods.withdraw([n]).send({to:L.STAKING_ADDRESS,from:t.account}).once("error",(function(e){console.log(e)})).then((function(e){O(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)(Object(v.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.stakingContract){e.next=5;break}return e.next=3,t.smartContract.methods.isApprovedForAll(t.account,L.STAKING_ADDRESS).call();case 3:n=e.sent,a(n);case 5:case"end":return e.stop()}}),e)}))),[t]),Object(b.useEffect)(Object(v.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.stakingContract){e.next=5;break}return e.next=3,t.stakingContract.methods.TotalRewards(t.account).call();case 3:n=e.sent,u(n);case 5:case"end":return e.stop()}}),e)}))),[t]),Object(b.useEffect)(Object(v.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.stakingContract){e.next=5;break}return e.next=3,t.stakingContract.methods.rate().call();case 3:n=e.sent,p(n);case 5:case"end":return e.stop()}}),e)}))),[t]),Object(ie.jsxs)(V,{children:[Object(ie.jsx)(ue,{isActive:h,title:null===_||void 0===_?void 0:_.name,closeModal:function(){O(!1)},children:_&&Object(ie.jsxs)("div",{children:[Object(ie.jsx)(ye,{children:Object(ie.jsx)(Se,{src:me(_.image),isSqure:!0,style:{width:"50%"}})}),Object(ie.jsx)(Z,{}),Object(ie.jsx)(ne,{ai:"center",jc:"center",children:_.isDeposited?Object(ie.jsx)(we,{onClick:function(){var e=Object(v.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Y(_.name.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"));case 3:G();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Withdraw"}):Object(ie.jsx)(we,{onClick:function(){var e=Object(v.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,B(_.name.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"));case 3:G();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Deposit"})}),Object(ie.jsxs)(Ne,{children:["Estimated Reward : ",A]}),Object(ie.jsxs)(Ne,{children:[Object(ie.jsxs)("p",{children:["Name: ",_.name]}),Object(ie.jsxs)("p",{children:["ID: ",_.name.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1")]})]}),Object(ie.jsx)(Ne,{children:_.attributes.map((function(e){return Object(ie.jsxs)(ae,{children:[e.trait_type,": ",e.value]})}))})]})}),Object(ie.jsxs)(ne,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--yellow)"},image:L.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ie.jsx)("a",{href:"https://defibears.co.uk",target:"_blank",rel:"noreferrer noopener",children:Object(ie.jsx)(Ae,{alt:"logo",src:"/config/images/logo512.png"})}),Object(ie.jsx)(te,{}),Object(ie.jsxs)(ve,{flex:1,style:{padding:24},test:!0,children:[Object(ie.jsx)(te,{}),Object(ie.jsxs)(ne,{flex:2,ai:"center",style:{padding:20,borderRadius:24,background:"var(--box)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ie.jsx)(ie.Fragment,{children:""===t.account||null===t.smartContract?Object(ie.jsxs)(ne,{ai:"center",jc:"center",children:[Object(ie.jsxs)(oe,{style:{textAlign:"center",color:"var(--accent)"},children:["Connect to the ",L.NETWORK.NAME," network"]}),Object(ie.jsx)(Z,{}),Object(ie.jsx)(we,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(v.a)(w.a.mark((function e(t){var n,c,r,a,o,i,s,u,l,d,p,j,f;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,fetch("/config/abi2.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 6:return c=e.sent,e.next=9,n.json();case 9:return r=e.sent,e.next=12,c.json();case 12:return a=e.sent,e.next=15,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 15:return o=e.sent,e.next=18,o.json();case 18:return i=e.sent,s=new D.a({cacheProvider:!1,providerOptions:Q}),e.prev=20,e.next=23,s.connect();case 23:u=e.sent,e.next=30;break;case 26:return e.prev=26,e.t0=e.catch(20),console.log("Could not get a wallet connection",e.t0),e.abrupt("return");case 30:return l=new N.a(u),S.a.setProvider(u),e.prev=32,e.next=35,l.eth.getChainId();case 35:return d=e.sent,e.next=38,l.eth.getAccounts();case 38:p=e.sent,d==i.NETWORK.ID?(j=new S.a(r,i.CONTRACT_ADDRESS),f=new S.a(a,i.STAKING_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:p[0],smartContract:j,stakingContract:f,web3:l}}),u.on("accountsChanged",(function(e){t(J(e[0]))})),u.on("chainChanged",(function(e){window.location.reload()}))):t(q("Change network to ".concat(i.NETWORK.NAME,"."))),e.next=45;break;case 42:e.prev=42,e.t1=e.catch(32),t(q("Something went wrong."));case 45:case"end":return e.stop()}}),e,null,[[20,26],[32,42]])})));return function(t){return e.apply(this,arguments)}}())},children:"CONNECT"}),""!==t.errorMsg?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Z,{}),Object(ie.jsx)(oe,{style:{textAlign:"center",color:"var(--accent)"},children:t.errorMsg})]}):null]}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Z,{}),Object(ie.jsx)(ve,{children:Object(ie.jsxs)(oe,{children:["Connected wallet : ",t.account]})}),Object(ie.jsx)(ve,{children:Object(ie.jsxs)(ce,{children:["Deposited NFT IDs :"," ","[",F.map((function(e){return e.name.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1")})).join(", "),"]"]})}),Object(ie.jsxs)(ve,{children:[Object(ie.jsxs)(ce,{children:["Total Rewards :\xa0",s/Math.pow(10,18)]}),Object(ie.jsx)(Te,{src:"/config/images/refresh32.png",onClick:function(){H(),G()}})]}),Object(ie.jsx)(ve,{}),Object(ie.jsx)(Z,{}),Object(ie.jsx)(ve,{children:!r&&Object(ie.jsx)(ce,{children:"You have to Approve Staking Once before staking your NFTs."})}),Object(ie.jsx)(Z,{}),Object(ie.jsxs)(ve,{children:[Object(ie.jsx)(we,{disabled:r?1:0,onClick:function(n){n.preventDefault(),t.smartContract.methods.setApprovalForAll(L.STAKING_ADDRESS,1).send({to:L.CONTRACT_ADDRESS,from:t.account}).once("error",(function(e){console.log(e)})).then((function(n){e($(t.account))})),G()},children:r?"NFT Approved":"Approve Staking"}),"\xa0\xa0\xa0\xa0\xa0\xa0",Object(ie.jsx)("a",{href:"https://",target:"_blank",rel:"noreferrer noopener",children:Object(ie.jsx)(we,{children:"To Mint Page"})})]}),Object(ie.jsx)(Z,{}),Object(ie.jsxs)(ve,{children:[Object(ie.jsx)(we,{onClick:function(n){n.preventDefault(),t.stakingContract.methods.DepositAllNfts().send({to:L.STAKING_ADDRESS,from:t.account}).once("error",(function(e){console.log(e)})).then((function(n){console.log(n),e($(t.account))})),G()},children:"Deposit All NFTs"}),"\xa0\xa0\xa0\xa0\xa0\xa0",Object(ie.jsx)(we,{onClick:function(n){n.preventDefault(),t.stakingContract.methods.withdrawAllNFTs().send({to:L.STAKING_ADDRESS,from:t.account}).once("error",(function(e){console.log(e)})).then((function(n){console.log(n),e($(t.account))})),G()},children:"Withdraw All NFTs  &Claim"}),"\xa0\xa0\xa0\xa0\xa0\xa0",Object(ie.jsx)(we,{onClick:function(n){n.preventDefault(),t.stakingContract.methods.claimAllRewards().send({to:L.STAKING_ADDRESS,from:t.account}).once("error",(function(e){console.log(e)})).then((function(n){console.log(n),e($(t.account))})),G()},children:"Claim All Rewards"})]}),Object(ie.jsx)(te,{}),Object(ie.jsx)(te,{}),Object(ie.jsx)(ne,{jc:"center",ai:"center",style:{width:"70%"},children:Object(ie.jsx)(re,{children:"NFTs in your wallet"})}),Object(ie.jsx)(Ce,{children:Object(g.a)(K).map((function(e){return Object(ie.jsx)(ke,{onClick:function(){return W(e)},children:Object(ie.jsx)(Se,{src:me(e.image),isSqure:!0,style:{width:"80%"}})})}))}),Object(ie.jsx)(te,{}),Object(ie.jsx)(ne,{jc:"center",ai:"center",style:{width:"70%"},children:Object(ie.jsx)(re,{children:"Your Deposited NFTs"})}),Object(ie.jsx)(Ce,{children:Object(g.a)(F).map((function(e){return Object(ie.jsx)(ke,{onClick:function(){return W(e)},children:Object(ie.jsx)(Se,{src:me(e.image),isSqure:!0,style:{width:"80%"}})})}))}),Object(ie.jsx)(te,{})]})}),Object(ie.jsx)(ee,{})]}),Object(ie.jsx)(te,{})]}),Object(ie.jsx)(ee,{}),Object(ie.jsxs)(ne,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ie.jsxs)(oe,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you're in ",L.NETWORK.NAME," Mainnet"]}),Object(ie.jsx)(Z,{}),Object(ie.jsx)(oe,{style:{textAlign:"center",color:"var(--primary-text)"}})]})]})]})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,793)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(785),n(786);O.a.render(Object(ie.jsx)(k.a,{store:W,children:Object(ie.jsx)(Ee,{})}),document.getElementById("root")),De()}},[[787,1,2]]]);
//# sourceMappingURL=main.0eb20d75.chunk.js.map