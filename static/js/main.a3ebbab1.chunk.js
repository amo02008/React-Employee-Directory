(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),s=n.n(r),c=(n(123),n(124),n(30)),l=n(19),o=n(56),u=n(55),d=n(93),h=n(95),m=n.n(h),f=function(){return m.a.get("https://randomuser.me/api/?inc=name,email,phone,login,id&results=10&nat=us")},j=n(18),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={user:[]},e.columns=[{field:"id",headerName:"ID",width:130},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"email",headerName:"Email",width:280},{field:"phone",headerName:"Phone",width:160},{field:"username",headerName:"Username",width:130},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue("firstName")||""," ").concat(e.getValue("lastName")||"")}}],e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({user:t.data.results.map((function(e){return{id:e.login.uuid,firstName:e.name.first,lastName:e.name.last,username:e.login.username,email:e.email,phone:e.phone}}))}),console.log(e.state.employee)})).catch((function(e){e.message}))}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d.a,{rows:this.state.user,columns:this.columns,pageSize:10})})}}]),n}(a.Component);f().then((function(e){console.log(e.data.results)}));var g=function(){return Object(j.jsx)("div",{style:{height:400,width:"100%"},children:Object(j.jsx)("div",{style:{display:"flex",height:"100%"},children:Object(j.jsx)("div",{style:{flexGrow:1},children:Object(j.jsx)(p,{})})})})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),v()}},[[149,1,2]]]);
//# sourceMappingURL=main.a3ebbab1.chunk.js.map