"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[538],{8193:(y,f,c)=>{c.d(f,{Z:()=>O});var a=c(9468),t=c(6814),v=c(7818),M=c(8351),D=c(5399),T=c(6223);function C(u,b){if(1&u){const r=a.EpF();a.TgZ(0,"span",18),a.NdJ("mouseenter",function(){const _=a.CHM(r).$implicit,m=a.oxw();return a.KtG(m.hoveredDate=_)})("mouseleave",function(){a.CHM(r);const d=a.oxw();return a.KtG(d.hoveredDate=null)}),a._uU(1),a.qZA()}if(2&u){const r=b.$implicit,p=b.focused,d=a.oxw();a.ekj("focused",p)("range",d.isRange(r))("faded",d.isHovered(r)||d.isInside(r)),a.xp6(1),a.hij(" ",r.day," ")}}let O=(()=>{class u{constructor(r){this.activeModal=r,this.calendar=(0,a.f3M)(D.vL),this.hoveredDate=null,this.fromDate=this.calendar.getToday(),this.toDate=this.calendar.getNext(this.fromDate,"d",-1),this.currentDate=new Date,this.startTime={hour:this.currentDate.getHours(),minute:this.currentDate.getMinutes()},this.endTime={hour:this.currentDate.getHours(),minute:this.currentDate.getMinutes()}}ngOnInit(){const r=this.inputData.startDate,p=this.inputData.endDate;this.fromDate={year:r.getFullYear(),month:r.getMonth()+1,day:r.getDate()},this.toDate={year:p.getFullYear(),month:p.getMonth()+1,day:p.getDate()};const d=r.getHours(),_=r.getMinutes(),m=p.getHours(),Z=p.getMinutes();this.startTime={hour:d,minute:_},this.endTime={hour:m,minute:Z}}onDateSelection(r){this.fromDate||this.toDate?this.fromDate&&!this.toDate&&r.after(this.fromDate)?this.toDate=r:(this.toDate=null,this.fromDate=r):this.fromDate=r}isHovered(r){return this.fromDate&&!this.toDate&&this.hoveredDate&&r.after(this.fromDate)&&r.before(this.hoveredDate)}isInside(r){return this.toDate&&r.after(this.fromDate)&&r.before(this.toDate)}isRange(r){return r.equals(this.fromDate)||this.toDate&&r.equals(this.toDate)||this.isInside(r)||this.isHovered(r)}selectDataAndClose(){this.activeModal.close({isUpdated:!0,dateData:{startDate:this.fromDate,endDate:this.toDate,startTime:this.startTime,endTime:this.endTime}})}closeModal(){this.activeModal.dismiss({isUpdated:!1})}static#t=this.\u0275fac=function(p){return new(p||u)(a.Y36(D.Kz))};static#e=this.\u0275cmp=a.Xpm({type:u,selectors:[["app-datatime-range-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[a.jDz],decls:26,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],["outsideDays","hidden",1,"range-datetimepicker",3,"displayMonths","dayTemplate","dateSelect"],["dp",""],["t",""],[1,"col-md-6","col-sm-6"],[3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-3","col-md-3","col-sm-6"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4",3,"click"],[1,"fas","fa-check"],[1,"col-xl-4","col-md-3","col-sm-6"],["type","button",1,"btn","btn-block","btn-primary","mb-4",3,"click"],[1,"fas","fa-times"],[1,"custom-day",3,"mouseenter","mouseleave"]],template:function(p,d){if(1&p&&(a.TgZ(0,"div",0)(1,"h6",1),a._uU(2,"Select Date"),a.qZA(),a.TgZ(3,"button",2),a.NdJ("click",function(){return d.closeModal()}),a.TgZ(4,"span",3),a._uU(5,"\xd7"),a.qZA()()(),a.TgZ(6,"div",4)(7,"div",5)(8,"ngb-datepicker",6,7),a.NdJ("dateSelect",function(m){return d.onDateSelection(m)}),a.qZA(),a.YNc(10,C,2,7,"ng-template",null,8,a.W1O),a.qZA(),a.TgZ(12,"div",5)(13,"div",9)(14,"ngb-timepicker",10),a.NdJ("ngModelChange",function(m){return d.startTime=m}),a.qZA()(),a.TgZ(15,"div",9)(16,"ngb-timepicker",10),a.NdJ("ngModelChange",function(m){return d.endTime=m}),a.qZA()()(),a.TgZ(17,"div",11)(18,"div",12)(19,"button",13),a.NdJ("click",function(){return d.selectDataAndClose()}),a._UZ(20,"i",14),a._uU(21," Apply "),a.qZA()(),a.TgZ(22,"div",15)(23,"button",16),a.NdJ("click",function(){return d.closeModal()}),a._UZ(24,"i",17),a._uU(25," Cancel "),a.qZA()()()()),2&p){const _=a.MAs(11);a.xp6(8),a.Q6J("displayMonths",2)("dayTemplate",_),a.xp6(6),a.Q6J("ngModel",d.startTime),a.xp6(2),a.Q6J("ngModel",d.endTime)}},dependencies:[t.ez,v.m,T.JJ,T.On,D.VL,D.Pm,M.Qf],styles:[".modal-title{font-style:normal;font-weight:400}  .modal-header{padding:10px;justify-content:space-between}  .close{border-radius:50%;padding:0 8px;border-color:#666}  .modal-row-border{border-color:#ced4da;border-style:solid;border-width:.8px;border-radius:5px;padding:10px;margin:20px 10px}  .ml-10{margin-left:10px}  .mb-5{margin-bottom:5px}  .custom-day{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}  .custom-day.focused{background-color:#e6e6e6}  .custom-day.range,   .custom-day:hover{background-color:#0275d8;color:#fff}  .custom-day.faded{background-color:#0275d880}  .range-datetimepicker{overflow-x:scroll}@media only screen and (max-width: 768px){  .col-sm-6{width:50%}}"]})}return u})()},5538:(y,f,c)=>{c.r(f),c.d(f,{NgbdSortableHeaderDirective:()=>m,default:()=>Z});var a=c(6814),t=c(9468),v=c(7818),M=c(8193),D=c(9074),T=c(5399),C=c(589),O=c(7911),u=c(220);function b(i,g){if(1&i){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.exportToFile())}),t._UZ(1,"i",8),t._uU(2," Export "),t.qZA()}}function r(i,g){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA()()),2&i){const e=g.$implicit;t.xp6(2),t.Oqu(t.Dn7(3,11,null==e?null:e.DateTime,"dd/MM/yyyy HH:mm:ss","UTC")),t.xp6(3),t.Oqu(null==e?null:e.WaterTankLevel),t.xp6(2),t.Oqu(null==e?null:e.WaterTankTemp),t.xp6(2),t.Oqu(null==e?null:e.OilTank1Level),t.xp6(2),t.Oqu(null==e?null:e.OilTank1Temp),t.xp6(2),t.Oqu(null==e?null:e.OilTank2Level),t.xp6(2),t.Oqu(null==e?null:e.OilTank2Temp),t.xp6(2),t.Oqu(null==e?null:e.OilTank3Level),t.xp6(2),t.Oqu(null==e?null:e.OilTank3Temp),t.xp6(2),t.Oqu(null==e?null:e.OilTank4Level),t.xp6(2),t.Oqu(null==e?null:e.OilTank4Temp)}}function p(i,g){if(1&i){const e=t.EpF();t.TgZ(0,"div",9)(1,"table",10)(2,"thead")(3,"tr")(4,"th",11),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(5,"Date Time"),t.qZA(),t.TgZ(6,"th",12),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(7,"Water Tank Level"),t.qZA(),t.TgZ(8,"th",13),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(9,"Water Tank Temperature"),t.qZA(),t.TgZ(10,"th",14),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(11,"Oil Tank 1 Level"),t.qZA(),t.TgZ(12,"th",15),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(13,"Oil Tank 1 Temperature"),t.qZA(),t.TgZ(14,"th",16),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(15,"Oil Tank 2 Level"),t.qZA(),t.TgZ(16,"th",17),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(17,"Oil Tank 2 Temperature"),t.qZA(),t.TgZ(18,"th",18),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(19,"Oil Tank 3 Level"),t.qZA(),t.TgZ(20,"th",19),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(21,"Oil Tank 3 Temperature"),t.qZA(),t.TgZ(22,"th",20),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(23,"Oil Tank 4 Level"),t.qZA(),t.TgZ(24,"th",21),t.NdJ("sort",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.onSort(o))}),t._uU(25,"Oil Tank 4 Temperature"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,r,24,15,"tr",22),t.qZA()(),t.TgZ(28,"div",23)(29,"ngb-pagination",24),t.NdJ("pageChange",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.page=o)})("pageChange",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.handlePageChange(o))}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(27),t.Q6J("ngForOf",e.selectedTableData),t.xp6(2),t.Q6J("collectionSize",e.tableData.length)("page",e.page)("maxSize",5)("rotate",!0)("ellipses",!0)("boundaryLinks",!0)}}const d={asc:"desc",desc:"","":"asc"};let m=(()=>{class i{constructor(){this.appSortable="",this.direction="",this.sort=new t.vpe}rotate(){this.direction=d[this.direction],this.sort.emit({column:this.appSortable,direction:this.direction})}static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275dir=t.lG2({type:i,selectors:[["th","appSortable",""]],hostVars:4,hostBindings:function(s,o){1&s&&t.NdJ("click",function(){return o.rotate()}),2&s&&t.ekj("asc","asc"===o.direction)("desc","desc"===o.direction)},inputs:{appSortable:"appSortable",direction:"direction"},outputs:{sort:"sort"},standalone:!0})}return i})(),Z=(()=>{class i{constructor(e,s,o,n){this.headerService=e,this.modalService=s,this.projectService=o,this.toastService=n,this.selectedTableData=[],this.tableData=[],this.tempTableData=[],this.page=1,this.pageSize=10,this.status=!1,this.data=["WaterTankTemp","WaterTankLevel","OilTank1Temp","OilTank1Level","OilTank2Temp","OilTank2Level","OilTank3Temp","OilTank3Level","OilTank4Temp","OilTank4Level"],this.headerService.setHeaderName("Process Report")}ngOnInit(){this.fromDate=new Date,this.toDate=new Date,this.fromDate.setHours(this.fromDate.getHours()-24),this.formatTimeModalDate()}handlePageChange(e){this.sliceTableData(e)}getData(){this.projectService.getAmbientData(this.jsStartDate,this.jsEndDate,this.data).subscribe(e=>{this.tableData=e,this.tempTableData=e,this.sliceTableData(this.page),this.status=!0})}exportToFile(){this.toastService.show({template:"Please wait while we prepare the report!!",classname:"bg-info",delay:5e3}),this.projectService.getTankReport(this.jsStartDate,this.jsEndDate,this.data).subscribe(e=>{const s=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),o=document.createElement("a");if(s.size>5){o.href=window.URL.createObjectURL(s);const n=new Date,h=`NPD-ProcessReport ${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;o.download=`${h}.xlsx`,document.body.appendChild(o),o.click(),document.body.removeChild(o)}else this.toastService.show({template:"Something Went Wrong Please Try Again Later !!!",classname:"bg-danger",delay:3e3})})}openDateTimeModal(){const o={startDate:this.fromDate,endDate:this.toDate},n=this.modalService.open(M.Z);n.componentInstance.inputData=o,n.result.then(l=>{const x=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),k=new Date(l.dateData.startDate.year,l.dateData.startDate.month-1,l.dateData.startDate.day,l.dateData.startTime.hour,l.dateData.startTime.minute,0),E=x.format(k),S=new Date(l.dateData.endDate.year,l.dateData.endDate.month-1,l.dateData.endDate.day,l.dateData.endTime.hour,l.dateData.endTime.minute,0),A=x.format(S);this.formattedDateTimeRange=E+" - "+A,this.jsStartDate=k,this.jsEndDate=S,this.jsStartDate=this.formatDate(this.jsStartDate),this.jsEndDate=this.formatDate(this.jsEndDate),this.getData()},l=>{console.log(`Modal dismissed with: ${l}`)})}onSort({column:e,direction:s}){if(this.headers)for(const o of this.headers)o.appSortable!==e&&(o.direction="");""===s||""===e?(this.tableData=this.tempTableData,this.sliceTableData(this.page)):(this.tableData=[...this.tempTableData].sort((o,n)=>{const l=((i,g)=>i<g?-1:i>g?1:0)(o[e],n[e]);return"asc"===s?l:-l}),this.sliceTableData(this.page))}sliceTableData(e){this.selectedTableData=this.tableData.slice((e-1)*this.pageSize,e*this.pageSize)}formatTimeModalDate(){const s=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),n=s.format(this.toDate),h=s.format(this.fromDate);this.jsStartDate=this.formatDate(this.fromDate),this.jsEndDate=this.formatDate(this.toDate),this.formattedDateTimeRange=h+" - "+n}formatDate(e){return`${e.getFullYear()}-${this.padZero(e.getMonth()+1)}-${this.padZero(e.getDate())}T${this.padZero(e.getHours())}:${this.padZero(Math.abs(e.getMinutes()))}`}padZero(e){return e<10?`0${e}`:`${e}`}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(D.r),t.Y36(T.FF),t.Y36(C.Y),t.Y36(O.k))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-process-report"]],viewQuery:function(s,o){if(1&s&&t.Gf(m,5),2&s){let n;t.iGM(n=t.CRH())&&(o.headers=n)}},standalone:!0,features:[t.jDz],decls:10,vars:5,consts:[[1,"ambient-report","mt-2"],[3,"hidHeader","options"],[1,"d-flex","align-items-start","justify-content-between","dateRangePicker"],[1,"custom-datetime-range-span",3,"click"],[1,"fas","fa-calendar"],["class","btn btn-success",3,"click",4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"btn","btn-success",3,"click"],[1,"fa","fa-file-csv","fw-bolder"],[1,"table-responsive"],[1,"table","table-styling"],["appSortable","DateTime",3,"sort"],["appSortable","WaterTankLevel",3,"sort"],["appSortable","WaterTankTemp",3,"sort"],["appSortable","OilTank1Level",3,"sort"],["appSortable","OilTank1Temp",3,"sort"],["appSortable","OilTank2Level",3,"sort"],["appSortable","OilTank2Temp",3,"sort"],["appSortable","OilTank3Level",3,"sort"],["appSortable","OilTank3Temp",3,"sort"],["appSortable","OilTank4Level",3,"sort"],["appSortable","OilTank4Temp",3,"sort"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","align-items-center","gap-3"],[3,"collectionSize","page","maxSize","rotate","ellipses","boundaryLinks","pageChange"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div")(2,"app-card",1)(3,"div",2)(4,"div")(5,"span",3),t.NdJ("click",function(){return o.openDateTimeModal()}),t._UZ(6,"i",4),t._uU(7),t.qZA()(),t.YNc(8,b,3,0,"button",5),t.qZA(),t.YNc(9,p,30,7,"div",6),t.qZA()()()),2&s&&(t.xp6(2),t.Q6J("hidHeader",!0)("options",!1),t.xp6(5),t.hij(" ",o.formattedDateTimeRange," "),t.xp6(1),t.Q6J("ngIf",o.tableData&&o.tableData.length),t.xp6(1),t.Q6J("ngIf",o.tableData&&o.tableData.length))},dependencies:[a.ez,a.sg,a.O5,a.uU,v.m,u.A,T.N9,m],styles:[".custom-datetime-range-span{padding:2px 8px;border:solid 1px rgb(206,212,218);border-radius:20px}  .custom-datetime-range-span i{margin-right:15px}  .card .card-body{padding:10px 8px!important}  .btn-apply{padding:2px 8px!important;margin-left:5px}"]})}return i})()}}]);