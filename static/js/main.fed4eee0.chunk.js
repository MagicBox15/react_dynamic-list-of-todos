(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(7),c=s.n(n),r=s(2),o=s(3),a=s(5),i=s(4),l=s(1),d=s.n(l),u=(s(14),s(15),s(16),s(9)),h=s.n(u),p=s(0),j=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={visibleTodos:e.props.todos,inputFilter:""},e.handleSelectChange=function(t){switch(t.target.value){case"active":e.setState({visibleTodos:e.props.todos.filter((function(e){return!e.completed}))});break;case"completed":e.setState({visibleTodos:e.props.todos.filter((function(e){return e.completed}))});break;default:e.setState({visibleTodos:e.props.todos})}},e}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(e){e.todos!==this.props.todos&&this.getVisible()}},{key:"getVisible",value:function(){this.setState({visibleTodos:this.props.todos})}},{key:"render",value:function(){var e=this,t=this.state,s=t.visibleTodos,n=t.inputFilter,c=this.props.selectUser,r=s.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return Object(p.jsxs)("div",{className:"TodoList",children:[Object(p.jsx)("h2",{children:"Todos:"}),Object(p.jsxs)("form",{className:"TodoList__form",children:[Object(p.jsx)("input",{type:"text",value:n,placeholder:"Search",onChange:function(t){return e.setState({inputFilter:t.target.value})}}),Object(p.jsxs)("select",{className:"TodoList__select",onChange:this.handleSelectChange,children:[Object(p.jsx)("option",{value:"all",children:"All"}),Object(p.jsx)("option",{value:"active",children:"Active"}),Object(p.jsx)("option",{value:"completed",children:"Completed"})]})]}),Object(p.jsx)("div",{className:"TodoList__list-container",children:Object(p.jsx)("ul",{className:"TodoList__list",children:r.map((function(e){var t=e.id,s=e.title,n=e.userId,r=e.completed;return Object(p.jsxs)("li",{className:h()("TodoList__item","TodoList__item--".concat(r?"checked":"unchecked")),children:[Object(p.jsxs)("label",{htmlFor:"input",children:[Object(p.jsx)("input",{id:"input",type:"checkbox",readOnly:!0,checked:r}),Object(p.jsx)("p",{children:s})]}),Object(p.jsx)("button",{className:"TodoList__user-button button",type:"button",onClick:function(){c(n)},children:"User #".concat(n)})]},t)}))})})]})}}]),s}(d.a.Component),b=(s(18),function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){return e.json()}))}),m=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={user:null},e.clearSelectedUser=function(){e.setState({user:null})},e.getUsers=function(){b("/users/".concat(e.props.userId)).then((function(t){e.setState({user:t})}))},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.getUsers()}},{key:"render",value:function(){var e=this.state.user,t=this.props.userId;return e&&Object(p.jsxs)("div",{className:"CurrentUser",children:[Object(p.jsx)("h2",{className:"CurrentUser__title",children:Object(p.jsx)("span",{children:"Selected user: ".concat(t)})}),Object(p.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(p.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(p.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(p.jsx)("button",{type:"button",className:"CurrentUser__clear",onClick:this.clearSelectedUser,children:"Clear"})]})}}]),s}(d.a.PureComponent),f=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={todos:[],selectedUserId:1,errorMessage:""},e.selectUser=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:t})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;b("/todos").then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,s=e.todos,n=e.errorMessage;return Object(p.jsxs)("div",{className:"App",children:[s?Object(p.jsx)("div",{className:"App__sidebar",children:Object(p.jsx)(j,{todos:s,selectUser:this.selectUser})}):{errorMessage:n},Object(p.jsx)("div",{className:"App__content",children:Object(p.jsx)("div",{className:"App__content-container",children:t?Object(p.jsx)(m,{userId:this.state.selectedUserId}):"No user selected"})})]})}}]),s}(d.a.Component),v=f;c.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fed4eee0.chunk.js.map