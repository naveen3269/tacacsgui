(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{kIFp:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),a=t("pMnS"),s=t("9AJC"),r=t("i+/5"),i=t("kl+L"),c=t("A2Ik"),d=t("Ip0R"),o=t("ZYCi"),h=t("26FU"),p=t("P6uZ"),b=t("67Y/"),g=t("t/Na"),v=function(){function l(l){this.http=l}return l.prototype.get=function(){return this.http.get("api/tacacs/reports/general/",{}).pipe(Object(p.a)(),Object(b.a)(function(l){return l}))},l.prototype.checkUpdate=function(){return this.http.post("api/update/",{}).pipe(Object(p.a)(),Object(b.a)(function(l){return l}))},l.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new l(u["\u0275\u0275inject"](g.HttpClient))},token:l,providedIn:"root"}),l}(),f=t("9fK0"),m=function(){function l(l,n){this.service=l,this.service_=n,this.widgets={api:{text:new h.a("...")},tac_plus:{text:new h.a("...")},users:{text:new h.a("..."),url:"/tacacs/users"},devices:{text:new h.a("..."),url:"/tacacs/devices"},bad_authe:{text:new h.a("..."),url:"/reports/authe"},authe:{text:new h.a("..."),url:"/reports/authe"},autho:{text:new h.a("..."),url:"/reports/autho"},acc:{text:new h.a("..."),url:"/reports/acc"},ha:{text:new h.a("..."),url:"/"},tac_status:{text:new h.a("..."),url:"/tacacs/config/global"}}}return l.prototype.ngOnInit=function(){var l=this;this.service.get().subscribe(function(n){console.log(n.widgets[0]),n.widgets[0].update_&&l.checkUpdate(),l.widgets.users.text.next(n.widgets[0].users),l.widgets.devices.text.next(n.widgets[0].devices),l.widgets.api.text.next(n.widgets[0].APIVER),l.widgets.tac_plus.text.next(n.widgets[0].TACVER),l.widgets.bad_authe.text.next(n.widgets[0].authe_err),l.widgets.authe.text.next(n.widgets[0].authe),l.widgets.autho.text.next(n.widgets[0].autho),l.widgets.acc.text.next(n.widgets[0].acc),l.widgets.ha.text.next(n.widgets[0].ha),l.widgets.tac_status.text.next(n.widgets[0].tac_status)})},l.prototype.checkUpdate=function(){var l=this;this.service.checkUpdate().subscribe(function(n){console.log(n),n.output.client_version!==n.output.last_version.version&&(l.service_.update=!0)})},l}(),C=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,101,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,28,"div",[["class","col-lg-3 col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,27,"div",[["class","card m-2"],["style","min-height: 200px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,26,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["System Info"])),(l()(),u["\u0275eld"](6,0,null,null,5,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Time: "])),(l()(),u["\u0275eld"](9,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,1,"kt-clock",[],null,null,null,r.b,r.a)),u["\u0275did"](11,245760,null,0,i.a,[c.a],null,null),(l()(),u["\u0275eld"](12,0,null,null,5,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["API: "])),(l()(),u["\u0275eld"](15,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](16,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](18,0,null,null,5,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](19,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["TAC: "])),(l()(),u["\u0275eld"](21,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](22,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](24,0,null,null,5,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](25,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["HA Role: "])),(l()(),u["\u0275eld"](27,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](28,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](30,0,null,null,34,"div",[["class","col-lg-2 col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,33,"div",[["class","card m-2"],["style","min-height: 200px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](32,0,null,null,32,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](33,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Tac_Plus Info"])),(l()(),u["\u0275eld"](35,0,null,null,12,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Status: "])),(l()(),u["\u0275eld"](38,0,null,null,9,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,39).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](39,671744,null,0,o.s,[o.q,o.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](40,0,null,null,7,"span",[["class","pull-right kt-badge kt-badge--inline kt-badge--pill kt-badge--wide"]],null,null,null,null,null)),u["\u0275prd"](512,null,d["\u0275NgClassImpl"],d["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](42,278528,null,0,d.NgClass,[d["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),u["\u0275pod"](45,{"kt-badge--success":0,"kt-badge--warning":1}),(l()(),u["\u0275ted"](46,null,[" "," "])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](48,0,null,null,7,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](49,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Users: "])),(l()(),u["\u0275eld"](51,0,null,null,4,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275eld"](52,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,53).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](53,671744,null,0,o.s,[o.q,o.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275ted"](54,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](56,0,null,null,7,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](57,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Devices: "])),(l()(),u["\u0275eld"](59,0,null,null,4,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275eld"](60,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,61).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](61,671744,null,0,o.s,[o.q,o.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275ted"](62,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](64,0,null,null,0,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](65,0,null,null,36,"div",[["class","col-lg-3 col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](66,0,null,null,35,"div",[["class","card m-2"],["style","min-height: 200px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](67,0,null,null,34,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](68,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Reports"])),(l()(),u["\u0275eld"](70,0,null,null,7,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](71,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Authe Total: "])),(l()(),u["\u0275eld"](73,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,74).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](74,671744,null,0,o.s,[o.q,o.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](75,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](76,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](78,0,null,null,7,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](79,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Autho Total: "])),(l()(),u["\u0275eld"](81,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,82).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](82,671744,null,0,o.s,[o.q,o.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](83,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](84,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](86,0,null,null,7,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](87,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Acc Total: "])),(l()(),u["\u0275eld"](89,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,90).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](90,671744,null,0,o.s,[o.q,o.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](91,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](92,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](94,0,null,null,7,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](95,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Bad Authe: "])),(l()(),u["\u0275eld"](97,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,98).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](98,671744,null,0,o.s,[o.q,o.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](99,0,null,null,2,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](100,null,["",""])),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef])],function(l,n){var t=n.component;l(n,11,0),l(n,39,0,t.widgets.tac_status.url);var e=l(n,45,0,"active"==u["\u0275unv"](n,42,1,u["\u0275nov"](n,43).transform(t.widgets.tac_status.text)),"active"!=u["\u0275unv"](n,42,1,u["\u0275nov"](n,44).transform(t.widgets.tac_status.text)));l(n,42,0,"pull-right kt-badge kt-badge--inline kt-badge--pill kt-badge--wide",e),l(n,53,0,t.widgets.users.url),l(n,61,0,t.widgets.users.url),l(n,74,0,t.widgets.authe.url),l(n,82,0,t.widgets.autho.url),l(n,90,0,t.widgets.acc.url),l(n,98,0,t.widgets.bad_authe.url)},function(l,n){var t=n.component;l(n,16,0,u["\u0275unv"](n,16,0,u["\u0275nov"](n,17).transform(t.widgets.api.text))),l(n,22,0,u["\u0275unv"](n,22,0,u["\u0275nov"](n,23).transform(t.widgets.tac_plus.text))),l(n,28,0,u["\u0275unv"](n,28,0,u["\u0275nov"](n,29).transform(t.widgets.ha.text))),l(n,38,0,u["\u0275nov"](n,39).target,u["\u0275nov"](n,39).href),l(n,46,0,u["\u0275unv"](n,46,0,u["\u0275nov"](n,47).transform(t.widgets.tac_status.text))),l(n,52,0,u["\u0275nov"](n,53).target,u["\u0275nov"](n,53).href),l(n,54,0,u["\u0275unv"](n,54,0,u["\u0275nov"](n,55).transform(t.widgets.users.text))),l(n,60,0,u["\u0275nov"](n,61).target,u["\u0275nov"](n,61).href),l(n,62,0,u["\u0275unv"](n,62,0,u["\u0275nov"](n,63).transform(t.widgets.devices.text))),l(n,73,0,u["\u0275nov"](n,74).target,u["\u0275nov"](n,74).href),l(n,76,0,u["\u0275unv"](n,76,0,u["\u0275nov"](n,77).transform(t.widgets.authe.text))),l(n,81,0,u["\u0275nov"](n,82).target,u["\u0275nov"](n,82).href),l(n,84,0,u["\u0275unv"](n,84,0,u["\u0275nov"](n,85).transform(t.widgets.autho.text))),l(n,89,0,u["\u0275nov"](n,90).target,u["\u0275nov"](n,90).href),l(n,92,0,u["\u0275unv"](n,92,0,u["\u0275nov"](n,93).transform(t.widgets.acc.text))),l(n,97,0,u["\u0275nov"](n,98).target,u["\u0275nov"](n,98).href),l(n,100,0,u["\u0275unv"](n,100,0,u["\u0275nov"](n,101).transform(t.widgets.bad_authe.text)))})}var w=t("Zseb"),k=function(){function l(l){this.http=l}return l.prototype.get=function(){return this.http.get("api/tacacs/widget/chart/auth/",{}).pipe(Object(p.a)(),Object(b.a)(function(l){return l}))},l.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new l(u["\u0275\u0275inject"](g.HttpClient))},token:l,providedIn:"root"}),l}(),x=function(){function l(l){this.service=l,this.barChartOptions_authe={scaleShowVerticalLines:!1,responsive:!0,scales:{yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Authentication"},ticks:{beginAtZero:!0,userCallback:function(l,n,t){if(Math.floor(l)===l)return l}}}]}},this.barChartOptions_autho={scaleShowVerticalLines:!1,responsive:!0,scales:{yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Authorization"},ticks:{beginAtZero:!0,userCallback:function(l,n,t){if(Math.floor(l)===l)return l}}}]}},this.barChartLabels=[],this.labels=new h.a([]),this.barChartType="line",this.barChartLegend=!0,this.barChartData_authe=[{data:[],label:"Fail",fill:!1},{data:[],label:"Success",fill:!1}],this.barChartData_autho=[{data:[],label:"Fail",fill:!1},{data:[],label:"Success",fill:!1}]}return l.prototype.ngOnInit=function(){var l=this;this.service.get().subscribe(function(n){l.barChartData_authe[0].data=n.authe.chart.f,l.barChartData_authe[1].data=n.authe.chart.s,l.barChartData_autho[0].data=n.autho.chart.f,l.barChartData_autho[1].data=n.autho.chart.s,l.labels.next(n.time_range)})},l}(),_=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,9,"div",[["class","col-lg-4 col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,8,"div",[["class","card m-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Authentication Stats"])),(l()(),u["\u0275eld"](6,0,null,null,1,"h6",[["class","card-subtitle mb-2 text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["authentication per week"])),(l()(),u["\u0275eld"](8,0,null,null,2,"canvas",[["baseChart",""]],null,null,null,null,null)),u["\u0275did"](9,999424,null,0,w.a,[u.ElementRef,w.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"]},null),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](11,0,null,null,9,"div",[["class","col-lg-4 col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,8,"div",[["class","card m-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Authorization Stats"])),(l()(),u["\u0275eld"](16,0,null,null,1,"h6",[["class","card-subtitle mb-2 text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["authorization per week"])),(l()(),u["\u0275eld"](18,0,null,null,2,"canvas",[["baseChart",""]],null,null,null,null,null)),u["\u0275did"](19,999424,null,0,w.a,[u.ElementRef,w.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"]},null),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef])],function(l,n){var t=n.component;l(n,9,0,t.barChartData_authe,u["\u0275unv"](n,9,1,u["\u0275nov"](n,10).transform(t.labels)),t.barChartOptions_authe,t.barChartType,t.barChartLegend),l(n,19,0,t.barChartData_autho,u["\u0275unv"](n,19,1,u["\u0275nov"](n,20).transform(t.labels)),t.barChartOptions_autho,t.barChartType,t.barChartLegend)},null)}var D=function(){function l(l){this.http=l}return l.prototype.get=function(l){var n=(new g.HttpParams).set("users",l.users.toString()).set("devices",l.devices.toString()).set("usersReload",l.usersReload.toString()).set("devicesReload",l.devicesReload.toString());return this.http.get("api/tacacs/reports/top/access/",{params:n}).pipe(Object(p.a)(),Object(b.a)(function(l){return l}))},l.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new l(u["\u0275\u0275inject"](g.HttpClient))},token:l,providedIn:"root"}),l}(),R=function(){function l(l){this.service=l,this.chartColors=["rgb(255, 99, 132)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(201, 203, 207)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(255, 159, 64)"],this.barChartLabels_devices=[],this.barChartLabels=[],this.device_labels=new h.a(this.barChartLabels_devices),this.user_labels=new h.a(this.barChartLabels),this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartType="pie",this.barChartLegend=!0,this.barChartData=[{data:[],label:"Users",backgroundColor:this.chartColors}],this.barChartData_devices=[{data:[],label:"Devices",backgroundColor:this.chartColors}],this.set={users:5,devices:5,usersReload:1,devicesReload:1}}return l.prototype.ngOnInit=function(){var l=this;this.service.get(this.set).subscribe(function(n){l.barChartLabels=[],l.barChartData[0].data=[],l.barChartLabels_devices=[],l.barChartData_devices[0].data=[];for(var t=0;t<n.topUsers.length;t++)l.barChartLabels.push(n.topUsers[t].label),l.barChartData[0].data.push(n.topUsers[t].count);for(t=0;t<n.topDevices.length;t++)l.barChartLabels_devices.push(n.topDevices[t].label),l.barChartData_devices[0].data.push(n.topDevices[t].count);l.device_labels.next(l.barChartLabels_devices),l.user_labels.next(l.barChartLabels)})},l}(),A=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,9,"div",[["class","col-lg-4 col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,8,"div",[["class","card m-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Top 5 Active Users"])),(l()(),u["\u0275eld"](6,0,null,null,1,"h6",[["class","card-subtitle mb-2 text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["number of authentication per week"])),(l()(),u["\u0275eld"](8,0,[["topUsers",1]],null,2,"canvas",[["baseChart",""]],null,null,null,null,null)),u["\u0275did"](9,999424,null,0,w.a,[u.ElementRef,w.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"]},null),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](11,0,null,null,9,"div",[["class","col-lg-4 col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,8,"div",[["class","card m-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Top 5 Used Devices"])),(l()(),u["\u0275eld"](16,0,null,null,1,"h6",[["class","card-subtitle mb-2 text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["number of authentication per week"])),(l()(),u["\u0275eld"](18,0,[["topDevices",1]],null,2,"canvas",[["baseChart",""]],null,null,null,null,null)),u["\u0275did"](19,999424,null,0,w.a,[u.ElementRef,w.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"]},null),u["\u0275pid"](131072,d.AsyncPipe,[u.ChangeDetectorRef])],function(l,n){var t=n.component;l(n,9,0,t.barChartData,u["\u0275unv"](n,9,1,u["\u0275nov"](n,10).transform(t.user_labels)),t.barChartOptions,t.barChartType,t.barChartLegend),l(n,19,0,t.barChartData_devices,u["\u0275unv"](n,19,1,u["\u0275nov"](n,20).transform(t.device_labels)),t.barChartOptions,t.barChartType,t.barChartLegend)},null)}var K=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),O=u["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]     ngb-tabset>.nav-tabs{display:none}"]],data:{}});function S(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"div",[["class","m-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"kt-w-system-info",[],null,null,null,y,C)),u["\u0275did"](2,114688,null,0,m,[v,f.a],null,null),(l()(),u["\u0275eld"](3,0,null,null,1,"kt-w-auth-linechart",[],null,null,null,L,_)),u["\u0275did"](4,114688,null,0,x,[k],null,null),(l()(),u["\u0275eld"](5,0,null,null,1,"kt-w-auth-piechart",[],null,null,null,I,A)),u["\u0275did"](6,114688,null,0,R,[D],null,null)],function(l,n){l(n,2,0),l(n,4,0),l(n,6,0)},null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"kt-dashboard",[],null,null,null,S,O)),u["\u0275did"](1,114688,null,0,K,[],null,null)],function(l,n){l(n,1,0)},null)}var P=u["\u0275ccf"]("kt-dashboard",K,T,{},{},[]),j=t("gIcY"),U=t("4GxJ"),F=t("gk6K"),z=t("F+oH"),q=t("yYhs"),E=t("2rQ4");t.d(n,"DashboardModuleNgFactory",function(){return N});var N=u["\u0275cmf"](e,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,s.a,s.b,s.p,s.q,s.m,s.n,s.o,P]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[u.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,j.A,j.A,[]),u["\u0275mpd"](4608,U.D,U.D,[u.ComponentFactoryResolver,u.Injector,U.xb,U.E]),u["\u0275mpd"](4608,F.a,F.a,[]),u["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),u["\u0275mpd"](1073742336,o.t,o.t,[[2,o.z],[2,o.q]]),u["\u0275mpd"](1073742336,w.b,w.b,[]),u["\u0275mpd"](1073742336,z.a,z.a,[]),u["\u0275mpd"](1073742336,q.a,q.a,[]),u["\u0275mpd"](1073742336,U.c,U.c,[]),u["\u0275mpd"](1073742336,U.g,U.g,[]),u["\u0275mpd"](1073742336,U.h,U.h,[]),u["\u0275mpd"](1073742336,U.l,U.l,[]),u["\u0275mpd"](1073742336,U.n,U.n,[]),u["\u0275mpd"](1073742336,j.z,j.z,[]),u["\u0275mpd"](1073742336,j.k,j.k,[]),u["\u0275mpd"](1073742336,U.t,U.t,[]),u["\u0275mpd"](1073742336,U.z,U.z,[]),u["\u0275mpd"](1073742336,U.F,U.F,[]),u["\u0275mpd"](1073742336,U.J,U.J,[]),u["\u0275mpd"](1073742336,U.O,U.O,[]),u["\u0275mpd"](1073742336,U.R,U.R,[]),u["\u0275mpd"](1073742336,U.U,U.U,[]),u["\u0275mpd"](1073742336,U.Z,U.Z,[]),u["\u0275mpd"](1073742336,U.db,U.db,[]),u["\u0275mpd"](1073742336,U.gb,U.gb,[]),u["\u0275mpd"](1073742336,U.jb,U.jb,[]),u["\u0275mpd"](1073742336,U.G,U.G,[]),u["\u0275mpd"](1073742336,E.a,E.a,[]),u["\u0275mpd"](1073742336,e,e,[]),u["\u0275mpd"](1024,o.m,function(){return[[{path:"",component:K}]]},[])])})}}]);