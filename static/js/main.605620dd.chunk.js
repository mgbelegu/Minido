(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(11),l=n.n(c),o=(n(17),n(8)),r=n(2),d=n(3),m=n(4),u=n(6),j=n(5),p=function(e){return e.children},h=(n(18),n(19),n.p+"static/media/Minido.09a015af.png"),b=function(e){return Object(s.jsxs)("div",{className:"Header",children:[Object(s.jsxs)("div",{className:"hamburger",onClick:e.clicked,children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]}),Object(s.jsx)("div",{className:"logoGroup",children:Object(s.jsx)("img",{src:h,alt:"Minido Logo"})})]})},f=function(e){return Object(s.jsx)(p,{children:Object(s.jsxs)("main",{className:"Content",children:[Object(s.jsx)(b,{clicked:e.navClicked}),e.children]})})},O=(n(20),function(e){return Object(s.jsxs)("form",{onSubmit:e.submitProp,children:[Object(s.jsx)("input",{className:"itemInput",placeholder:"Add a task...",value:e.value,onChange:e.onChange}),Object(s.jsx)("input",{className:"itemAdd",type:"submit",value:""})]})}),v=(n(9),function(e){return Object(s.jsx)("button",{className:"delete",onClick:e.onDelete})}),x=function(e){return Object(s.jsx)("button",{className:"done",onClick:e.onDone})},C=(n(10),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"itemDiv",children:[Object(s.jsx)("div",{contentEditable:"true",className:"listItem",onChange:this.props.modifyItemInput,children:this.props.name}),Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{onDone:this.props.doneItem}),Object(s.jsx)(v,{onDelete:this.props.deleteItem})]})]})}}]),n}(i.a.Component)),g=function(e){return Object(s.jsxs)("div",{className:"itemDiv",children:[Object(s.jsx)("li",{className:"listItemCompleted",children:e.name}),Object(s.jsx)("div",{children:Object(s.jsx)(v,{onDelete:e.deleteItem})})]})},I=(n(21),function(e){return Object(s.jsx)("div",{className:"ListContainer",children:e.children})}),y=(n(22),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={value:"",items:[],itemsCompleted:[]},e.makeid=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=n.length,a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*s));return t},e.isEmptyOrSpaces=function(e){return null===e||null!==e.match(/^ *$/)},e.inputHandler=function(t){e.setState({value:t.target.value})},e.handleAddItem=function(t){e.isEmptyOrSpaces(e.state.value)||(e.state.items.push({name:e.state.value,id:"".concat(e.makeid(5))}),e.setState({value:""})),t.preventDefault()},e.handleCompleteItem=function(t,n){var s=Object(r.a)(e.state.items),a=Object(o.a)({},s[t]);s[t]=a,e.state.itemsCompleted.push(s[t]),s.splice(t,1),e.setState({items:s}),n.preventDefault()},e.deleteItemHandler=function(t){var n=Object(r.a)(e.state.items);n.splice(t,1),e.setState({items:n})},e.deleteItemCompletedHandler=function(t){var n=Object(r.a)(e.state.itemsCompleted);n.splice(t,1),e.setState({itemsCompleted:n})},e.modifyItemHandler=function(t,n){var s=Object(r.a)(e.state.items),a=Object(o.a)({},s[t]);a.name=n.target.value,s[t]=a,e.setState({items:s})},e.clearCompletedHandler=function(){e.setState({itemsCompleted:[]})},e.showEmptyMessage=function(){return 0===e.state.items.length?Object(s.jsx)("p",{className:"emptyMessage",children:"Add a task."}):null},e.showEmptyMessageCompleted=function(){return 0===e.state.itemsCompleted.length?Object(s.jsx)("p",{className:"emptyMessage",children:"You don't have any completed tasks."}):null},e.autoGrow=function(e){e.style.height="5px",e.style.height=e.scrollHeight+"px"},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(f,{children:[Object(s.jsxs)(I,{children:[Object(s.jsx)("h3",{children:"To-Do:"}),this.showEmptyMessage(),this.state.items.map((function(t,n){return Object(s.jsx)(C,{name:t.name,deleteItem:function(){return e.deleteItemHandler(n)},modifyItemInput:function(t){return e.modifyItemHandler(n,t)},doneItem:function(t){return e.handleCompleteItem(n,t)}},t.id)})),Object(s.jsx)("h3",{className:"completedTitle",children:"Completed:"}),this.showEmptyMessageCompleted(),this.state.itemsCompleted.map((function(t,n){return Object(s.jsx)(g,{name:t.name,deleteItem:function(){return e.deleteItemCompletedHandler(n)}},t.id)}))]}),Object(s.jsx)(O,{submitProp:this.handleAddItem,onChange:this.inputHandler,value:this.state.value})]})})}}]),n}(a.Component)),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),N()}],[[23,1,2]]]);
//# sourceMappingURL=main.605620dd.chunk.js.map