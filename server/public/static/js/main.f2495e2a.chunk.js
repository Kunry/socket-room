(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(44)},22:function(t,e,n){},23:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(10),i=n.n(c),s=(n(22),n(2)),r=n(11),l=n(14),u=n(12),h=n(15),m=(n(23),n(13)),p=n.n(m),d=function t(){var e=this;Object(s.a)(this,t),this.Msg=function(){return console.log("http://localhost:3000/api"),e.service.get("/").then(function(t){return t.data})},this.service=p.a.create({baseURL:"http://localhost:3000/api",whitCredential:!0})},g=(n(43),function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).connectBack=function(){t.authService.Msg().then(function(e){var n=e.msg,a=e.name;console.log(n),t.setState({msg:n,name:a})})},t.state={msg:""},t.authService=new d,t.connectBack(),t}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"App"},o.a.createElement("p",null,this.state.msg),o.a.createElement("p",null,this.state.name))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.f2495e2a.chunk.js.map