(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],Array(34).concat([function(e,a,r){var t={"./dc-arrow.jpg":35,"./dc-batman.jpg":36,"./dc-black.jpg":37,"./dc-blue.jpg":38,"./dc-flash.jpg":39,"./dc-green.jpg":40,"./dc-martian.jpg":41,"./dc-robin.jpg":42,"./dc-superman.jpg":43,"./dc-wonder.jpg":44,"./marvel-captain.jpg":45,"./marvel-cyclops.jpg":46,"./marvel-daredevil.jpg":47,"./marvel-hawkeye.jpg":48,"./marvel-hulk.jpg":49,"./marvel-iron.jpg":50,"./marvel-silver.jpg":51,"./marvel-spider.jpg":52,"./marvel-thor.jpg":53,"./marvel-wolverine.jpg":54};function c(e){var a=s(e);return r(a)}function s(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=s,e.exports=c,c.id=34},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-arrow.15b27bc2.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-batman.ab9eadc3.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-black.3747c663.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-blue.cc8169a3.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-flash.b3922f25.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-green.01c54ee1.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-martian.78565f7d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-robin.ea4afe99.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-superman.e9391474.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-wonder.970ba2d6.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-captain.d2c7774d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-cyclops.f1442408.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hawkeye.1f78e874.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hulk.d1af5fe5.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-iron.b394df11.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-silver.1d43a08b.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-spider.054016b4.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-thor.c63e651c.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-wolverine.ee676488.jpg"},,,,,,,,,,,,,,function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(10),i=Object(t.createContext)(),l=r(5),o=r(2),d=r(4),u=r(13),j=r(0),h=function(e){var a=e.isAuthenticated,r=e.component,t=Object(u.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(j.jsx)(o.b,Object(d.a)(Object(d.a)({},t),{},{component:function(e){return a?Object(j.jsx)(r,Object(d.a)({},e)):Object(j.jsx)(o.a,{to:"/login"})}}))},p=function(e){var a=e.isAuthenticated,r=e.component,t=Object(u.a)(e,["isAuthenticated","component"]);return Object(j.jsx)(o.b,Object(d.a)(Object(d.a)({},t),{},{component:function(e){return a?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)(r,Object(d.a)({},e))}}))},m="[auth] login",b="[auth] logout",v=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch;return Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)("hr",{}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:m,payload:{name:"Arturo"}}),a.replace(e)},children:"Login"})]})},f=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(o.g)();return Object(j.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(j.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(j.jsx)("div",{className:"navbar-collapse",children:Object(j.jsxs)("div",{className:"navbar-nav",children:[Object(j.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(j.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(j.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"SEARCH"})]})}),Object(j.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(j.jsxs)("span",{className:"nav-item nav-link text-info",children:[" ",a," "]}),Object(j.jsx)("button",{className:"btn nav-item nav-link",onClick:function(){c.replace("/login"),r({type:b})},children:"Logout"})]})})]})},O=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],g=r(34),x=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(j.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(j.jsxs)("div",{className:"row no-gutters",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)("img",{src:g("./".concat(a,".jpg")).default,className:"card-img",alt:r})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{className:"card-title",children:r}),Object(j.jsx)("p",{className:"card-text",children:t}),t!==s?Object(j.jsx)("p",{className:"card-text",children:s}):null,Object(j.jsx)("div",{className:"card-text",children:Object(j.jsxs)("p",{className:"text-muted",children:[" ",c," "]})}),Object(j.jsx)(l.b,{to:"./heroe/".concat(a),children:"Mas..."})]})})]})})},C=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher '".concat(e,"' no es correcto"));return O.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(j.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(j.jsx)(x,Object(d.a)({},e),e.id)}))})},_=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Heroes Marvel"}),Object(j.jsx)("hr",{}),Object(j.jsx)(C,{publisher:"Marvel Comics"})]})},N=function(e){var a=e.history,r=Object(o.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,O.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(j.jsx)(o.a,{to:"/"});var s=c.publisher,n=c.superhero,i=c.alter_ego,l=c.first_appearance,d=c.characters;return Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{src:g("./".concat(r,".jpg")).default,alt:n,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(j.jsxs)("div",{className:"col-8",children:[Object(j.jsx)("h3",{children:n}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item",children:[" ",Object(j.jsx)("b",{children:"Alter ego: "})," ",i," "]}),Object(j.jsxs)("li",{className:"list-group-item",children:[" ",Object(j.jsx)("b",{children:"Publisher: "})," ",s," "]}),Object(j.jsxs)("li",{className:"list-group-item",children:[" ",Object(j.jsx)("b",{children:"First appearance: "})," ",l," "]})]}),Object(j.jsx)("h5",{children:"Characters"}),Object(j.jsxs)("p",{children:[" ",d," "]}),Object(j.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?("DC Comics"===s&&a.push("/dc"),"Marvel Comics"===s&&a.push("/marvel")):a.goBack()},children:"Return"})]})]})},y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Heroes DC"}),Object(j.jsx)("hr",{}),Object(j.jsx)(C,{publisher:"DC Comics"})]})},k=r(23),M=r.n(k),S=r(12),w=function(e){var a=e.history,r=Object(o.h)(),c=M.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(d.a)(Object(d.a)({},c),{},Object(S.a)({},a.name,a.value)))},function(){s(e)}]}({heroSearch:s}),l=Object(n.a)(i,2),u=l[0].heroSearch,h=l[1],p=Object(t.useMemo)((function(){return""===(e=s)?[]:(e=e.toLowerCase(),O.filter((function(a){return a.superhero.toLowerCase().includes(e)})));var e}),[s]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"SearchScreen"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-5",children:[Object(j.jsx)("h4",{children:"Search Form"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(u))},children:[Object(j.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"heroSearch",autoComplete:"off",value:u,onChange:h}),Object(j.jsx)("button",{type:"submit",className:"btn btn-block btn-outline-primary mt-3",children:"Search..."})]})]}),Object(j.jsxs)("div",{className:"col-7",children:[Object(j.jsx)("h4",{children:"Results"}),Object(j.jsx)("hr",{}),""===s&&Object(j.jsx)("div",{className:"alert alert-info",children:" Search a hero "}),""!==s&&0===p.length&&Object(j.jsxs)("div",{className:"alert alert-danger",children:[' There is not a hero with "',s,'" ']}),p.map((function(e){return Object(j.jsx)(x,Object(d.a)({},e),e.id)}))]})]})]})},D=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"container mt-2",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/marvel",component:_}),Object(j.jsx)(o.b,{exact:!0,path:"/heroe/:heroeId",component:N}),Object(j.jsx)(o.b,{exact:!0,path:"/dc",component:y}),Object(j.jsx)(o.b,{exact:!0,path:"/search",component:w}),Object(j.jsx)(o.a,{to:"/marvel"})]})})]})},A=function(){var e=Object(t.useContext)(i).user;return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(p,{exact:!0,path:"/login",component:v,isAuthenticated:e.logged}),Object(j.jsx)(h,{path:"/",component:D,isAuthenticated:e.logged})]})})})},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return Object(d.a)(Object(d.a)({},a.payload),{},{logged:!0});case b:return{logged:!1};default:return e}},F=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(t.useReducer)(B,{},F),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(j.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(j.jsx)(A,{})})};s.a.render(Object(j.jsx)(J,{}),document.getElementById("root"))}]),[[68,1,2]]]);
//# sourceMappingURL=main.158c472a.chunk.js.map