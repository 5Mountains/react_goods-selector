(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=a(1),l=a(4),u=a(5),i=a(8),m=a(7),d=a(6),p=a.n(d),b=(a(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),g=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={cart:[]},t.toggler=function(e){var a=t.state.cart;if(a.includes(e)){var n=a.filter((function(t){return t!==e}));return t.setState({cart:Object(s.a)(n)})}return t.setState({cart:[].concat(Object(s.a)(a),[e])})},t.resetter=function(){return t.setState({cart:[]})},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this,e=this.state.cart;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Selected good:",e.join(", ")),r.a.createElement("button",{type:"button",className:"cart__button button",onClick:this.resetter},"X"),r.a.createElement("ul",{className:"goods"},b.map((function(a){return r.a.createElement("li",{key:a,className:"goods__item"},r.a.createElement("p",{className:p()("goods__text",{selected:e.includes(a)})},a),r.a.createElement("button",{type:"button",className:"goods__button button",onClick:function(){return t.toggler(a)}},e.includes(a)?"Remove":"Add"))}))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.051e97b6.chunk.js.map