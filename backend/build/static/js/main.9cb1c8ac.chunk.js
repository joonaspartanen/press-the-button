(this["webpackJsonpptb-frontend"]=this["webpackJsonpptb-frontend"]||[]).push([[0],{55:function(e,t,a){e.exports=a(95)},60:function(e,t,a){},92:function(e,t){},95:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(16),l=a.n(o),r=a(10),s=a(97),i=a(100),m=a(101),u=(a(60),a(98)),f=a(48),E=a(54),p=function(e){var t=e.notification;return""===t?c.a.createElement("div",null):c.a.createElement("div",{style:{marginBottom:"1em"}},t)},d=function(e){return e.players.map((function(e){return c.a.createElement("li",{key:e.id,style:{color:"#000"}},e.name," has ",e.score," points")}))},b=function(e){var t=e.notification,a=e.players,n=e.lostGame,o=e.setLostGame,l=e.setUser,r=e.socket;return n?c.a.createElement(s.a,{fluid:"true"},c.a.createElement("h1",{style:{textAlign:"center"}},"You lose!"),c.a.createElement("h2",{style:{textAlign:"center"}},"Do you want to play again?"),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement("button",{className:"select-btn",onClick:function(){r.emit("playAgain"),o(!1)}},"Yes"),c.a.createElement("button",{className:"select-btn",onClick:function(){r.emit("leaveGame"),o(!1),l("")}},"No"))):c.a.createElement(s.a,{fluid:"true"},c.a.createElement("h1",{style:{color:"#000",marginTop:"1em",textAlign:"center"}},"Press the Button!"),c.a.createElement(u.a,{className:"justify-content-center",style:{paddingTop:"2em"}},c.a.createElement(f.a,{md:4,className:"text-center"},c.a.createElement(p,{notification:t})),c.a.createElement(f.a,{md:4,className:"text-center"},c.a.createElement("button",{className:"game-btn",onClick:function(){console.log("click"),r.emit("click")}},c.a.createElement(E.a,{size:"6em"}))),c.a.createElement(f.a,{md:4,className:"text-center"},null!==a&&c.a.createElement("ul",{className:"list-unstyled"},c.a.createElement("h3",null,"Current players"),c.a.createElement(d,{players:a})))))},g=a(99),h=function(e){var t=e.setUser,a=e.socket,o=Object(n.useState)(""),l=Object(r.a)(o,2),i=l[0],m=l[1];return c.a.createElement(s.a,{className:"text-center"},c.a.createElement("h2",{style:{color:"#000",marginTop:"2em",marginBottom:"1em"}},"What's your name?"),c.a.createElement(g.a,{onSubmit:function(e){e.preventDefault(),a.emit("newPlayer",i),t(i)}},c.a.createElement(g.a.Group,null,c.a.createElement(g.a.Control,{type:"text",value:i,onChange:function(e){m(e.target.value),console.log(i)},required:!0,autoFocus:!0}),c.a.createElement("button",{className:"select-btn",type:"submit"},"Play!"))))},y=a(49),k=a.n(y)()(),v=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),u=Object(r.a)(l,2),f=u[0],E=u[1],p=Object(n.useState)(""),d=Object(r.a)(p,2),g=d[0],y=d[1],v=Object(n.useState)(!1),j=Object(r.a)(v,2),w=j[0],N=j[1];return Object(n.useEffect)((function(){k.on("gameState",(function(e){console.log(e),o(e.players),console.log(w)})),k.on("lostGame",(function(){N(!0)})),k.on("win",(function(e){E("You win ".concat(e," points!")),console.log("new score ".concat(e))})),k.on("noWin",(function(e){E("The next prize is ".concat(e," clicks away!"))}))}),[a,w]),c.a.createElement("div",null,c.a.createElement(s.a,{fluid:"true",style:{paddingLeft:0,paddingRight:0,backgroundColor:"#f5f8fa",height:"100vh"}},c.a.createElement(i.a,{bg:"dark",variant:"dark"},c.a.createElement(i.a.Brand,{href:"#"},"Press the Button"),c.a.createElement(m.a,null,c.a.createElement(m.a.Item,null,c.a.createElement(m.a.Link,{href:"https://github.com/joonaspartanen/press-the-button"},"About")))),g?c.a.createElement(b,{notification:f,players:a,lostGame:w,setLostGame:N,setUser:y,socket:k}):c.a.createElement(h,{setUser:y,socket:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.9cb1c8ac.chunk.js.map