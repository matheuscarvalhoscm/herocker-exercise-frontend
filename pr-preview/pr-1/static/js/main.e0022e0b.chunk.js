(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(4),s=n.n(o),j=(n(9),n(3)),a=(n(10),n(0));var u=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(!0),s=Object(j.a)(o,2),u=s[0],i=s[1];return Object(c.useEffect)((function(){fetch("https://herocker-backend-test.herokuapp.com/users").then((function(t){return t.json()})).then((function(t){r(t),i(!1)}))}),[]),u?Object(a.jsx)("h1",{children:"loading"}):Object(a.jsxs)("table",{children:[Object(a.jsx)("tr",{children:Object.keys(n[0]).map((function(t){return Object(a.jsx)("th",{children:t},Math.random())}))}),Object(a.jsx)("tbody",{children:n.map((function(t){return Object(a.jsx)("tr",{children:Object.values(t).map((function(t){return Object(a.jsx)("td",{children:t},Math.random())}))},Math.random())}))})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e0022e0b.chunk.js.map