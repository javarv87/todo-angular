webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var o=t("/oeL"),e=t("aR8+"),u=t("wQAS"),i=t("q4dy"),a=t("qbdv"),r=t("fc+i"),d=t("bm2B"),c=t("13je"),s=t("Z0p1");t.d(l,"a",function(){return p});var p=o.b(e.a,[u.a],function(n){return o.c([o.d(512,o.e,o.f,[[8,[i.a]],[3,o.e],o.g]),o.d(5120,o.h,o.i,[[3,o.h]]),o.d(4608,a.a,a.b,[o.h]),o.d(4608,o.j,o.j,[]),o.d(5120,o.k,o.l,[]),o.d(5120,o.m,o.n,[]),o.d(5120,o.o,o.p,[]),o.d(4608,r.b,r.c,[a.c]),o.d(6144,o.q,null,[r.b]),o.d(4608,r.d,r.e,[]),o.d(5120,r.f,function(n,l,t,o){return[new r.g(n),new r.h(l),new r.i(t,o)]},[a.c,a.c,a.c,r.d]),o.d(4608,r.j,r.j,[r.f,o.r]),o.d(135680,r.k,r.k,[a.c]),o.d(4608,r.l,r.l,[r.j,r.k]),o.d(6144,o.s,null,[r.l]),o.d(6144,r.m,null,[r.k]),o.d(4608,o.t,o.t,[o.r]),o.d(4608,r.n,r.n,[a.c]),o.d(4608,r.o,r.o,[a.c]),o.d(4608,d.a,d.a,[]),o.d(5120,c.a,c.b,[c.c,c.d]),o.d(5120,s.a,s.b,[c.a,s.c]),o.d(512,a.d,a.d,[]),o.d(1024,o.u,r.p,[]),o.d(1024,o.v,function(n,l){return[r.q(n,l)]},[[2,r.r],[2,o.w]]),o.d(512,o.x,o.x,[[2,o.v]]),o.d(131584,o.y,o.y,[o.r,o.z,o.A,o.u,o.e,o.x]),o.d(2048,o.B,null,[o.y]),o.d(512,o.C,o.C,[o.B]),o.d(512,r.s,r.s,[[3,r.s]]),o.d(512,d.b,d.b,[]),o.d(512,d.c,d.c,[]),o.d(512,c.e,c.e,[]),o.d(512,e.a,e.a,[]),o.d(256,c.c,{apiKey:"AIzaSyDTvZHi61B7tTDDsOkV5loA4v9Hfz67a5w",authDomain:"todo-angular-fs.firebaseapp.com",databaseURL:"https://todo-angular-fs.firebaseio.com",projectId:"todo-angular-fs",storageBucket:"",messagingSenderId:"214317744285"},[]),o.d(256,c.d,void 0,[]),o.d(256,s.c,!0,[])])})},0:function(n,l,t){n.exports=t("cDNt")},IRUi:function(n,l,t){"use strict";var o=t("iAWT"),e=t("Z0p1");t.d(l,"a",function(){return i});var u=this&&this.__assign||Object.assign||function(n){for(var l,t=1,o=arguments.length;t<o;t++){l=arguments[t];for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e])}return n},i=function(){function n(n){this.afs=n,this.todo=new o.a,this.todoCollectionRef=this.afs.collection("todos"),this.todo$=this.todoCollectionRef.snapshotChanges().map(function(n){return n.map(function(n){var l=n.payload.doc.data(),t=n.payload.doc.id;return u({id:t},l)})})}return n.prototype.addTodo=function(n){n&&n.trim().length&&this.todoCollectionRef.add({description:n,completed:!1}),this.todo=new o.a},n.prototype.updateTodo=function(n){this.todoCollectionRef.doc(n.id).update({completed:!n.completed})},n.prototype.deleteTodo=function(n){this.todoCollectionRef.doc(n.id).delete()},n.ctorParameters=function(){return[{type:e.a}]},n}()},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=[""]},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t("/oeL"),e=t("p5Ee"),u=t("+h1B"),i=t("fc+i");e.a.production&&t.i(o.a)(),t.i(i.a)().bootstrapModuleFactory(u.a)},iAWT:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){}return n}()},mdMI:function(n,l,t){"use strict";function o(n){return a._17(0,[(n()(),a._18(0,null,null,11,"li",[],[[2,"completed",null]],null,null,null,null)),(n()(),a._20(null,["\n        "])),(n()(),a._18(0,null,null,8,"div",[["class","view"]],null,null,null,null,null)),(n()(),a._20(null,["\n          "])),(n()(),a._18(0,null,null,0,"input",[["class","toggle"],["type","checkbox"]],[[8,"checked",0]],[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.updateTodo(n.context.$implicit)&&o}return o},null,null)),(n()(),a._20(null,["\n          "])),(n()(),a._18(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),a._20(null,["",""])),(n()(),a._20(null,["\n          "])),(n()(),a._18(0,null,null,0,"button",[["class","destroy"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.deleteTodo(n.context.$implicit)&&o}return o},null,null)),(n()(),a._20(null,["\n        "])),(n()(),a._20(null,["\n      "]))],null,function(n,l){n(l,0,0,l.context.$implicit.completed),n(l,4,0,l.context.$implicit.completed),n(l,7,0,l.context.$implicit.description)})}function e(n){return a._17(0,[(n()(),a._18(0,null,null,24,"section",[["class","todoapp"]],null,null,null,null,null)),(n()(),a._20(null,["\n  "])),(n()(),a._18(0,null,null,11,"header",[["class","header"]],null,null,null,null,null)),(n()(),a._20(null,["\n    "])),(n()(),a._18(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),a._20(null,["Todos"])),(n()(),a._20(null,["\n    "])),(n()(),a._18(0,null,null,5,"input",[["autofocus",""],["class","new-todo"],["placeholder","What needs to be done?"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0,e=n.component;if("input"===l){o=!1!==a._22(n,8)._handleInput(t.target.value)&&o}if("blur"===l){o=!1!==a._22(n,8).onTouched()&&o}if("compositionstart"===l){o=!1!==a._22(n,8)._compositionStart()&&o}if("compositionend"===l){o=!1!==a._22(n,8)._compositionEnd(t.target.value)&&o}if("ngModelChange"===l){o=!1!==(e.todo.description=t)&&o}if("keyup.enter"===l){o=!1!==e.addTodo(e.todo.description)&&o}return o},null,null)),a._19(16384,null,0,d.d,[a.J,a.K,[2,d.e]],null,null),a._23(1024,null,d.f,function(n){return[n]},[d.d]),a._19(671744,null,0,d.g,[[8,null],[8,null],[8,null],[2,d.f]],{model:[0,"model"]},{update:"ngModelChange"}),a._23(2048,null,d.h,null,[d.g]),a._19(16384,null,0,d.i,[d.h],null,null),(n()(),a._20(null,["\n  "])),(n()(),a._20(null,["\n  "])),(n()(),a._18(0,null,null,8,"section",[["class","main"]],null,null,null,null,null)),(n()(),a._20(null,["\n    "])),(n()(),a._18(0,null,null,5,"ul",[["class","todo-list"]],null,null,null,null,null)),(n()(),a._20(null,["\n      "])),(n()(),a._24(16777216,null,null,2,null,o)),a._19(802816,null,0,c.h,[a._10,a._11,a.m],{ngForOf:[0,"ngForOf"]},null),a._25(131072,c.i,[a._15]),(n()(),a._20(null,["\n    "])),(n()(),a._20(null,["\n  "])),(n()(),a._20(null,["\n"]))],function(n,l){var t=l.component;n(l,10,0,t.todo.description),n(l,20,0,a._26(l,20,0,a._22(l,21).transform(t.todo$)))},function(n,l){n(l,7,0,a._22(l,12).ngClassUntouched,a._22(l,12).ngClassTouched,a._22(l,12).ngClassPristine,a._22(l,12).ngClassDirty,a._22(l,12).ngClassValid,a._22(l,12).ngClassInvalid,a._22(l,12).ngClassPending)})}function u(n){return a._17(0,[(n()(),a._18(0,null,null,1,"app-todo",[],null,null,null,e,g)),a._19(49152,null,0,r.a,[s.a],null,null)],null,null)}var i=t("yA+/"),a=t("/oeL"),r=t("IRUi"),d=t("bm2B"),c=t("qbdv"),s=t("Z0p1");t.d(l,"b",function(){return g}),l.a=e;var p=[i.a],g=a._16({encapsulation:0,styles:p,data:{}});a._21("app-todo",r.a,u,{},{},[])},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o={production:!0,firebase:{apiKey:"AIzaSyDTvZHi61B7tTDDsOkV5loA4v9Hfz67a5w",authDomain:"todo-angular-fs.firebaseapp.com",databaseURL:"https://todo-angular-fs.firebaseio.com",projectId:"todo-angular-fs",storageBucket:"",messagingSenderId:"214317744285"}}},q4dy:function(n,l,t){"use strict";function o(n){return i._17(0,[(n()(),i._18(0,null,null,1,"app-todo",[],null,null,null,a.a,a.b)),i._19(49152,null,0,r.a,[d.a],null,null),(n()(),i._20(null,["\n"])),(n()(),i._18(0,null,null,27,"footer",[["class","info"]],null,null,null,null,null)),(n()(),i._20(null,["\n  "])),(n()(),i._18(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i._20(null,["Double-click to edit a todo"])),(n()(),i._20(null,["\n  "])),(n()(),i._18(0,null,null,4,"p",[],null,null,null,null,null)),(n()(),i._20(null,["\n    Replicated by "])),(n()(),i._18(0,null,null,1,"a",[["href","http://github.com/javarv87"]],null,null,null,null,null)),(n()(),i._20(null,["Javier Ruiz"])),(n()(),i._20(null,["\n  "])),(n()(),i._20(null,["\n  "])),(n()(),i._18(0,null,null,10,"p",[],null,null,null,null,null)),(n()(),i._20(null,["\n    Created by "])),(n()(),i._18(0,null,null,1,"a",[["href","http://github.com/samccone"]],null,null,null,null,null)),(n()(),i._20(null,["Sam Saccone"])),(n()(),i._20(null,[" and "])),(n()(),i._18(0,null,null,1,"a",[["href","http://github.com/colineberhardt"]],null,null,null,null,null)),(n()(),i._20(null,["Colin Eberhardt"])),(n()(),i._20(null,["      using "])),(n()(),i._18(0,null,null,1,"a",[["href","http://angular.io"]],null,null,null,null,null)),(n()(),i._20(null,["Angular2"])),(n()(),i._20(null,["\n  "])),(n()(),i._20(null,["\n  "])),(n()(),i._18(0,null,null,3,"p",[],null,null,null,null,null)),(n()(),i._20(null,["Part of "])),(n()(),i._18(0,null,null,1,"a",[["href","http://todomvc.com"]],null,null,null,null,null)),(n()(),i._20(null,["TodoMVC"])),(n()(),i._20(null,["\n"]))],null,null)}function e(n){return i._17(0,[(n()(),i._18(0,null,null,1,"app-root",[],null,null,null,o,p)),i._19(49152,null,0,c.a,[],null,null)],null,null)}var u=t("NhKt"),i=t("/oeL"),a=t("mdMI"),r=t("IRUi"),d=t("Z0p1"),c=t("wQAS");t.d(l,"a",function(){return g});var s=[u.a],p=i._16({encapsulation:0,styles:s,data:{}}),g=i._21("app-root",c.a,e,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},wQAS:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){this.title="app"}return n}()},"yA+/":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=['.todoapp[_ngcontent-%COMP%]{background:#fff;margin:130px 0 40px 0;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.new-todo[_ngcontent-%COMP%]{border:0;padding:6px;border:1px solid #999;padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.edit[_ngcontent-%COMP%], .new-todo[_ngcontent-%COMP%]{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;outline:none;color:inherit;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased}.edit[_ngcontent-%COMP%]{border:0;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2)}.main[_ngcontent-%COMP%]{position:relative;z-index:2;border-top:1px solid #e6e6e6}.toggle-all[_ngcontent-%COMP%]{position:absolute;top:-55px;left:-12px;width:60px;height:34px;text-align:center;border:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-appearance:none;-moz-appearance:none;appearance:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%], .toggle-all[_ngcontent-%COMP%]{background:none}.toggle-all[_ngcontent-%COMP%]:before{content:"\\276F";font-size:22px;color:#e6e6e6;padding:10px 27px 10px 27px}.todo-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{text-align:center;width:40px;height:40px;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{white-space:pre-line;word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;transition:color .4s}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{outline:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%]{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;transition:color .2s ease-out}button[_ngcontent-%COMP%]{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%]:after{content:"\\D7"}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .destroy[_ngcontent-%COMP%]{display:block}.todo-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#d9d9d9;text-decoration:line-through}.footer[_ngcontent-%COMP%]{color:#777;padding:10px 15px;height:20px;text-align:center;border-top:1px solid #e6e6e6}.footer[_ngcontent-%COMP%]:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todo-count[_ngcontent-%COMP%]{float:left;text-align:left}.todo-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:300}']}},[0]);