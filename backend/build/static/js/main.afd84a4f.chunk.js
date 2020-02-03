(this["webpackJsonpptb-frontend"]=this["webpackJsonpptb-frontend"]||[]).push([[0],{194:function(e,t,a){e.exports=a(357)},200:function(e,t,a){},354:function(e,t){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(35),c=a.n(l),r=a(37),i=a(365),s=(a(199),a(200),a(371)),m=a(372),u=a(369),f=function(e){var t=e.notification;return o.a.createElement(m.a,{as:"h3","data-cy":"notification",style:{color:"#fff",height:"50px",marginBottom:"1em"}},t)},d=a(368),g=function(e){var t=e.players;return o.a.createElement(d.a,{basic:"very",inverted:!0,unstackable:!0,textAlign:"center"},o.a.createElement(d.a.Header,null,o.a.createElement(d.a.Row,null,o.a.createElement(d.a.HeaderCell,null,"Name"),o.a.createElement(d.a.HeaderCell,null,"Score"))),o.a.createElement(d.a.Body,null,t.map((function(e){return o.a.createElement(d.a.Row,{key:e.id},o.a.createElement(d.a.Cell,null,e.name),o.a.createElement(d.a.Cell,null,e.score))}))))},E=function(e){var t=e.socket,a=e.setLostGame,n=e.setNotification,l=e.setUser;return o.a.createElement(s.a,{verticalAlign:"middle",textAlign:"center",style:{height:"100vh"}},o.a.createElement(s.a.Column,null,o.a.createElement(m.a,{as:"h1",style:{color:"#fff",paddingTop:"1em"}},"You lose!"),o.a.createElement(m.a,{as:"h2",style:{color:"#fff",paddingBottom:"1em"}},"Do you want to play again?"),o.a.createElement(u.a,{onClick:function(){t.emit("playAgain"),a(!1),n("Ready to play?")},color:"green",size:"huge",style:{marginRight:"1em"}},"Yes"),o.a.createElement(u.a,{onClick:function(){t.emit("leaveGame"),a(!1),n("Ready to play?"),l("")},color:"red",size:"huge"},"No")))},y=function(e){var t=e.notification,a=e.setNotification,n=e.players,l=e.lostGame,c=e.setLostGame,r=e.setUser,i=e.socket;return l?o.a.createElement(E,{socket:i,setLostGame:c,setNotification:a,setUser:r}):o.a.createElement(s.a,{textAlign:"center",stackable:!0},o.a.createElement(s.a.Row,{columns:1},o.a.createElement(s.a.Column,{textAlign:"center"},o.a.createElement(m.a,{as:"h1",style:{color:"#fff",fontSize:"300%",paddingTop:"5vw",marginBottom:"5vw"}},"Press the Button!"))),o.a.createElement(s.a.Row,null,o.a.createElement(s.a.Column,{width:10,textAlign:"center"},o.a.createElement(u.a,{"data-cy":"game-btn",color:"red",className:"game-btn",onClick:function(){i.emit("click")}}),o.a.createElement(f,{notification:t})),o.a.createElement(s.a.Column,{textAlign:"center",width:6,style:{paddingRight:"8em"}},o.a.createElement(g,{players:n}))))},h=a(366),p=function(e){var t=e.setUser,a=e.socket,l=Object(n.useState)(""),c=Object(r.a)(l,2),i=c[0],f=c[1];return o.a.createElement(s.a,{verticalAlign:"middle",textAlign:"center",style:{height:"calc(100vh - 50px)"}},o.a.createElement(s.a.Column,{style:{maxWidth:450}},o.a.createElement(m.a,{as:"h2",style:{color:"#fff"},textAlign:"center"},"What's your name?"),o.a.createElement(h.a,{size:"large",onSubmit:function(e){e.preventDefault(),a.emit("newPlayer",i),t(i)}},o.a.createElement(h.a.Field,null,o.a.createElement(h.a.Input,{"data-cy":"name-form",type:"text",value:i,onChange:function(e){f(e.target.value)},required:!0,autoFocus:!0})),o.a.createElement(u.a,{type:"submit",fluid:!0,size:"large",color:"green",className:"join-btn","data-cy":"join-btn"},"Play!"))))},b=a(370),v=a(51),w=function(){return o.a.createElement(b.a,{fixed:"bottom",inverted:!0,secondary:!0,style:{backgroundColor:"#666a86"}},o.a.createElement(i.a,null,o.a.createElement(b.a.Item,{header:!0},o.a.createElement(v.a,{name:"gavel",size:"big",style:{marginRight:"1.5em"}}),"Press the Button"),o.a.createElement(b.a.Item,{as:"a",href:"https://github.com/joonaspartanen/press-the-button"},"About")))},k=a(181),x=a.n(k)()(),C=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("Ready to play?"),s=Object(r.a)(c,2),m=s[0],u=s[1],f=Object(n.useState)(""),d=Object(r.a)(f,2),g=d[0],E=d[1],h=Object(n.useState)(!1),b=Object(r.a)(h,2),v=b[0],k=b[1];return Object(n.useEffect)((function(){x.on("gameState",(function(e){l(e.players)})),x.on("lostGame",(function(){k(!0)})),x.on("win",(function(e){u("You win ".concat(e," points!"))})),x.on("noWin",(function(e){u("The next prize is ".concat(e," clicks away!"))}))}),[a,v]),o.a.createElement(i.a,{style:{backgroundColor:"#2a3950",minHeight:"100vh"}},g?o.a.createElement(y,{notification:m,setNotification:u,players:a,lostGame:v,setLostGame:k,setUser:E,socket:x}):o.a.createElement(p,{setUser:E,socket:x}),o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[194,1,2]]]);
//# sourceMappingURL=main.afd84a4f.chunk.js.map