(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(43),r=n.n(c),s=n(15),o=n(0),i=n.n(o),u=n(1),l=n(13),j=n(38),d=n(31),b=n(16),p=n(12),O=n(32),f=n.n(O),m=n(26),h=n(54),x=n(27),v=n(74),_={apiKey:"AIzaSyBakyWjSoxAiTfhiuOxGan80tJv2s6KSDs",authDomain:"journal-app-5d1d7.firebaseapp.com",projectId:"journal-app-5d1d7",storageBucket:"journal-app-5d1d7.appspot.com",messagingSenderId:"231445689584",appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APIKEY:"AIzaSyBakyWjSoxAiTfhiuOxGan80tJv2s6KSDs",REACT_APP_APPID:"1:231445689584:web:24bcb6af0f24612619be35",REACT_APP_AUTHDOMAIN:"journal-app-5d1d7.firebaseapp.com",REACT_APP_MESSAGINGSENDERID:"231445689584",REACT_APP_PROJECTID:"journal-app-5d1d7",REACT_APP_STORAGEBUCKET:"journal-app-5d1d7.appspot.com"}).EACT_APP_APPID};Object(v.a)(_);var y=Object(h.a)(),g=new x.a,N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(Object(m.g)(Object(m.b)(y,"".concat(t,"/journal/notes"))));case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(p.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w="[auth] Login",E="[auth] Logout",S="[UI] Set Error",C="[UI] Remove Error",k="[UI] Start loading",A="[UI] Finish loading",P="[Notes] New note",I="[Notes] Set active note",T="[Notes] Load notes",D="[Notes] Update note",R="[Notes] Delete note",L="[Notes] Logout Cleaning",U=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dyegvlyox/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dyegvlyox/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t){return{type:I,payload:Object(p.a)({id:e},t)}},B=function(e,t){return{type:P,payload:Object(p.a)({id:e},t)}},G=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:a=t.sent,n(W(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(e){return{type:T,payload:e}},F=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(p.a)({},e)).id,s=Object(m.d)(y,"".concat(c,"/journal/notes/").concat(e.id)),t.next=7,Object(m.h)(s,r);case 7:n(J(e.id,r)),f.a.fire("Saved",e.title,"success");case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},J=function(e,t){return{type:D,payload:{id:e,note:Object(p.a)({id:e},t)}}},H=function(e){return{type:R,payload:e}},z=n(4),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(p.a)(Object(p.a)({},c),{},Object(z.a)({},t.name,t.value)))};return[c,o,s]},q=n(6),V=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(q.jsxs)("div",{className:"notes__appbar",children:[Object(q.jsx)("span",{children:"28 de agosto 2020"}),Object(q.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,f.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){f.a.showLoading()}}),t.next=4,U(e);case 4:r=t.sent,c.url=r,n(F(c)),f.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(q.jsxs)("div",{children:[Object(q.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(q.jsx)("button",{className:"btn",onClick:function(){e(F(t))},children:"Save"})]})]})},X=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=M(t),c=Object(l.a)(n,3),r=c[0],o=c[1],j=c[2],d=r.body,b=r.title,O=r.url,f=r.id,h=Object(a.useRef)(t.id),x=Object(a.useRef)(t.url);Object(a.useEffect)((function(){t.id!==h.current&&(j(t),h.current=t.id),t.url!==x.current&&(j(t),x.current=t.url)}),[t,j]),Object(a.useEffect)((function(){e(K(r.id,Object(p.a)({},r)))}),[r,e]);return Object(q.jsxs)("div",{className:"notes__main-content",children:[Object(q.jsx)(V,{}),Object(q.jsxs)("div",{className:"notes__content",children:[Object(q.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:b,onChange:o}),Object(q.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:d,onChange:o}),O&&Object(q.jsx)("div",{className:"notes__image",children:Object(q.jsx)("img",{src:O,alt:"imagen"})})]}),Object(q.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,r=Object(m.d)(y,"".concat(c,"/journal/notes/").concat(e)),t.next=4,Object(m.c)(r);case 4:n(H(e));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(f))},children:"Delete"})]})},Y=function(){return Object(q.jsxs)("div",{className:"nothing__main-content",children:[Object(q.jsxs)("p",{children:["Select something",Object(q.jsx)("br",{}),"or create an entry"]}),Object(q.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},Q=function(e){return{type:S,payload:e}},Z=function(){return{type:k}},$=function(){return{type:A}},ee=function(e,t){return{type:w,payload:{uid:e,displayName:t}}},te=function(){return{type:E}},ne=n(75),ae=n.n(ne),ce=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,o=ae()(n),i=Object(s.b)();return Object(q.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){i(K(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(q.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(q.jsxs)("div",{className:"journal__entry-body",children:[Object(q.jsx)("p",{className:"journal__entry-title",children:a}),Object(q.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(q.jsxs)("div",{className:"journal__entry-date-box",children:[Object(q.jsxs)("span",{children:[" ",o.format("dddd")," "]}),Object(q.jsxs)("h4",{children:[" ",o.format("Do")," "]})]})]})},re=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(q.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(q.jsx)(ce,Object(p.a)({},e),e.id)}))})},se=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(q.jsxs)("aside",{className:"journal__sidebar",children:[Object(q.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(q.jsxs)("h3",{className:"mt-5",children:[Object(q.jsx)("i",{className:"far fa-moon"}),Object(q.jsxs)("span",{children:[" ",t]})]}),Object(q.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(x.c)(),e.next=3,Object(x.f)(n);case 3:t(te()),t({type:L});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(q.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,Object(m.a)(Object(m.b)(y,"".concat(a,"/journal/notes")),c);case 5:r=e.sent,t(K(r.id,c)),t(B(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(q.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(q.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(q.jsx)(re,{})]})},oe=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(q.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(q.jsx)(se,{}),Object(q.jsx)("main",{children:e?Object(q.jsx)(X,{}):Object(q.jsx)(Y,{})})]})},ie=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=M({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],r=a[1],o=c.email,i=c.password;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h3",{className:"auth__title",children:"Login"}),Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(n){n(Z());var a=Object(x.c)();return Object(x.d)(a,e,t).then((function(e){var t=e.user;n(ee(t.uid,t.displayName)),n($())})).catch((function(e){n($()),f.a.fire("Error",e.message,"error")}))}}(o,i))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(q.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(q.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:i,onChange:r}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(q.jsxs)("div",{className:"auth__social-networks",children:[Object(q.jsx)("p",{children:"Login with social networks"}),Object(q.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){var t=Object(x.c)();Object(x.e)(t,g).then((function(t){var n=t.user;e(ee(n.uid,n.displayName))}))}))},children:[Object(q.jsx)("div",{className:"google-icon-wrapper",children:Object(q.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(q.jsx)("p",{className:"btn-text",children:Object(q.jsx)("b",{children:"Sign in with google"})})]})]}),Object(q.jsx)(d.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ue=n(77),le=n.n(ue),je=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=Object(s.c)((function(e){return e.ui})).loading,a=M({name:"",email:"",password:"",password2:""}),c=Object(l.a)(a,2),r=c[0],o=c[1],j=r.name,b=r.email,p=r.password,O=r.password2,m=function(){return 0===j.trim().length?(e(Q("Name is required")),!1):le.a.isEmail(b)?p!==O||p.length<5?(e(Q("Password should be at least 6 characters and match each other")),!1):(e({type:C}),!0):(e(Q("Email is not valid")),!1)};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h3",{className:"auth__title",children:"Register"}),Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()&&e(function(e,t,n){return function(a){a(Z());var c=Object(x.c)();Object(x.b)(c,e,t).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,Object(x.g)(c,{displayName:n});case 3:a(ee(c.uid,c.displayName)),a($());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){a($()),f.a.fire("Error",e.message,"error")}))}}(b,p,j))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(q.jsx)("div",{className:"auth__alert-error",children:t}),Object(q.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:j,onChange:o}),Object(q.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:b,onChange:o}),Object(q.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:p,onChange:o}),Object(q.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:O,onChange:o}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",disabled:n,children:"Register"}),Object(q.jsx)(d.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},de=function(){return Object(q.jsx)("div",{className:"auth__main",children:Object(q.jsx)("div",{className:"auth__box-container",children:Object(q.jsxs)(b.d,{children:[Object(q.jsx)(b.b,{exact:!0,path:"/auth/login",component:ie}),Object(q.jsx)(b.b,{exact:!0,path:"/auth/register",component:je}),Object(q.jsx)(b.a,{to:"/auth/login"})]})})})},be=n(47),pe=["isAuthenticated","component"],Oe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(be.a)(e,pe);return Object(q.jsx)(b.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(q.jsx)(n,Object(p.a)({},e)):Object(q.jsx)(b.a,{to:"/auth/login"})}}))},fe=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(be.a)(e,fe);return Object(q.jsx)(b.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(q.jsx)(b.a,{to:"/"}):Object(q.jsx)(n,Object(p.a)({},e))}}))},he=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),p=Object(l.a)(o,2),O=p[0],f=p[1];return Object(a.useEffect)((function(){var t=Object(j.c)();Object(j.d)(t,function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(ee(n.uid,n.displayName)),f(!0),e(G(n.uid))):f(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,f]),c?Object(q.jsx)("h1",{children:"Wait..."}):Object(q.jsx)(d.a,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(b.d,{children:[Object(q.jsx)(me,{path:"/auth",component:de,isAuthenticated:O}),Object(q.jsx)(Oe,{exact:!0,isAuthenticated:O,path:"/",component:oe}),Object(q.jsx)(b.a,{to:"/auth/login"})]})})})},xe=n(41),ve=n(78),_e=n(20),ye={notes:[],active:null},ge={loading:!1,msgError:null},Ne="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.c,we=Object(xe.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{uid:t.payload.uid,name:t.payload.displayName};case E:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(p.a)(Object(p.a)({},e),{},{msgError:t.payload});case C:return Object(p.a)(Object(p.a)({},e),{},{msgError:null});case k:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case A:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(p.a)(Object(p.a)({},e),{},{active:Object(p.a)({},t.payload)});case P:return Object(p.a)(Object(p.a)({},e),{},{notes:[t.payload].concat(Object(_e.a)(e.notes))});case T:return Object(p.a)(Object(p.a)({},e),{},{notes:Object(_e.a)(t.payload)});case D:return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case R:return Object(p.a)(Object(p.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case L:return Object(p.a)(Object(p.a)({},e),{},{active:null,notes:[]});default:return e}}}),Ee=Object(xe.d)(we,Ne(Object(xe.a)(ve.a))),Se=function(){return Object(q.jsx)(s.a,{store:Ee,children:Object(q.jsx)(he,{})})};n(180);r.a.render(Object(q.jsx)(Se,{}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.4a9895ab.chunk.js.map