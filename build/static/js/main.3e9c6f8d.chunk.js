(this["webpackJsonpptb-frontend"]=this["webpackJsonpptb-frontend"]||[]).push([[0],{55:function(e,t,a){e.exports=a(95)},60:function(e,t,a){},92:function(e,t){},95:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(16),l=a.n(o),r=a(10),s=a(97),i=a(101),m=a(102),u=(a(60),a(98)),E=a(48),f=a(99),d=a(54),b=function(e){var t=e.notification;return""===t?c.a.createElement("div",null):c.a.createElement("div",{style:{marginBottom:"1em"}},t)},h=function(e){return e.players.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("th",null,e.name),c.a.createElement("th",null,e.score))}))},p=function(e){var t=e.notification,a=e.setNotification,n=e.players,o=e.lostGame,l=e.setLostGame,r=e.setUser,i=e.socket;return o?c.a.createElement(s.a,{fluid:"true"},c.a.createElement("h1",{style:{textAlign:"center"}},"You lose!"),c.a.createElement("h2",{style:{textAlign:"center"}},"Do you want to play again?"),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement("button",{className:"select-btn",onClick:function(){i.emit("playAgain"),l(!1),a("")}},"Yes"),c.a.createElement("button",{className:"select-btn",onClick:function(){i.emit("leaveGame"),l(!1),a(""),r("")}},"No"))):c.a.createElement(s.a,{fluid:"true"},c.a.createElement("h1",{style:{color:"#000",marginTop:"1em",textAlign:"center"}},"Press the Button!"),c.a.createElement(u.a,{className:"justify-content-center",style:{paddingTop:"2em"}},c.a.createElement(E.a,{md:4,className:"text-center"},c.a.createElement(b,{notification:t})),c.a.createElement(E.a,{md:4,className:"text-center"},c.a.createElement("button",{className:"game-btn",onClick:function(){console.log("click"),i.emit("click")}},c.a.createElement(d.a,{size:"6em"}))),c.a.createElement(E.a,{md:4,className:"text-center"},c.a.createElement(f.a,{striped:!0,bordered:!0,size:"sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Score"))),c.a.createElement("tbody",null,c.a.createElement(h,{players:n}))))))},g=a(100),y=function(e){var t=e.setUser,a=e.socket,o=Object(n.useState)(""),l=Object(r.a)(o,2),i=l[0],m=l[1];return c.a.createElement(s.a,{className:"text-center"},c.a.createElement("h2",{style:{color:"#000",marginTop:"2em",marginBottom:"1em"}},"What's your name?"),c.a.createElement(g.a,{onSubmit:function(e){e.preventDefault(),a.emit("newPlayer",i),t(i)}},c.a.createElement(g.a.Group,null,c.a.createElement(g.a.Control,{type:"text",value:i,onChange:function(e){m(e.target.value),console.log(i)},required:!0,autoFocus:!0}),c.a.createElement("button",{className:"select-btn",type:"submit"},"Play!"))))},k=a(49),v=a.n(k)()(),j=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),u=Object(r.a)(l,2),E=u[0],f=u[1],d=Object(n.useState)(""),b=Object(r.a)(d,2),h=b[0],g=b[1],k=Object(n.useState)(!1),j=Object(r.a)(k,2),w=j[0],N=j[1];return Object(n.useEffect)((function(){v.on("gameState",(function(e){console.log(e),o(e.players),console.log(w)})),v.on("lostGame",(function(){N(!0)})),v.on("win",(function(e){f("You win ".concat(e," points!")),console.log("new score ".concat(e))})),v.on("noWin",(function(e){f("The next prize is ".concat(e," clicks away!"))}))}),[a,w]),c.a.createElement("div",null,c.a.createElement(s.a,{fluid:"true",style:{paddingLeft:0,paddingRight:0,backgroundColor:"#f5f8fa",height:"100vh"}},c.a.createElement(i.a,{bg:"dark",variant:"dark"},c.a.createElement(i.a.Brand,{href:"#"},"Press the Button"),c.a.createElement(m.a,null,c.a.createElement(m.a.Item,null,c.a.createElement(m.a.Link,{href:"https://github.com/joonaspartanen/press-the-button"},"About")))),h?c.a.createElement(p,{notification:E,setNotification:f,players:a,lostGame:w,setLostGame:N,setUser:g,socket:v}):c.a.createElement(y,{setUser:g,socket:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.3e9c6f8d.chunk.js.map