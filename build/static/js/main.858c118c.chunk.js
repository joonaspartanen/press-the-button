(this["webpackJsonpptb-frontend"]=this["webpackJsonpptb-frontend"]||[]).push([[0],{194:function(e,t,a){e.exports=a(357)},200:function(e,t,a){},354:function(e,t){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(35),c=a.n(o),r=a(51),i=a(365),m=(a(199),a(200),a(372)),u=a(371),s=a(369),f=function(e){var t=e.notification;return l.a.createElement(u.a,{as:"h3","data-cy":"notification",style:{color:"#fff",height:"50px",marginBottom:"1em"}},t)},g=function(e){var t=e.playAgain,a=e.leaveGame;return l.a.createElement(m.a,{verticalAlign:"middle",textAlign:"center",style:{height:"100vh"}},l.a.createElement(m.a.Column,null,l.a.createElement(u.a,{as:"h1",style:{color:"#fff",paddingTop:"1em"}},"You lose!"),l.a.createElement(u.a,{as:"h2",style:{color:"#fff",paddingBottom:"1em"}},"Do you want to play again?"),l.a.createElement(s.a,{onClick:t,className:"yes-button",color:"green",size:"huge",style:{marginRight:"1em"}},"Yes"),l.a.createElement(s.a,{onClick:a,className:"no-button",color:"red",size:"huge"},"No")))},d=a(368),y=function(e){var t=e.players;return l.a.createElement(d.a,{basic:"very",inverted:!0,unstackable:!0,textAlign:"center"},l.a.createElement(d.a.Header,null,l.a.createElement(d.a.Row,null,l.a.createElement(d.a.HeaderCell,null,"Name"),l.a.createElement(d.a.HeaderCell,null,"Score"))),l.a.createElement(d.a.Body,null,t.map((function(e){return l.a.createElement(d.a.Row,{key:e.id},l.a.createElement(d.a.Cell,null,e.name),l.a.createElement(d.a.Cell,null,e.score))}))))},E=function(e){var t=e.notification,a=e.players,n=e.lostGame,o=e.clickGameButton,c=e.playAgain,r=e.leaveGame;return n?l.a.createElement(g,{playAgain:c,leaveGame:r}):l.a.createElement(m.a,{textAlign:"center",stackable:!0},l.a.createElement(m.a.Row,{columns:1},l.a.createElement(m.a.Column,{textAlign:"center"},l.a.createElement(u.a,{as:"h1",style:{color:"#fff",fontSize:"300%",paddingTop:"5vw",marginBottom:"5vw"}},"Press the Button!"))),l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Column,{width:10,textAlign:"center"},l.a.createElement(s.a,{"data-cy":"game-btn",color:"red",className:"game-btn",onClick:o}),l.a.createElement(f,{notification:t})),l.a.createElement(m.a.Column,{textAlign:"center",width:6,style:{paddingRight:"8em"}},l.a.createElement(y,{players:a}))))},h=a(366),p=function(e){var t=e.enterGame,a=e.name,n=e.setName;return l.a.createElement(m.a,{verticalAlign:"middle",textAlign:"center",style:{height:"calc(100vh - 50px)"}},l.a.createElement(m.a.Column,{style:{maxWidth:450}},l.a.createElement(u.a,{as:"h2",style:{color:"#fff"},textAlign:"center"},"What's your name?"),l.a.createElement(h.a,{size:"large",onSubmit:t},l.a.createElement(h.a.Field,null,l.a.createElement(h.a.Input,{type:"text",value:a,onChange:function(e){n(e.target.value)},required:!0,autoFocus:!0,className:"name-input","data-cy":"name-input"})),l.a.createElement(s.a,{type:"submit",fluid:!0,size:"large",color:"green",className:"join-btn","data-cy":"join-btn"},"Play!"))))},b=a(370),v=a(50),w=function(){return l.a.createElement(b.a,{fixed:"bottom",inverted:!0,secondary:!0,style:{backgroundColor:"#666a86"}},l.a.createElement(i.a,null,l.a.createElement(b.a.Item,{header:!0},l.a.createElement(v.a,{name:"gavel",size:"big",style:{marginRight:"1.5em"}}),"Press the Button"),l.a.createElement(b.a.Item,{as:"a",href:"https://github.com/joonaspartanen/press-the-button"},"About")))},k=a(181),A=a.n(k)()(),x=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("Ready to play?"),m=Object(r.a)(c,2),u=m[0],s=m[1],f=Object(n.useState)(""),g=Object(r.a)(f,2),d=g[0],y=g[1],h=Object(n.useState)(""),b=Object(r.a)(h,2),v=b[0],k=b[1],x=Object(n.useState)(!1),C=Object(r.a)(x,2),j=C[0],G=C[1];return Object(n.useEffect)((function(){A.on("gameState",(function(e){o(e.players)})),A.on("lostGame",(function(){G(!0)})),A.on("win",(function(e){s("You win ".concat(e," points!"))})),A.on("noWin",(function(e){s("The next prize is ".concat(e," clicks away!"))}))}),[a,j]),l.a.createElement(i.a,{style:{backgroundColor:"#2a3950",minHeight:"100vh"}},d?l.a.createElement(E,{notification:u,setNotification:s,players:a,clickGameButton:function(){A.emit("click")},playAgain:function(){A.emit("playAgain"),G(!1),s("Ready to play?")},leaveGame:function(){A.emit("leaveGame"),G(!1),s("Ready to play?"),y("")}}):l.a.createElement(p,{enterGame:function(e){console.log("click"),e.preventDefault(),A.emit("newPlayer",v),y(v)},name:v,setName:k}),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[194,1,2]]]);
//# sourceMappingURL=main.858c118c.chunk.js.map