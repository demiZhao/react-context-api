(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n(34)},34:function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"addBook",function(){return k}),n.d(o,"deleteBook",function(){return O}),n.d(o,"editBook",function(){return E}),n.d(o,"completeBook",function(){return v}),n.d(o,"completeAllBooks",function(){return j}),n.d(o,"clearCompleted",function(){return y}),n.d(o,"setVisibilityFilter",function(){return B});var r,a=n(0),c=n.n(a),u=n(18),i=n(2),s=n(3),l=function(){return c.a.createElement("header",{className:"header",s:!0},c.a.createElement("h1",{style:{color:"rosybrown"}},"Books"))},d="ADD_TODO",m="DELETE_TODO",p="EDIT_TODO",f="COMPLETE_TODO",b="COMPLETE_ALL_TODOS",h="CLEAR_COMPLETED",k=function(t){return{type:d,text:t}},O=function(t){return{type:m,id:t}},E=function(t,e){return{type:p,id:t,text:e}},v=function(t){return{type:f,id:t}},j=function(){return{type:b}},y=function(){return{type:h}},B=function(t){return{type:"SET_VISIBILITY_FILTER",filter:t}},g=Object(s.b)(null,{addBook:k})(l),w=n(6),C=n(7),S=n(9),_=n(8),x=n(10),T=n(4),I=n(5),L=(r={},Object(I.a)(r,"show_all","All"),Object(I.a)(r,"show_active","Active"),Object(I.a)(r,"show_completed","Completed"),function(t){var e=t.activeCount,n=1===e?"book":"books";return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},c.a.createElement("strong",null,e||"No")," ",n," left to read"))}),D=n(22),N=n.n(D),F=function(t){function e(t){var n;return Object(w.a)(this,e),(n=Object(S.a)(this,Object(_.a)(e).call(this,t))).statusChange=n.statusChange.bind(Object(T.a)(Object(T.a)(n))),n.state={completed:n.props.book.completed},n}return Object(x.a)(e,t),Object(C.a)(e,[{key:"statusChange",value:function(){var t=this.props,e=t.book,n=t.updateBookStatus,o=e.status&&"unread"!==e.status?"unread":"completed";this.setState({completed:o}),n(e.id,o)}},{key:"render",value:function(){var t=this,e=this.props,n=e.book,o=(e.updateBookStatus,n.volumeInfo),r="completed"===n.status,a=c.a.createElement("div",{className:"view"},c.a.createElement("input",{className:"toggle",type:"checkbox",checked:r,onChange:function(){return t.statusChange()}}),c.a.createElement("label",{style:{fontFamily:"fantasy"}},o.title),c.a.createElement("p",{style:{fontSize:"14px",textAlign:"left",marginLeft:"60px",fontFamily:"fantasy"}},"--  ".concat(o.authors[0])));return c.a.createElement("li",{className:N()({completed:r}),style:{borderBottom:"none"}},a)}}]),e}(a.Component),A=c.a.createContext({}),M=function(t){var e=t.updateBookStatus,n=t.actions;return c.a.createElement(A.Consumer,null,function(t){var o=t.books;return c.a.createElement("ul",{className:"todo-list"},o.map(function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,Object.assign({key:t.id,book:t,updateBookStatus:e},n)),c.a.createElement("img",{src:t.volumeInfo.imageLinks.thumbnail,style:{marginLeft:"60px"}}),c.a.createElement("hr",{style:{border:"1px solid #ededed"}}))}))})},P=n(15),R=function(t){return t.todos},V=Object(P.createSelector)([function(t){return t.visibilityFilter},R],function(t,e){switch(t){case"show_all":return e;case"show_completed":return e.filter(function(t){return t.completed});case"show_active":return e.filter(function(t){return!t.completed});default:throw new Error("Unknown filter: "+t)}}),J=Object(P.createSelector)([R],function(t){return t.reduce(function(t,e){return e.completed?t+1:t},0)}),U=Object(s.b)(function(t){return{filteredTodos:V(t)}},function(t){return{actions:Object(i.a)(o,t)}})(M),Y=function(t){function e(t){var n;return Object(w.a)(this,e),(n=Object(S.a)(this,Object(_.a)(e).call(this,t))).state={books:[],completedBooks:0},n.updateBookStatus=n.updateBookStatus.bind(Object(T.a)(Object(T.a)(n))),n}return Object(x.a)(e,t),Object(C.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:Eileen%20Chang").then(function(t){return t.json()}).then(function(e){return t.setState({books:e.items})})}},{key:"updateBookStatus",value:function(t,e){var n=this.state.books;n.find(function(e){return e.id===t}).status=e,this.setState({books:n,completedBooks:"completed"===e?this.state.completedBooks+1:this.state.completedBooks-1})}},{key:"render",value:function(){return c.a.createElement(A.Provider,{value:{books:this.state.books}},c.a.createElement("section",{className:"main"},c.a.createElement(U,{updateBookStatus:this.updateBookStatus}),c.a.createElement(L,{completedCount:this.state.completedBooks,activeCount:this.state.books.length-this.state.completedBooks,onClearCompleted:this.props.actions.clearCompleted})))}}]),e}(a.Component),q=Object(s.b)(function(t){return{todosCount:t.todos.length,completedCount:J(t)}},function(t){return{actions:Object(i.a)(o,t)}})(Y),z=function(){return c.a.createElement("div",null,c.a.createElement(g,null),c.a.createElement(q,null))},G=n(12),H=n(23),K=[{text:"Use Redux",completed:!1,id:0}];var Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show_all",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_VISIBILITY_FILTER":return e.filter;default:return t}},W=Object(i.b)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return[].concat(Object(H.a)(t),[{id:t.reduce(function(t,e){return Math.max(e.id,t)},-1)+1,completed:!1,text:e.text}]);case m:return t.filter(function(t){return t.id!==e.id});case p:return t.map(function(t){return t.id===e.id?Object(G.a)({},t,{text:e.text}):t});case f:return t.map(function(t){return t.id===e.id?Object(G.a)({},t,{completed:!t.completed}):t});case b:var n=t.every(function(t){return t.completed});return t.map(function(t){return Object(G.a)({},t,{completed:!n})});case h:return t.filter(function(t){return!1===t.completed});default:return t}},visibilityFilter:Q}),X=(n(33),Object(i.c)(W));Object(u.render)(c.a.createElement(s.a,{store:X},c.a.createElement(z,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.41e35ef3.chunk.js.map