(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var o=c(2),n=c(14),s=c.n(n),a=(c(23),c(24),c(15)),r=c(16),i=c(18),j=c(17),u=c(4),l=c(3),h=c.n(l),d=(c(43),c(0));function b(e){var t=Object(o.useState)(null),c=Object(u.a)(t,2),n=c[0],s=c[1];h.a.get("https://api.chucknorris.io/jokes/categories").then((function(e){var t=e.data.map((function(e){return e[0].toUpperCase()+e.substr(1)}));s(t)})).catch((function(e){console.log(e.message)}));var a=null;return n&&(a=n.map((function(t,c){return Object(d.jsx)("button",{onClick:function(){return e.getJoke(t)},className:"categories-button",children:t},t)}))),Object(d.jsx)("div",{className:"cateogries-container",children:a})}c(45);function g(e){var t=Object(o.useState)(""),c=Object(u.a)(t,2),n=c[0],s=c[1],a=function(){var t=e.category[0].toLowerCase()+e.category.substr(1);h.a.get("https://api.chucknorris.io/jokes/random?category=".concat(t)).then((function(e){console.log(e),s(e.data.value)})).catch((function(e){console.log(e.message)}))};return Object(o.useEffect)((function(){a()}),[e.category]),Object(d.jsxs)("div",{className:"joke-container",children:[Object(d.jsxs)("h5",{className:"joke-category",children:["Selected Category : ",e.category]}),Object(d.jsx)("div",{className:"joke-body",children:Object(d.jsx)("div",{children:n})}),Object(d.jsx)("div",{className:"joke-new-joke",children:Object(d.jsx)("button",{onClick:function(){return a()},children:"New Joke"})})]})}c(46);var O=function(e){Object(i.a)(c,e);var t=Object(j.a)(c);function c(e){var o;return Object(a.a)(this,c),(o=t.call(this,e)).getJoke=function(e){console.log("Category--\x3e",e),o.setState({showJoke:!0,jokeCategory:e})},o.state={showJoke:!1,jokeCategory:""},o}return Object(r.a)(c,[{key:"render",value:function(){var e=null;return this.state.showJoke&&(e=Object(d.jsx)(g,{category:this.state.jokeCategory})),Object(d.jsxs)("div",{className:"home-container",children:[Object(d.jsx)("div",{className:"home-head-div",children:Object(d.jsx)("h2",{className:"home-head",children:"Chuck Norris"})}),Object(d.jsx)("div",{className:"home-categories",children:Object(d.jsx)(b,{getJoke:this.getJoke.bind(this)})}),e,Object(d.jsx)("div",{className:"home-footer-div",children:Object(d.jsx)("div",{className:"home-footer"})})]})}}]),c}(o.Component);var k=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)(O,{})})})};s.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.828ca728.chunk.js.map