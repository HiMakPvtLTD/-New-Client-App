"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[592],{3182:(M,v,l)=>{l.d(v,{Z:()=>n});var c=l(6814),m=l(3185),e=l(7818),h=l(9468),_=l(5026),g=l(2561);const u=["chart"],p=function(d,o){return{width:d,height:o}};let n=(()=>{class d{set _customRangeSelector(s){this.customRangeSelector=s}set _size(s){this.size=s}constructor(s,i){this.dashService=s,this.chartService=i,this.showChart=!1,this.customRangeSelector=!1,this.stopZoom=!1,this.timeSeriesLegendState={},this.tempSchema=[{name:"Time",type:"date",format:"%d-%b-%Y %H:%M:%S"},{name:"Type",type:"string"},{name:"Value",type:"number"}],this.handleLegendItemClick=t=>{t.preventDefault();const r=t.dataObj.datasetName;this.timeSeriesLegendState[r]=+!this.timeSeriesLegendState[r]},this.type="timeseries",this.width="100%",this.height="500",this.dashService.timeSeriesData.subscribe(t=>{this.data=t,this.data?.length&&(this.loadLegendItems(),this.formatData(),this.showChart=!0)})}setChart(){this.dashService.timeSeriesData.subscribe(s=>{this.data=s,this.data?.length&&(this.loadLegendItems(),this.formatData(),this.showChart=!0)})}ngOnInit(){this.height=`${this.size.height}px`,this.width=this.size.width,this.chartService.resetChart$.subscribe(()=>{console.log("100%")})}loadLegendItems(){const s=0==Object.keys(this.timeSeriesLegendState).length;this.data?.map(i=>{const{name:t}=i;s&&(this.timeSeriesLegendState[t]=1)})}formatData(){if(!this.data)return;const s=this.data.map(t=>({type:"line",showInLegend:!0,visible:this.timeSeriesLegendState[t.name],...t})).flat();this.tempData=s;const i=(t,r)=>{this.timeSeriesLegendState[t]=r};this.chartOptions={zoomEnabled:!0,animationEnabled:!0,theme:"light2",title:{text:""},axisX:{valueFormatString:"HH:mm:ss"},axisY:{title:"Value",suffix:""},toolTip:{shared:!0,content:function(t){let r="";r+=(0,c.p6)(t.entries[0].dataPoint.x,"dd/MM/YYYY HH:mm:ss","en_US")+"<br/><br/>";for(let a=0;a<t.entries.length;a++)r+="PM2.5"==t.entries[a].dataSeries.name||"PM10"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(1)+" (\xb5g/m3)<br/>":"VOC"==t.entries[a].dataSeries.name||"Humidity"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(1)+" (%)<br/>":"Pump RPM"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (RPM)<br/>":"Motor AMP"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (A)<br/>":"Discharge Press PV"==t.entries[a].dataSeries.name||"Discharge Press SP"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Discharge Flow"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (LPH)<br/>":"Motor KW"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (KW)<br/>":"Stroke Rate"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (SCPM)<br/>":"Inlet Air Press. PV"==t.entries[a].dataSeries.name||"In Air Valve Output"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"PumpRPM"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (RPM)<br/>":"FcvSP"==t.entries[a].dataSeries.name||"FcvPos"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (%)<br/>":"SuctionPressurePV"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"FlowGrav"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (kG/Min)<br/>":"WeightScaleRead"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (Kg)<br/>":"MotorAMP"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (A)<br/>":"DischargePressurePV"==t.entries[a].dataSeries.name||"DischargePressureSP"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"DischargeFlow"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (LPH)<br/>":"MotorKW"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (KW)<br/>":"MotorKWH"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (kWh)<br/>":"StrokeCount"==t.entries[a].dataSeries.name||"StrokeCountRate"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (SCPM)<br/>":"AoddInAirPressPV"==t.entries[a].dataSeries.name||"InAirPressSP"==t.entries[a].dataSeries.name?t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":t.entries[a].dataSeries.name+": "+t.entries[a].dataPoint.y.toFixed(1)+" (\xb0C)<br/>";return r}},legend:{cursor:"pointer",itemclick:function(t){typeof t.dataSeries.visible>"u"||t.dataSeries.visible?(i(t.dataSeries.name,!1),t.dataSeries.visible=!1):(i(t.dataSeries.name,!0),t.dataSeries.visible=!0),t.chart.render()}},data:s}}static#e=this.\u0275fac=function(i){return new(i||d)(h.Y36(_.s),h.Y36(g.C))};static#t=this.\u0275cmp=h.Xpm({type:d,selectors:[["app-time-series"]],viewQuery:function(i,t){if(1&i&&h.Gf(u,5),2&i){let r;h.iGM(r=h.CRH())&&(t.chart=r.first)}},inputs:{_customRangeSelector:"_customRangeSelector",_size:"_size"},standalone:!0,features:[h.jDz],decls:2,vars:5,consts:[["id","chartContainer",3,"options","styles"],["chart",""]],template:function(i,t){1&i&&h._UZ(0,"canvasjs-chart",0,1),2&i&&h.Q6J("options",t.chartOptions)("styles",h.WLB(2,p,t.width,t.height))},dependencies:[c.ez,e.m,m.n,m.x],encapsulation:2})}return d})()},5738:(M,v,l)=>{l.d(v,{b:()=>_});const c=[{title:"Dashboard Access",properties:[{name:"NPD LAB",isActive:!0},{name:"Running Proj",isActive:!0},{name:"History Proj",isActive:!1},{name:"Proj Analysis",isActive:!1}]},{title:"Data Analysis Access",properties:[{name:"Time Series",isActive:!0},{name:"Statistical",isActive:!1},{name:"Log Report",isActive:!0},{name:"Chart Report",isActive:!0}]},{title:"Maitenance Access",properties:[{name:"Log Sheet",isActive:!0},{name:"Remote Op.",isActive:!0}]}];var m=l(5449),e=l(9468),h=l(9862);let _=(()=>{class g{constructor(p){this.http=p,this.data={}}getProjectDetails(){return this.http.post(`${m.N.apiUrl}/getProjectDetails`,{id:"1201082133"})}getRoles(){return this.http.post(`${m.N.apiUrl}/getAllRole`,{})}getAccessDetails(){return c}insertRole(p){return this.http.post(`${m.N.apiUrl}/SetRole`,{data:p})}updateRole(p,n){return this.http.post(`${m.N.apiUrl}/updateRole`,{id:p,data:n})}static#e=this.\u0275fac=function(n){return new(n||g)(e.LFG(h.eN))};static#t=this.\u0275prov=e.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},4277:(M,v,l)=>{l.d(v,{W:()=>h});var c=l(5449),m=l(9468),e=l(9862);let h=(()=>{class _{constructor(u){this.http=u}selectMaintenance(u,p){return this.http.post(`${c.N.apiUrl}/SelectMaintenance`,{from:u,to:p})}selectUserNote(u,p){return this.http.post(`${c.N.apiUrl}/SelectNote`,{from:u,to:p})}getOperations(){return this.http.get(`${c.N.apiUrl}/getGroupData`)}static#e=this.\u0275fac=function(p){return new(p||_)(m.LFG(e.eN))};static#t=this.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},589:(M,v,l)=>{l.d(v,{Y:()=>g});var c=l(5449),m=l(6814),e=l(9468),h=l(9862),_=l(7635);let g=(()=>{class u{constructor(n,d){this.http=n,this.authService=d}getLastRunData(){return this.http.get(`${c.N.apiUrl}/getLastRunData`)}getListView(n,d){return this.http.post(`${c.N.apiUrl}/getListView`,{fromDate:n,toDate:d})}getProjectDetails(n){return this.http.post(`${c.N.apiUrl}/getProjectDetails`,{id:n})}getTableData(n,d,o,s){return this.http.post(`${c.N.apiUrl}/getRunningStats`,{id:n,no:d,start:o,end:s})}getProjectAnalysis(n,d){return this.http.post(`${c.N.apiUrl}/getProjectAnalysis`,{id:n,no:d})}getTestBenchSequence(n,d){return this.http.post(`${c.N.apiUrl}/getTestBenchseq`,{id:n,no:d})}getTimeSeriesById(n,d){return this.http.post(`${c.N.apiUrl}/getTimeSeriesbyid`,{id:n,no:d})}getTimeSeriesByIdForRunPro(n,d,o,s){return this.http.post(`${c.N.apiUrl}/getTimeSeriesDatabyid`,{id:n,no:d,start:o,end:s})}getProjectRunTime(n){return this.http.post(`${c.N.apiUrl}/getProjectTime`,{id:n})}getUpdatePanelStatus(n,d,o,s,i,t){const r=this.authService.getFullNameFromToken();return this.http.post(`${c.N.apiUrl}/UpdatePanelStatus`,{group:n,status:d,date:o,message:s,uid:r.uid,projectid:i,no:t})}getAnalysisData(n,d,o,s){return this.http.post(`${c.N.apiUrl}/getAnalysisData`,{id:n,start:d,end:o,data:s})}createMaintenance(n,d,o,s,i){const t=this.authService.getFullNameFromToken(),r=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US"),a=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US"),S=(0,m.p6)(new Date(i),"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${c.N.apiUrl}/CreateMaintenance`,{data:{projectid:n,testno:d,reason:o,desc:s,createuid:t.uid,updateid:t.uid,createdate:r,updatedate:a,issuecreateddate:S}})}selectUpdateMaintenance(n,d,o,s){const i=this.authService.getFullNameFromToken(),t=(0,m.p6)(new Date(s),"YYYY-MM-dd HH:mm:ss","en_US"),r=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${c.N.apiUrl}/UpdateMaintenance`,{mid:n,data:[`reason='${d}'`,`description='${o}'`,`updatedbyid=${i.uid}`,`updateddate='${r}'`,`issuecreateddate='${t}'`]})}deleteMaintenance(n){return this.http.post(`${c.N.apiUrl}/deleteMaintenance`,{mid:n})}createNote(n,d,o,s,i){const r={uid:this.authService.getFullNameFromToken().uid,projectid:n,testno:d,remarks:o,updateddate:i,createddate:s};return this.http.post(`${c.N.apiUrl}/CreateNote`,{data:r})}createFav(n,d,o,s){const t={uid:this.authService.getFullNameFromToken().uid,projectid:n,testno:d,favremark:o,updatedate:s,status:!0};return this.http.post(`${c.N.apiUrl}/CreateFav`,{data:t})}updateUserNote(n,d){const o=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${c.N.apiUrl}/UpdateNote`,{id:n,data:[`remarks='${d}'`,`updateddate='${o}'`]})}deleteUserNote(n){return this.http.post(`${c.N.apiUrl}/deleteNote`,{id:n})}deleteFav(n){return this.http.post(`${c.N.apiUrl}/deleteFav`,{fid:n})}getAttach(n,d,o,s,i,t){return this.http.post(`${c.N.apiUrl}/getSeriesReport`,{projectId:n,headers:d,value:o,match:s,fromDate:i,toDate:t},{responseType:"blob"})}getAmbientData(n,d,o){return this.http.post(`${c.N.apiUrl}/getAmbiantData`,{data:o,start:n,end:d})}getAmbientReport(n,d,o){return this.http.post(`${c.N.apiUrl}/getAmbiantReport`,{data:o,start:n,end:d},{responseType:"blob"})}getTankReport(n,d,o){return this.http.post(`${c.N.apiUrl}/getTankReport`,{data:o,start:n,end:d},{responseType:"blob"})}static#e=this.\u0275fac=function(d){return new(d||u)(e.LFG(h.eN),e.LFG(_.u))};static#t=this.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},7844:(M,v,l)=>{l.d(v,{l:()=>p});var c=l(6814),m=l(7818),e=l(9468),h=l(3946),_=l(589),g=l(7911),u=l(95);let p=(()=>{class n{constructor(o,s,i){this.activeModal=o,this.projectService=s,this.toastService=i,this.reason=""}ngOnInit(){console.log(this.inputData),this.inputData.reason&&(this.reason=this.inputData.reason),this.inputData.description&&(this.remark=this.inputData.description),this.currrentDate=this.formateDate(),console.log(this.currrentDate)}createMaintenance(){this.projectService.createMaintenance(this.inputData.projectId,this.inputData.testId,this.reason,this.remark,this.currrentDate).subscribe({next:o=>{console.log(o),this.toastService.show({template:"Inserted Succesfully!!",classname:"bg-success",delay:3e3})},error:()=>{this.toastService.show({template:"Something went wrong",classname:"bg-danger",delay:3e3})}})}updateMaintenance(){console.log(this.reason,this.remark),this.projectService.selectUpdateMaintenance(this.inputData.mid,this.reason,this.remark,this.currrentDate).subscribe({next:o=>{console.log(o),this.toastService.show({template:"Updated Succesfully!!",classname:"bg-success",delay:3e3})},error:()=>{this.toastService.show({template:"Something went wrong!!",classname:"bg-danger",delay:3e3})}})}selectDataAndClose(){this.reason?this.remark?("add"==this.inputData.mode?this.createMaintenance():this.updateMaintenance(),this.activeModal.close({isSearch:!1,isSuccess:!0})):this.toastService.show({template:"Please enter the description",classname:"bg-danger",delay:3e3}):this.toastService.show({template:"Please select the reason",classname:"bg-danger",delay:3e3})}closeModal(){this.activeModal.dismiss({isSearch:!1})}formateDate(){let o=new Date;this.inputData.issuecreateddate&&(o=new Date(this.inputData.issuecreateddate));const s=o.getMonth()+1,i=o.getDate(),t=o.getHours(),r=o.getMinutes();return`${o.getFullYear()}-${this.padding10(s)}-${this.padding10(i)}T${this.padding10(t)}:${this.padding10(r)}`}padding10(o){return o>=10?o:`0${o}`}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(h.Kz),e.Y36(_.Y),e.Y36(g.k))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-project-maintenance-log-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[e.jDz],decls:48,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"form-group"],["for",""],["type","text","disabled","",1,"form-control",3,"value"],["type","datetime-local","name","date","id","",1,"form-control",3,"ngModel","ngModelChange"],["name","reason",1,"form-control",3,"ngModel","ngModelChange"],["value","","disabled","","selected",""],["value","Calibration"],["value","Mechanical"],["value","Electrical"],["value","Others"],["name","remark",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2"],["type","button","ngbAutofocus","",1,"btn","btn-block","d-flex","align-items-center","gap-2","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"h6",1),e._uU(2,"Add Maintenance log"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.closeModal()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"form")(9,"div",6)(10,"label",7),e._uU(11,"Project ID:"),e.qZA(),e._UZ(12,"input",8),e.qZA(),e.TgZ(13,"div",6)(14,"label",7),e._uU(15,"Test No:"),e.qZA(),e._UZ(16,"input",8),e.qZA(),e.TgZ(17,"div",6)(18,"label",7),e._uU(19,"Issue Created Date"),e.qZA(),e.TgZ(20,"input",9),e.NdJ("ngModelChange",function(r){return i.currrentDate=r}),e.qZA()(),e.TgZ(21,"div",6)(22,"label"),e._uU(23,"Select Reason"),e.qZA(),e.TgZ(24,"select",10),e.NdJ("ngModelChange",function(r){return i.reason=r}),e.TgZ(25,"option",11),e._uU(26,"Select Reason"),e.qZA(),e.TgZ(27,"option",12),e._uU(28,"Calibration"),e.qZA(),e.TgZ(29,"option",13),e._uU(30,"Mechanical"),e.qZA(),e.TgZ(31,"option",14),e._uU(32,"Electrical"),e.qZA(),e.TgZ(33,"option",15),e._uU(34,"Others"),e.qZA()()(),e.TgZ(35,"div",6)(36,"label",7),e._uU(37,"Description:"),e.qZA(),e.TgZ(38,"textarea",16),e.NdJ("ngModelChange",function(r){return i.remark=r}),e.qZA()()()(),e.TgZ(39,"div",17)(40,"div",18)(41,"button",19),e.NdJ("click",function(){return i.selectDataAndClose()}),e._UZ(42,"i",20),e._uU(43),e.qZA()(),e.TgZ(44,"div",18)(45,"button",21),e.NdJ("click",function(){return i.closeModal()}),e._UZ(46,"i",22),e._uU(47," Cancel "),e.qZA()()()()),2&s&&(e.xp6(12),e.Q6J("value",i.inputData.projectId),e.xp6(4),e.Q6J("value",i.inputData.testId),e.xp6(4),e.Q6J("ngModel",i.currrentDate),e.xp6(4),e.Q6J("ngModel",i.reason),e.xp6(14),e.Q6J("ngModel",i.remark),e.xp6(5),e.hij(" ","add"===i.inputData.mode?"Add":"Update"," "))},dependencies:[c.ez,m.m,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.F]})}return n})()},814:(M,v,l)=>{l.d(v,{_:()=>n});var c=l(6814),m=l(7818),e=l(9468),h=l(5766),_=l(3946),g=l(589),u=l(7911),p=l(95);let n=(()=>{class d{constructor(s,i,t,r){this.navigationService=s,this.activeModal=i,this.projectService=t,this.toastService=r,this.remark=""}ngOnInit(){console.log(this.inputData),this.inputData.remark&&(this.remark=this.inputData.remark)}createNote(){const s=new Date;this.projectService.createNote(this.inputData.projectId,this.inputData.testId,this.remark,s.toLocaleString(),s.toLocaleString()).subscribe(i=>{console.log(i),this.toastService.show(200===i.Status?{template:"User note inserted!!",classname:"bg-success",delay:3e3}:{template:"Something went wrong, Please try again",classname:"bg-danger",delay:3e3})})}createFav(){this.projectService.createFav(this.inputData.projectId,this.inputData.testId,this.remark,new Date).subscribe(i=>{console.log(i),200===i.Status?(this.navigationService.notifyNavbarFunction(),this.toastService.show({template:"Favorites remark inserted!!",classname:"bg-success",delay:3e3})):this.toastService.show({template:"Something went wrong, Please try again",classname:"bg-danger",delay:3e3})})}updateNote(){this.projectService.updateUserNote(this.inputData.nid,this.remark).subscribe(s=>{console.log(s),this.toastService.show(200===s.Status?{template:"User note updated!!",classname:"bg-success",delay:3e3}:{template:"Something went wrong, Please try again",classname:"bg-danger",delay:3e3})})}selectDataAndClose(){"favourite"===this.inputData.title.toLowerCase()?"add"==this.inputData.mode&&this.createFav():"add"==this.inputData.mode?this.createNote():this.updateNote(),console.log("here"),this.activeModal.close({isSearch:!0,data:"successs"})}closeModal(){this.activeModal.dismiss({isSearch:!1})}static#e=this.\u0275fac=function(i){return new(i||d)(e.Y36(h.f),e.Y36(_.Kz),e.Y36(g.Y),e.Y36(u.k))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-project-note-fav-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[e.jDz],decls:30,vars:5,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"form-group"],["for",""],["type","text","disabled","",1,"form-control",3,"value"],["name","remark",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2","px-0"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],[1,"col-xl-2","col-md-2"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"h6",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return t.closeModal()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"form")(9,"div",6)(10,"label",7),e._uU(11,"Project ID:"),e.qZA(),e._UZ(12,"input",8),e.qZA(),e.TgZ(13,"div",6)(14,"label",7),e._uU(15,"Test ID:"),e.qZA(),e._UZ(16,"input",8),e.qZA(),e.TgZ(17,"div",6)(18,"label",7),e._uU(19,"Remarks:"),e.qZA(),e.TgZ(20,"textarea",9),e.NdJ("ngModelChange",function(a){return t.remark=a}),e.qZA()()()(),e.TgZ(21,"div",10)(22,"div",11)(23,"button",12),e.NdJ("click",function(){return t.selectDataAndClose()}),e._UZ(24,"i",13),e._uU(25),e.qZA()(),e.TgZ(26,"div",14)(27,"button",15),e.NdJ("click",function(){return t.closeModal()}),e._UZ(28,"i",16),e._uU(29," Cancel "),e.qZA()()()()),2&i&&(e.xp6(2),e.Oqu(t.inputData.title),e.xp6(10),e.Q6J("value",t.inputData.projectId),e.xp6(4),e.Q6J("value",t.inputData.testId),e.xp6(4),e.Q6J("ngModel",t.remark),e.xp6(5),e.hij(" ","add"===t.inputData.mode?"Add":"Update"," "))},dependencies:[c.ez,m.m,p._Y,p.Fj,p.JJ,p.JL,p.On,p.F]})}return d})()},239:(M,v,l)=>{l.d(v,{A:()=>p});var c=l(6814),m=l(7818),e=l(9468),h=l(3946),_=l(589),g=l(7911),u=l(95);let p=(()=>{class n{constructor(o,s,i){this.activeModal=o,this.projectService=s,this.toastService=i,this.remark=""}ngOnInit(){console.log(this.inputData)}selectDataAndClose(){console.log(this.inputData,"inpurt data"),this.remark?this.activeModal.close({isSearch:!0,data:"successs"}):this.toastService.show({template:"Please enter the reason",classname:"bg-danger",delay:3e3})}stopRemote(){const o=new Date,s=(0,c.p6)(o,"YYYY-MM-dd HH:mm:ss","en_US");this.projectService.getUpdatePanelStatus(this.inputData.group,!1,s,this.remark,this.inputData.projectId,this.inputData.testId).subscribe(i=>{localStorage.setItem("data",JSON.stringify({group:this.inputData.group,date:o})),this.toastService.show({template:"Please wait while we update your command",classname:"bg-info",delay:3e3}),this.closeModal()})}closeModal(){this.activeModal.dismiss({isSearch:!1})}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(h.Kz),e.Y36(_.Y),e.Y36(g.k))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-remote-stop-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[e.jDz],decls:22,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"form-group"],["for",""],["name","remark",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"h6",1),e._uU(2,"Remote Stop"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.closeModal()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"form")(9,"div",6)(10,"label",7),e._uU(11,"Remarks:"),e.qZA(),e.TgZ(12,"textarea",8),e.NdJ("ngModelChange",function(r){return i.remark=r}),e.qZA()()()(),e.TgZ(13,"div",9)(14,"div",10)(15,"button",11),e.NdJ("click",function(){return i.stopRemote()}),e._UZ(16,"i",12),e._uU(17," Submit "),e.qZA()(),e.TgZ(18,"div",10)(19,"button",13),e.NdJ("click",function(){return i.closeModal()}),e._UZ(20,"i",14),e._uU(21," Cancel "),e.qZA()()()()),2&s&&(e.xp6(12),e.Q6J("ngModel",i.remark))},dependencies:[c.ez,m.m,u._Y,u.Fj,u.JJ,u.JL,u.On,u.F]})}return n})()}}]);