(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{SveV:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),a=u("9AJC"),d=u("II6f"),i=u("5Awz"),s=u("8kqb"),r=u("uoK1"),c=u("SZbH"),p=u("ZYCi"),g=u("GRfY"),m=function(){function l(){this.tableOptions={table:{delBtn:"/tacacs/device/group/delete/",editBtn:!0,selectable:!0,preview:{target:"deviceGrp"},pagination:!1,mainUrl:"/tacacs/device/group/datatables/",sort:{column:"name",direction:"asc"},editable:!0,columns:{id:{title:"ID",show:!1,sortable:!0},name:{title:"Name",show:!0,sortable:!0},created_at:{title:"Created",show:!1,sortable:!0},updated_at:{title:"Updated",show:!1,sortable:!0}}},panel:{add:{enable:!0},filter:{enable:!0},actions:{enable:!1,options:[]},moreColumns:{enable:!0}}}}return l.prototype.ngOnInit=function(){},l}(),v=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-main-table",[],null,null,null,d.b,d.a)),e["\u0275did"](1,114688,null,0,i.a,[s.a,r.a,c.j,p.q,p.a,g.a],{options:[0,"options"]},null)],function(l,n){l(n,1,0,n.component.tableOptions)},null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-dev-groups",[],null,null,null,f,v)),e["\u0275did"](1,114688,null,0,m,[],null,null)],function(l,n){l(n,1,0)},null)}var C=e["\u0275ccf"]("kt-dev-groups",m,h,{},{},[]),b=u("gIcY"),y=u("Ip0R"),R=u("4GxJ"),I=u("P+cp"),_=u("p/I8"),k=u("02SS"),D=u("6U+V"),w=function(){function l(l){this.toastr=l,this.list={acl:new D.a("acl"),user_group:new D.a("user_group")}}return l.prototype.ngOnInit=function(){var l=this;this.validation.subscribe(function(n){for(var u in n)if(n[u])for(var e=0;e<n[u].length;e++)l.toastr.error(n[u][e])})},l.prototype.setAcl=function(l){this.options.data.acl=l},l.prototype.setUserGroup=function(l){this.options.data.user_group=l},l}(),M=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"label",[["class","pull-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Welcome Banner"])),(l()(),e["\u0275eld"](3,0,null,null,5,"textarea",[["class","form-control form-control-sm"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,4)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,4).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,4)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,4)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.banner_welcome=u)&&t),t},null,null)),e["\u0275did"](4,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](6,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](8,16384,null,0,b.p,[[4,b.o]],null,null)],function(l,n){l(n,6,0,n.component.options.data.banner_welcome)},function(l,n){l(n,3,0,e["\u0275nov"](n,8).ngClassUntouched,e["\u0275nov"](n,8).ngClassTouched,e["\u0275nov"](n,8).ngClassPristine,e["\u0275nov"](n,8).ngClassDirty,e["\u0275nov"](n,8).ngClassValid,e["\u0275nov"](n,8).ngClassInvalid,e["\u0275nov"](n,8).ngClassPending)})}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"label",[["class","pull-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Message Of The Day Banner"])),(l()(),e["\u0275eld"](3,0,null,null,5,"textarea",[["class","form-control form-control-sm"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,4)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,4).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,4)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,4)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.banner_motd=u)&&t),t},null,null)),e["\u0275did"](4,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](6,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](8,16384,null,0,b.p,[[4,b.o]],null,null)],function(l,n){l(n,6,0,n.component.options.data.banner_motd)},function(l,n){l(n,3,0,e["\u0275nov"](n,8).ngClassUntouched,e["\u0275nov"](n,8).ngClassTouched,e["\u0275nov"](n,8).ngClassPristine,e["\u0275nov"](n,8).ngClassDirty,e["\u0275nov"](n,8).ngClassValid,e["\u0275nov"](n,8).ngClassInvalid,e["\u0275nov"](n,8).ngClassPending)})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"label",[["class","pull-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Authentication Failed Banner"])),(l()(),e["\u0275eld"](3,0,null,null,5,"textarea",[["class","form-control form-control-sm"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,4)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,4).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,4)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,4)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.banner_failed=u)&&t),t},null,null)),e["\u0275did"](4,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](6,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](8,16384,null,0,b.p,[[4,b.o]],null,null)],function(l,n){l(n,6,0,n.component.options.data.banner_failed)},function(l,n){l(n,3,0,e["\u0275nov"](n,8).ngClassUntouched,e["\u0275nov"](n,8).ngClassTouched,e["\u0275nov"](n,8).ngClassPristine,e["\u0275nov"](n,8).ngClassDirty,e["\u0275nov"](n,8).ngClassValid,e["\u0275nov"](n,8).ngClassInvalid,e["\u0275nov"](n,8).ngClassPending)})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","tacgui-blockui-main"]],null,null,null,null,null))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","tacgui-blockui-main-message"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[["class","kt-spinner kt-spinner--sm kt-spinner--success"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Please wait..."]))],null,null)}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,160,"div",[["class","col-md-9 col-lg-7"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,159,"div",[["class","card m-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,152,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,39,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,19,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,18,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name"])),(l()(),e["\u0275eld"](8,0,null,null,9,"input",[["class","form-control form-control-sm"],["placeholder","Device Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,13)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,13).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,13)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,13)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.name=u)&&t),t},null,null)),e["\u0275prd"](512,null,y["\u0275NgClassImpl"],y["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](10,278528,null,0,y.NgClass,[y["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,y.AsyncPipe,[e.ChangeDetectorRef]),e["\u0275pod"](12,{"is-invalid":0}),e["\u0275did"](13,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](15,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](17,16384,null,0,b.p,[[4,b.o]],null,null),(l()(),e["\u0275eld"](18,0,null,null,3,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,T)),e["\u0275did"](20,278528,null,0,y.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](131072,y.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275eld"](22,0,null,null,1,"span",[["class","form-text text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["it should be unique, but you can change it later"])),(l()(),e["\u0275eld"](24,0,null,null,18,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Tacacs Key"])),(l()(),e["\u0275eld"](28,0,null,null,9,"input",[["class","form-control form-control-sm"],["placeholder","Tacacs Key"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,33)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,33).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,33)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,33)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.key=u)&&t),t},null,null)),e["\u0275prd"](512,null,y["\u0275NgClassImpl"],y["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](30,278528,null,0,y.NgClass,[y["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,y.AsyncPipe,[e.ChangeDetectorRef]),e["\u0275pod"](32,{"is-invalid":0}),e["\u0275did"](33,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](35,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](37,16384,null,0,b.p,[[4,b.o]],null,null),(l()(),e["\u0275eld"](38,0,null,null,3,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,x)),e["\u0275did"](40,278528,null,0,y.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](131072,y.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275eld"](42,0,null,null,0,"span",[["class","form-text text-muted"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,11,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Enable Password"])),(l()(),e["\u0275eld"](48,0,null,null,5,"input",[["class","form-control form-control-sm"],["placeholder","Enable Password"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,49)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,49).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,49)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,49)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.enable=u)&&t),t},null,null)),e["\u0275did"](49,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](51,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](53,16384,null,0,b.p,[[4,b.o]],null,null),(l()(),e["\u0275eld"](54,0,null,null,0,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,0,"span",[["class","form-text text-muted"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,16,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Type of storing"])),(l()(),e["\u0275eld"](59,0,null,null,13,"select",[["class","form-control form-control-sm"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e["\u0275nov"](l,60).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,60).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.enable_flag=u)&&t),t},null,null)),e["\u0275did"](60,16384,null,0,b.x,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.x]),e["\u0275did"](62,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](64,16384,null,0,b.p,[[4,b.o]],null,null),(l()(),e["\u0275eld"](65,0,null,null,3,"option",[["value","0"]],null,null,null,null,null)),e["\u0275did"](66,147456,null,0,b.t,[e.ElementRef,e.Renderer2,[2,b.x]],{value:[0,"value"]},null),e["\u0275did"](67,147456,null,0,b.C,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Clear Text"])),(l()(),e["\u0275eld"](69,0,null,null,3,"option",[["value","1"]],null,null,null,null,null)),e["\u0275did"](70,147456,null,0,b.t,[e.ElementRef,e.Renderer2,[2,b.x]],{value:[0,"value"]},null),e["\u0275did"](71,147456,null,0,b.C,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["MD5"])),(l()(),e["\u0275eld"](73,0,null,null,81,"div",[["class","accordion accordion-light  accordion-toggle-arrow"]],null,null,null,null,null)),(l()(),e["\u0275eld"](74,0,null,null,29,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](75,0,null,null,5,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](76,0,null,null,4,"div",[["class","card-title collapsed"],["data-toggle","collapse"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=0!=(t.notCollapsedB=!t.notCollapsedB)&&e),e},null,null)),e["\u0275prd"](512,null,y["\u0275NgClassImpl"],y["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](78,278528,null,0,y.NgClass,[y["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](79,{collapsed:0}),(l()(),e["\u0275ted"](-1,null,["Banners"])),(l()(),e["\u0275eld"](81,0,null,null,22,"div",[],[[2,"collapse",null],[2,"show",null]],null,null,null,null)),e["\u0275did"](82,16384,null,0,R.m,[],{collapsed:[0,"collapsed"]},null),(l()(),e["\u0275eld"](83,0,null,null,20,"ngb-tabset",[],null,null,null,a.k,a.f)),e["\u0275did"](84,2146304,null,1,R.X,[R.Y],null,null),e["\u0275qud"](603979776,1,{tabs:1}),(l()(),e["\u0275eld"](86,0,null,null,5,"ngb-tab",[["title","Welcome"]],null,null,null,null,null)),e["\u0275did"](87,2113536,[[1,4]],2,R.V,[],{title:[0,"title"]},null),e["\u0275qud"](603979776,2,{titleTpls:1}),e["\u0275qud"](603979776,3,{contentTpls:1}),(l()(),e["\u0275and"](0,null,null,1,null,N)),e["\u0275did"](91,16384,[[3,4]],0,R.W,[e.TemplateRef],null,null),(l()(),e["\u0275eld"](92,0,null,null,5,"ngb-tab",[["title","MOTD"]],null,null,null,null,null)),e["\u0275did"](93,2113536,[[1,4]],2,R.V,[],{title:[0,"title"]},null),e["\u0275qud"](603979776,4,{titleTpls:1}),e["\u0275qud"](603979776,5,{contentTpls:1}),(l()(),e["\u0275and"](0,null,null,1,null,F)),e["\u0275did"](97,16384,[[5,4]],0,R.W,[e.TemplateRef],null,null),(l()(),e["\u0275eld"](98,0,null,null,5,"ngb-tab",[["title","Failed Auth"]],null,null,null,null,null)),e["\u0275did"](99,2113536,[[1,4]],2,R.V,[],{title:[0,"title"]},null),e["\u0275qud"](603979776,6,{titleTpls:1}),e["\u0275qud"](603979776,7,{contentTpls:1}),(l()(),e["\u0275and"](0,null,null,1,null,E)),e["\u0275did"](103,16384,[[7,4]],0,R.W,[e.TemplateRef],null,null),(l()(),e["\u0275eld"](104,0,null,null,31,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](105,0,null,null,5,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](106,0,null,null,4,"div",[["class","card-title collapsed"],["data-toggle","collapse"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=0!=(t.notCollapsedACC=!t.notCollapsedACC)&&e),e},null,null)),e["\u0275prd"](512,null,y["\u0275NgClassImpl"],y["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](108,278528,null,0,y.NgClass,[y["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](109,{collapsed:0}),(l()(),e["\u0275ted"](-1,null,["Access"])),(l()(),e["\u0275eld"](111,0,null,null,24,"div",[],[[2,"collapse",null],[2,"show",null]],null,null,null,null)),e["\u0275did"](112,16384,null,0,R.m,[],{collapsed:[0,"collapsed"]},null),(l()(),e["\u0275eld"](113,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](114,0,null,null,3,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](115,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](116,0,null,null,1,"kt-field-general-list",[],null,[[null,"returnData"]],function(l,n,u){var e=!0;return"returnData"===n&&(e=!1!==l.component.setAcl(u)&&e),e},I.b,I.a)),e["\u0275did"](117,114688,null,0,_.a,[k.a],{data:[0,"data"],params:[1,"params"]},{returnData:"returnData"}),(l()(),e["\u0275eld"](118,0,null,null,3,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](119,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](120,0,null,null,1,"kt-field-general-list",[],null,[[null,"returnData"]],function(l,n,u){var e=!0;return"returnData"===n&&(e=!1!==l.component.setUserGroup(u)&&e),e},I.b,I.a)),e["\u0275did"](121,114688,null,0,_.a,[k.a],{data:[0,"data"],params:[1,"params"]},{returnData:"returnData"}),(l()(),e["\u0275eld"](122,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](123,0,null,null,12,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](124,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](125,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Connection Timeout"])),(l()(),e["\u0275eld"](127,0,null,null,6,"input",[["class","form-control form-control-sm"],["placeholder","Connection Timeout"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,128)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,128).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,128)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,128)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e["\u0275nov"](l,129).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e["\u0275nov"](l,129).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,129).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.connection_timeout=u)&&t),t},null,null)),e["\u0275did"](128,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275did"](129,16384,null,0,b.u,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,b.n,function(l,n){return[l,n]},[b.e,b.u]),e["\u0275did"](131,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](133,16384,null,0,b.p,[[4,b.o]],null,null),(l()(),e["\u0275eld"](134,0,null,null,0,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275eld"](135,0,null,null,0,"span",[["class","form-text text-muted"]],null,null,null,null,null)),(l()(),e["\u0275eld"](136,0,null,null,18,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](137,0,null,null,5,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](138,0,null,null,4,"div",[["class","card-title collapsed"],["data-toggle","collapse"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=0!=(t.notCollapsedMS=!t.notCollapsedMS)&&e),e},null,null)),e["\u0275prd"](512,null,y["\u0275NgClassImpl"],y["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](140,278528,null,0,y.NgClass,[y["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](141,{collapsed:0}),(l()(),e["\u0275ted"](-1,null,["Manual Configuration"])),(l()(),e["\u0275eld"](143,0,null,null,11,"div",[],[[2,"collapse",null],[2,"show",null]],null,null,null,null)),e["\u0275did"](144,16384,null,0,R.m,[],{collapsed:[0,"collapsed"]},null),(l()(),e["\u0275eld"](145,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](146,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](147,0,null,null,1,"label",[["class","pull-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Manual Configuration"])),(l()(),e["\u0275eld"](149,0,null,null,5,"textarea",[["class","form-control form-control-sm"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,150)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,150).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,150)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,150)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.options.data.manual=u)&&t),t},null,null)),e["\u0275did"](150,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](152,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](154,16384,null,0,b.p,[[4,b.o]],null,null),(l()(),e["\u0275and"](16777216,null,null,2,null,O)),e["\u0275did"](156,16384,null,0,y.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,y.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275and"](16777216,null,null,2,null,P)),e["\u0275did"](159,16384,null,0,y.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,y.AsyncPipe,[e.ChangeDetectorRef])],function(l,n){var u,t,o=n.component,a=l(n,12,0,null==(u=e["\u0275unv"](n,10,1,e["\u0275nov"](n,11).transform(o.validation)))?null:u.name);l(n,10,0,"form-control form-control-sm",a),l(n,15,0,o.options.data.name),l(n,20,0,null==(t=e["\u0275unv"](n,20,0,e["\u0275nov"](n,21).transform(o.validation)))?null:t.name);var d,i,s=l(n,32,0,null==(d=e["\u0275unv"](n,30,1,e["\u0275nov"](n,31).transform(o.validation)))?null:d.key);l(n,30,0,"form-control form-control-sm",s),l(n,35,0,o.options.data.key),l(n,40,0,null==(i=e["\u0275unv"](n,40,0,e["\u0275nov"](n,41).transform(o.validation)))?null:i.key),l(n,51,0,o.options.data.enable),l(n,62,0,o.options.data.enable_flag),l(n,66,0,"0"),l(n,67,0,"0"),l(n,70,0,"1"),l(n,71,0,"1");var r=l(n,79,0,!o.notCollapsedB);l(n,78,0,"card-title collapsed",r),l(n,82,0,!o.notCollapsedB),l(n,87,0,"Welcome"),l(n,93,0,"MOTD"),l(n,99,0,"Failed Auth");var c=l(n,109,0,!o.notCollapsedACC);l(n,108,0,"card-title collapsed",c),l(n,112,0,!o.notCollapsedACC),l(n,117,0,o.options.data.acl,o.list.acl),l(n,121,0,o.options.data.user_group,o.list.user_group),l(n,131,0,o.options.data.connection_timeout);var p=l(n,141,0,!o.notCollapsedMS);l(n,140,0,"card-title collapsed",p),l(n,144,0,!o.notCollapsedMS),l(n,152,0,o.options.data.manual),l(n,156,0,e["\u0275unv"](n,156,0,e["\u0275nov"](n,157).transform(o.loading))),l(n,159,0,e["\u0275unv"](n,159,0,e["\u0275nov"](n,160).transform(o.loading)))},function(l,n){var u=n.component;l(n,8,0,e["\u0275nov"](n,17).ngClassUntouched,e["\u0275nov"](n,17).ngClassTouched,e["\u0275nov"](n,17).ngClassPristine,e["\u0275nov"](n,17).ngClassDirty,e["\u0275nov"](n,17).ngClassValid,e["\u0275nov"](n,17).ngClassInvalid,e["\u0275nov"](n,17).ngClassPending),l(n,28,0,e["\u0275nov"](n,37).ngClassUntouched,e["\u0275nov"](n,37).ngClassTouched,e["\u0275nov"](n,37).ngClassPristine,e["\u0275nov"](n,37).ngClassDirty,e["\u0275nov"](n,37).ngClassValid,e["\u0275nov"](n,37).ngClassInvalid,e["\u0275nov"](n,37).ngClassPending),l(n,48,0,e["\u0275nov"](n,53).ngClassUntouched,e["\u0275nov"](n,53).ngClassTouched,e["\u0275nov"](n,53).ngClassPristine,e["\u0275nov"](n,53).ngClassDirty,e["\u0275nov"](n,53).ngClassValid,e["\u0275nov"](n,53).ngClassInvalid,e["\u0275nov"](n,53).ngClassPending),l(n,59,0,e["\u0275nov"](n,64).ngClassUntouched,e["\u0275nov"](n,64).ngClassTouched,e["\u0275nov"](n,64).ngClassPristine,e["\u0275nov"](n,64).ngClassDirty,e["\u0275nov"](n,64).ngClassValid,e["\u0275nov"](n,64).ngClassInvalid,e["\u0275nov"](n,64).ngClassPending),l(n,76,0,!u.notCollapsedB),l(n,81,0,!0,!e["\u0275nov"](n,82).collapsed),l(n,106,0,!u.notCollapsedACC),l(n,111,0,!0,!e["\u0275nov"](n,112).collapsed),l(n,127,0,e["\u0275nov"](n,133).ngClassUntouched,e["\u0275nov"](n,133).ngClassTouched,e["\u0275nov"](n,133).ngClassPristine,e["\u0275nov"](n,133).ngClassDirty,e["\u0275nov"](n,133).ngClassValid,e["\u0275nov"](n,133).ngClassInvalid,e["\u0275nov"](n,133).ngClassPending),l(n,138,0,!u.notCollapsedMS),l(n,143,0,!0,!e["\u0275nov"](n,144).collapsed),l(n,149,0,e["\u0275nov"](n,154).ngClassUntouched,e["\u0275nov"](n,154).ngClassTouched,e["\u0275nov"](n,154).ngClassPristine,e["\u0275nov"](n,154).ngClassDirty,e["\u0275nov"](n,154).ngClassValid,e["\u0275nov"](n,154).ngClassInvalid,e["\u0275nov"](n,154).ngClassPending)})}var S=u("NqMs"),V=u("lkAW"),j=u("26FU"),U=u("P6uZ"),q=u("ruxR"),B=u("mrSG"),G=function(l){function n(n){void 0===n&&(n={});var u=l.call(this)||this;return u.data={},n=n||!1,u.init(),n&&Object.assign(u.data,n),u}return B.__extends(n,l),n.prototype.init=function(){this.data.acl=[],this.data.default_flag=0,this.data.banner_failed="",this.data.banner_motd="",this.data.banner_welcome="",this.data.connection_timeout=void 0,this.data.created_at="",this.data.enable="",this.data.enable_flag=1,this.data.id=void 0,this.data.key="",this.data.manual="",this.data.name="",this.data.updated_at="",this.data.user_group=[]},n.prototype.makeClone=function(){return this.clone(this.data)},n.prototype.get=function(){var l=this.makeClone();return l.acl=l.acl[0]&&l.acl[0].id?l.acl[0].id:null,l.user_group=l.user_group[0]&&l.user_group[0].id?l.user_group[0].id:null,l},n}(u("0smX").a),z=u("t/Na"),K=u("67Y/"),W="api/tacacs/device/group",J=function(){function l(l){this.http=l,this.objectKeys=Object.keys}return l.prototype.add=function(l){return this.http.post(W+"/add/",l).pipe(Object(U.a)(),Object(K.a)(function(l){return l}))},l.prototype.get=function(l){var n=(new z.HttpParams).set("id",l.toString());return this.http.get(W+"/edit/",{params:n}).pipe(Object(U.a)(),Object(K.a)(function(l){return l.group}))},l.prototype.save=function(l){return this.http.post(W+"/edit/",l).pipe(Object(U.a)(),Object(K.a)(function(l){return l}))},l.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new l(e["\u0275\u0275inject"](z.HttpClient))},token:l,providedIn:"root"}),l}(),Z=function(){function l(l,n,u,e){this.toastr=l,this.router=n,this.route=u,this.service=e,this.validation=new j.a({}),this.loadingForm=new j.a(!0),this.path=this.router.url.split("/")[3],this.formFooter=new q.a(this.path,"edit"==this.path),this.dgroup=new G}return l.prototype.ngOnInit=function(){var l=this;"add"==this.path?this.loadingForm.next(!1):this.route.paramMap.pipe(Object(U.a)()).subscribe(function(n){l.fillForm(+n.get("id"))})},l.prototype.fillForm=function(l){var n=this;this.service.get(l).subscribe(function(l){Object.assign(n.dgroup.data,l),n.oldItem=n.dgroup.makeClone(),n.loadingForm.next(!1)})},l.prototype.formAction=function(l){"add"==this.path?this.add(this.dgroup.get()):this.save(this.dgroup)},l.prototype.add=function(l){var n=this;this.loadingForm.next(!0),this.service.add(l).subscribe(function(l){n.validation.next(l.error.validation),l.error.status?n.loadingForm.next(!1):(l.deviceGroup?(n.toastr.success("Device Group Added!"),n.router.navigate(["../"],{relativeTo:n.route})):n.toastr.error("Unknown server error"),n.loadingForm.next(!1))})},l.prototype.save=function(l){var n=this;if(this.loadingForm.next(!0),JSON.stringify(l.data)==JSON.stringify(this.oldItem))return this.toastr.warning("No Changes Detected!"),void this.loadingForm.next(!1);this.service.save(l.get()).subscribe(function(l){n.validation.next(l.error.validation),l.error.status?n.loadingForm.next(!1):(l.save?(n.toastr.success("Device Group Changed!"),n.router.navigate(["../../"],{relativeTo:n.route})):n.toastr.error("Unknown server error"),n.loadingForm.next(!1))})},l}(),L=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-tac-dgrp-form",[],null,null,null,A,M)),e["\u0275did"](1,114688,null,0,w,[c.j],{options:[0,"options"],validation:[1,"validation"],loading:[2,"loading"]},null),(l()(),e["\u0275eld"](2,0,null,null,1,"kt-main-form-footer",[],null,[[null,"trigger"]],function(l,n,u){var e=!0;return"trigger"===n&&(e=!1!==l.component.formAction(u)&&e),e},S.b,S.a)),e["\u0275did"](3,114688,null,0,V.a,[],{options:[0,"options"],loading:[1,"loading"]},{trigger:"trigger"})],function(l,n){var u=n.component;l(n,1,0,u.dgroup,u.validation,u.loadingForm),l(n,3,0,u.formFooter,u.loadingForm)},null)}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-edit",[],null,null,null,Y,L)),e["\u0275did"](1,114688,null,0,Z,[c.j,p.q,p.a,J],null,null)],function(l,n){l(n,1,0)},null)}var X=e["\u0275ccf"]("kt-edit",Z,H,{},{},[]),$=u("9Bt9"),Q=u("qAlS"),ll=u("18CH"),nl=u("Fzqc"),ul=u("dWZg"),el=u("wOIO"),tl=u("EFBj"),ol=u("ZWfn");u.d(n,"DevGroupsModuleNgFactory",function(){return al});var al=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,a.a,a.b,a.p,a.q,a.m,a.n,a.o,C,X]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,y.NgLocalization,y.NgLocaleLocalization,[e.LOCALE_ID,[2,y["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,b.A,b.A,[]),e["\u0275mpd"](4608,R.D,R.D,[e.ComponentFactoryResolver,e.Injector,R.xb,R.E]),e["\u0275mpd"](4608,$.g,$.g,[y.DOCUMENT,e.NgZone,Q.j,$.i]),e["\u0275mpd"](1073742336,y.CommonModule,y.CommonModule,[]),e["\u0275mpd"](1073742336,p.t,p.t,[[2,p.z],[2,p.q]]),e["\u0275mpd"](1073742336,b.z,b.z,[]),e["\u0275mpd"](1073742336,b.k,b.k,[]),e["\u0275mpd"](1073742336,R.c,R.c,[]),e["\u0275mpd"](1073742336,R.g,R.g,[]),e["\u0275mpd"](1073742336,R.h,R.h,[]),e["\u0275mpd"](1073742336,R.l,R.l,[]),e["\u0275mpd"](1073742336,R.n,R.n,[]),e["\u0275mpd"](1073742336,R.t,R.t,[]),e["\u0275mpd"](1073742336,R.z,R.z,[]),e["\u0275mpd"](1073742336,R.F,R.F,[]),e["\u0275mpd"](1073742336,R.J,R.J,[]),e["\u0275mpd"](1073742336,R.O,R.O,[]),e["\u0275mpd"](1073742336,R.R,R.R,[]),e["\u0275mpd"](1073742336,R.U,R.U,[]),e["\u0275mpd"](1073742336,R.Z,R.Z,[]),e["\u0275mpd"](1073742336,R.db,R.db,[]),e["\u0275mpd"](1073742336,R.gb,R.gb,[]),e["\u0275mpd"](1073742336,R.jb,R.jb,[]),e["\u0275mpd"](1073742336,R.G,R.G,[]),e["\u0275mpd"](1073742336,ll.a,ll.a,[]),e["\u0275mpd"](1073742336,nl.a,nl.a,[]),e["\u0275mpd"](1073742336,ul.b,ul.b,[]),e["\u0275mpd"](1073742336,Q.g,Q.g,[]),e["\u0275mpd"](1073742336,Q.e,Q.e,[]),e["\u0275mpd"](1073742336,el.a,el.a,[]),e["\u0275mpd"](1073742336,$.h,$.h,[]),e["\u0275mpd"](1073742336,tl.a,tl.a,[]),e["\u0275mpd"](1073742336,ol.a,ol.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,p.m,function(){return[[{path:"",component:m},{path:"add",component:Z},{path:"edit/:id",component:Z}]]},[])])})}}]);