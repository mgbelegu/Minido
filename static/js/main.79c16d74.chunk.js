(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(7),l=n.n(c),r=(n(17),n(4)),o=n(2),m=n(8),u=n(9),d=n(11),j=n(10),p=function(e){return e.children},h=(n(18),function(e){return Object(s.jsx)(p,{children:Object(s.jsxs)("main",{className:"Content",children:[Object(s.jsx)("h1",{children:"Minido - Minimalist to do app"}),e.children]})})}),b=(n(19),function(e){return Object(s.jsxs)("form",{onSubmit:e.submitProp,children:[Object(s.jsx)("input",{className:"itemInput",placeholder:"Buy groceries...",value:e.value,onChange:e.onChange}),Object(s.jsx)("input",{className:"itemAdd",type:"submit",value:"+"})]})}),f=(n(5),function(e){return Object(s.jsx)("button",{className:"delete",onClick:e.onDelete,children:"\u2716"})}),O=function(e){return Object(s.jsx)("button",{className:"done",onClick:e.onDone,children:"\u2714"})},v=(n(6),function(e){return Object(s.jsxs)("div",{className:"itemDiv",children:[Object(s.jsx)("input",{className:"listItem",value:e.name,onChange:e.modifyItemInput}),Object(s.jsxs)("div",{children:[Object(s.jsx)(O,{onDone:e.doneItem}),Object(s.jsx)(f,{onDelete:e.deleteItem})]})]})}),x=function(e){return Object(s.jsxs)("div",{className:"itemDiv",children:[Object(s.jsx)("input",{className:"listItem",value:e.name,readOnly:!0}),Object(s.jsx)("div",{children:Object(s.jsx)(f,{onDelete:e.deleteItem})})]})},C=(n(20),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={value:"",items:[],itemsCompleted:[]},e.makeid=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=n.length,a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*s));return t},e.isEmptyOrSpaces=function(e){return null===e||null!==e.match(/^ *$/)},e.inputHandler=function(t){e.setState({value:t.target.value})},e.handleAddItem=function(t){e.isEmptyOrSpaces(e.state.value)||(e.state.items.push({name:e.state.value,id:"".concat(e.makeid(5))}),e.setState({value:""})),t.preventDefault()},e.handleCompleteItem=function(t,n){var s=Object(o.a)(e.state.items),a=Object(r.a)({},s[t]);s[t]=a,e.state.itemsCompleted.push(s[t]),s.splice(t,1),e.setState({items:s}),n.preventDefault()},e.deleteItemHandler=function(t){var n=Object(o.a)(e.state.items);n.splice(t,1),e.setState({items:n})},e.deleteItemCompletedHandler=function(t){var n=Object(o.a)(e.state.itemsCompleted);n.splice(t,1),e.setState({itemsCompleted:n})},e.modifyItemHandler=function(t,n){var s=Object(o.a)(e.state.items),a=Object(r.a)({},s[t]);a.name=n.target.value,s[t]=a,e.setState({items:s})},e.clearCompletedHandler=function(){e.setState({itemsCompleted:[]})},e.showEmptyMessage=function(){return 0===e.state.items.length?Object(s.jsx)("p",{className:"emptyMessage",children:"Add a task."}):null},e.showEmptyMessageCompleted=function(){return 0===e.state.itemsCompleted.length?Object(s.jsx)("p",{className:"emptyMessage",children:"You don't have any completed tasks."}):null},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(h,{children:[Object(s.jsx)(b,{submitProp:this.handleAddItem,onChange:this.inputHandler,value:this.state.value}),Object(s.jsx)("h3",{children:"To-Do:"}),this.showEmptyMessage(),this.state.items.map((function(t,n){return Object(s.jsx)(v,{name:t.name,deleteItem:function(){return e.deleteItemHandler(n)},modifyItemInput:function(t){return e.modifyItemHandler(n,t)},doneItem:function(t){return e.handleCompleteItem(n,t)}},t.id)})),Object(s.jsx)("h3",{className:"completedTitle",children:"Completed:"}),this.showEmptyMessageCompleted(),this.state.itemsCompleted.map((function(t,n){return Object(s.jsx)(x,{name:t.name,deleteItem:function(){return e.deleteItemCompletedHandler(n)}},t.id)})),Object(s.jsxs)("p",{children:["Made by ",Object(s.jsx)("a",{href:"https://minimalistwebs.com/",target:"_blank",rel:"noreferrer",children:"MinimalistWebs"})," \xa9 2020"]})]})})}}]),n}(a.Component)),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),I()}],[[21,1,2]]]);
//# sourceMappingURL=main.79c16d74.chunk.js.map