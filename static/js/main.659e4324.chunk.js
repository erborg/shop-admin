(this["webpackJsonpreact-project-4"]=this["webpackJsonpreact-project-4"]||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var n=c(6),s=c(7),i=c(2),a=c(1),l=c(15),j=c(0);function o(e){var t=Object(a.useState)(0),c=Object(i.a)(t,2),n=c[0],s=c[1],l=e.info;return l?Object(j.jsxs)("div",{className:"item",children:[Object(j.jsxs)("div",{className:"item-info",children:[Object(j.jsx)("h2",{children:l.name}),Object(j.jsx)("p",{children:l.desc})]}),Object(j.jsxs)("div",{className:"item-quantity",children:[Object(j.jsx)("button",{className:"item-less",disabled:0===n,onClick:function(){n>0&&s(n-1)},children:"-"}),Object(j.jsx)("h3",{className:"item-total",children:n||""}),Object(j.jsx)("button",{className:"item-more",onClick:function(){s(n+1)},children:"+"})]})]}):null}function r(e){return Object(j.jsx)("ul",{className:"shop",children:e.items.map((function(t,c){return Object(j.jsxs)("li",{children:[Object(j.jsx)(o,{info:t}),Object(j.jsx)("button",{onClick:function(){return e.onRemove(t.id)},className:"btn-delete",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},c)}))})}function u(e){return Object(j.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "}),Object(j.jsx)("input",{type:"text",id:"name",value:e.name,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",className:"textfield",onChange:e.onNameChange})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"desc",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "}),Object(j.jsx)("input",{type:"text",id:"desc",value:e.desc,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",className:"textfield",onChange:e.onDescChange})]}),Object(j.jsxs)("div",{className:"form-footer",children:[Object(j.jsx)("div",{className:"validation",children:0!==e.valid.length?e.valid:null}),Object(j.jsx)("input",{type:"submit",className:"btn-basic",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}function b(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)((function(){var e=localStorage.getItem("items");return null!==e?JSON.parse(e):[]})),b=Object(i.a)(o,2),d=b[0],m=b[1],O=Object(a.useState)(""),h=Object(i.a)(O,2),f=h[0],x=h[1],v=Object(a.useState)(""),p=Object(i.a)(v,2),g=p[0],N=p[1];return Object(a.useEffect)((function(){localStorage.setItem("items",JSON.stringify(d))}),[d]),Object(a.useEffect)((function(){0===d.length?document.title="\u0422\u043e\u0432\u0430\u0440\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442":1===d.length?document.title="\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043e\u0434\u0438\u043d \u0442\u043e\u0432\u0430\u0440":document.title="\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e ".concat(d.length," \u0442\u043e\u0432\u0430\u0440\u043e\u0432")})),Object(a.useEffect)((function(){return console.log(d)}),[d]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{name:f,desc:g,onNameChange:function(e){x(e.target.value)},onDescChange:function(e){N(e.target.value)},onSubmit:function(e){if(e.preventDefault(),""===f||""===g)n("Fields should not be empty!");else{var t={id:Object(l.a)(),name:f,desc:g};m([].concat(Object(s.a)(d),[t])),x(""),N(""),n("")}},valid:c}),0===d.length?Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u0442\u043e\u0432\u0430\u0440"})}):null,Object(j.jsx)(r,{items:d,onRemove:function(e){var t=d.filter((function(t){return t.id!==e}));m(t)}})]})}function d(){return Object(j.jsx)(b,{})}Object(n.render)(Object(j.jsx)(d,{}),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.659e4324.chunk.js.map