"use strict";(self.webpackChunkrosconometro=self.webpackChunkrosconometro||[]).push([[630],{5630:(M,h,g)=>{g.r(h),g.d(h,{GateKeeperModule:()=>y});var u=g(5607),P=g(8583),v=g(2498),l=g(6365),_=g(639);const t=[{path:"",component:l.T,children:[{path:"rosco",data:{role:0},loadChildren:()=>Promise.resolve().then(g.bind(g,5607)).then(m=>m.RosconometroModule)}]}];let C=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=_.oAB({type:m}),m.\u0275inj=_.cJS({imports:[[v.Bz.forChild(t)],v.Bz]}),m})(),y=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=_.oAB({type:m}),m.\u0275inj=_.cJS({imports:[[P.ez,C,u.RosconometroModule],C]}),m})()},5607:(M,h,g)=>{g.r(h),g.d(h,{RosconometroModule:()=>q});var u=g(8583),P=g(9577),v=g(1841),l=g(665),_=g(2498),t=g(639),C=g(5194);function y(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"fieldset",5),t.TgZ(2,"div",6),t.TgZ(3,"h2",7),t._uU(4,"Configuraci\xf3n del Juego"),t.qZA(),t.TgZ(5,"label",8),t._UZ(6,"input",9),t.TgZ(7,"span"),t._uU(8,"Jugador 1 "),t.qZA(),t.TgZ(9,"small",10),t._uU(10,"Campo obligatorio"),t.qZA(),t.qZA(),t.TgZ(11,"label",8),t._UZ(12,"input",11),t.TgZ(13,"span"),t._uU(14,"Jugador 2 "),t.qZA(),t.TgZ(15,"small",10),t._uU(16,"Campo obligatorio"),t.qZA(),t.qZA(),t.TgZ(17,"label",12),t._UZ(18,"input",13),t.TgZ(19,"span"),t._uU(20,"Segundos"),t.qZA(),t.TgZ(21,"small",10),t._uU(22,"Campo obligatorio"),t.qZA(),t.qZA(),t.TgZ(23,"label",12),t._UZ(24,"input",14),t.TgZ(25,"span"),t._uU(26,"Comodines"),t.qZA(),t.TgZ(27,"small",10),t._uU(28,"Campo obligatorio"),t.qZA(),t.qZA(),t._UZ(29,"div",15),t.TgZ(30,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().onStartGame()}),t._uU(31," Comenzar "),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function m(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"div",46),t.NdJ("click",function(){const r=t.CHM(e).index,i=t.oxw().index;return t.oxw(2).onWildCardChange(i,r)}),t._UZ(2,"i",47),t.qZA(),t.qZA()}if(2&a){const e=s.$implicit;t.s9C("formGroupName",s.index),t.xp6(1),t.ekj("used",!e)}}function f(a,s){1&a&&(t.TgZ(0,"label",48),t._uU(1," Juego terminado "),t.qZA())}function p(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"button",61),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2).index;return t.oxw(2).onStartPlay(o)}),t._UZ(1,"i",62),t.qZA()}}function O(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"button",63),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2).index;return t.oxw(2).onStartPlay(o)}),t._UZ(1,"i",57),t.qZA()}}function x(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"label",49),t._uU(2),t.qZA(),t.TgZ(3,"div",50),t.TgZ(4,"div",51),t.YNc(5,p,2,0,"button",52),t.YNc(6,O,2,0,"button",53),t.TgZ(7,"button",54),t.NdJ("click",function(){const r=t.CHM(e).index,i=t.oxw().index;return t.oxw(2).onAnswer(i,r)}),t._UZ(8,"i",55),t.qZA(),t.TgZ(9,"button",56),t.NdJ("click",function(){const r=t.CHM(e).index,i=t.oxw().index;return t.oxw(2).onNextTime(i,r)}),t._UZ(10,"i",57),t.qZA(),t.TgZ(11,"button",58),t.NdJ("click",function(){const r=t.CHM(e).index,i=t.oxw().index;return t.oxw(2).onFail(i,r)}),t._UZ(12,"i",59),t.qZA(),t.TgZ(13,"button",60),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().index;return t.oxw(2).onNextPlayer(o)}),t._UZ(14,"i",27),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=s.$implicit,n=s.index,o=t.oxw().$implicit;t.ekj("hidden",1!==e.get("status").value),t.s9C("formGroupName",n),t.xp6(2),t.hij(" ",e.get("letter").value," "),t.xp6(3),t.Q6J("ngIf",o.get("isTimerPaused").value),t.xp6(1),t.Q6J("ngIf",!o.get("isTimerPaused").value)}}function w(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"li",64),t.NdJ("click",function(){const r=t.CHM(e).index,i=t.oxw().index;return t.oxw(2).onChangeAnswer(i,r)}),t._uU(1),t.qZA()}if(2&a){const e=s.$implicit;t.ekj("item-active",1===e.get("status").value)("item-success",2===e.get("status").value)("item-failure",3===e.get("status").value)("item-nexttime",4===e.get("status").value),t.xp6(1),t.hij(" ",e.get("letter").value," ")}}function b(a,s){if(1&a){const e=t.EpF();t.ynx(0,19),t.TgZ(1,"fieldset",20),t.TgZ(2,"small",21),t._uU(3),t.qZA(),t.TgZ(4,"h4",22),t._uU(5),t.qZA(),t.TgZ(6,"label",23),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"label",24),t._uU(10),t.qZA(),t.TgZ(11,"label",25),t._uU(12),t.qZA(),t.TgZ(13,"button",26),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw(2).onNextPlayer(r)}),t._UZ(14,"i",27),t.qZA(),t.qZA(),t.TgZ(15,"div",28),t.YNc(16,m,3,3,"div",18),t.qZA(),t.TgZ(17,"div",29),t.TgZ(18,"div",30),t.TgZ(19,"h3"),t._uU(20,"Jugando"),t.qZA(),t._UZ(21,"div",31),t.TgZ(22,"h1"),t._uU(23),t.qZA(),t.qZA(),t.YNc(24,f,2,0,"label",32),t.TgZ(25,"div",33),t.YNc(26,x,15,6,"div",34),t.qZA(),t.TgZ(27,"div",35),t.TgZ(28,"ul",36),t.YNc(29,w,2,9,"li",37),t.qZA(),t.TgZ(30,"ul",38),t.TgZ(31,"li",39),t.TgZ(32,"button",40),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw(2).onReduceTime(r)}),t._UZ(33,"i",41),t.qZA(),t._UZ(34,"div",42),t.TgZ(35,"button",40),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw(2).onAddTime(r)}),t._UZ(36,"i",43),t.qZA(),t.qZA(),t.TgZ(37,"li",44),t._uU(38),t.ALo(39,"number"),t.qZA(),t.TgZ(40,"li",45),t.TgZ(41,"div",24),t._uU(42),t.qZA(),t.TgZ(43,"div",25),t._uU(44),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&a){const e=s.$implicit,n=s.index,o=t.oxw(2);t.s9C("formGroupName",n),t.xp6(1),t.ekj("hidden",!1!==e.get("active").value),t.xp6(2),t.hij("En espera: ",e.get("name").value,""),t.xp6(2),t.hij(" En espera: ",e.get("name").value," "),t.xp6(2),t.hij(" ",t.xi3(8,20,e.get("playTime").value,"1.0-0")," "),t.xp6(3),t.hij(" ",e.get("correctAnswers").value," "),t.xp6(2),t.hij(" ",e.get("failAnswers").value," "),t.xp6(3),t.ekj("hidden",!1===e.get("active").value),t.xp6(1),t.Q6J("ngForOf",e.get("wildcards").value),t.xp6(1),t.ekj("hidden",!1===e.get("active").value),t.xp6(6),t.Oqu(e.get("name").value),t.xp6(1),t.Q6J("ngIf",!0===e.get("gameOver").value),t.xp6(2),t.Q6J("ngForOf",o.getPlayerItems(e).controls),t.xp6(3),t.Q6J("ngForOf",o.getPlayerItems(e).controls),t.xp6(9),t.Oqu(t.xi3(39,23,e.get("playTime").value,"1.0-0")),t.xp6(4),t.hij(" ",e.get("correctAnswers").value," "),t.xp6(2),t.hij(" ",e.get("failAnswers").value," ")}}function Z(a,s){if(1&a&&(t.TgZ(0,"div",17),t.YNc(1,b,45,26,"ng-container",18),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.players.controls)}}class T{constructor(){this.letterCount=25,this.playerCount=1,this.players=[],this.wildcard=0}}class A{constructor(){this.order=1,this.playerItems=[],this.name="",this.playTime=150,this.correctAnswers=0}}class k{constructor(){this.letter=""}}var c=(()=>{return(a=c||(c={}))[a.Pending=0]="Pending",a[a.Active=1]="Active",a[a.Correct=2]="Correct",a[a.Error=3]="Error",a[a.NextTime=4]="NextTime",c;var a})();const I=_.Bz.forChild([{path:"",component:(()=>{class a{constructor(e,n,o){this._formBuilder=e,this.confluxAuth=n,this.router=o,this.availableLetter=["A","B","C","D","E","F","G","H","I","J","L","M","N","\xd1","O","P","Q","R","S","T","U","V","X","Y","Z"],this.startedGame=!1,this.game=this.getNewGame(0),this.game.playerCount=2,console.log("Entr\xe9 al constructor")}title(e){throw new Error("Method not implemented.")}ngOnInit(){this.InitializeForm()}InitializeForm(){this.searchForm=this._formBuilder.group({player1:["Jugador 1",[l.kI.required]],player2:["Jugador 2",[l.kI.required]],seconds:[140,[l.kI.required]],playerCount:[this.game.playerCount,[l.kI.required]],wildcard:[2,[l.kI.required]],letterContains:this._formBuilder.array([]),players:this._formBuilder.array([])})}onStartGame(){this.game.players=[];for(let e=0;e<this.searchForm.get("playerCount").value;e++){let n=new A;n.name=0===e?this.searchForm.get("player1").value:this.searchForm.get("player2").value,n.order=e+1,n.playTime=this.searchForm.get("seconds").value,n.playerItems=[],n.correctAnswers=0,this.availableLetter.forEach(o=>{let r=new k;r.letter=o,n.playerItems.push(r)}),this.game.players.push(n)}this.addPlayers(this.game.players),this.startedGame=!0}get players(){return this.searchForm.get("players")}addPlayers(e){e.forEach(n=>{const o=this._formBuilder.group({order:new l.NI(n.order,l.kI.required),name:new l.NI(n.name,l.kI.required),active:new l.NI(1==n.order),playTime:new l.NI(n.playTime),correctAnswers:new l.NI(n.correctAnswers),failAnswers:new l.NI(0),isTimerPaused:new l.NI(!0),gameOver:new l.NI(!1),playerItems:this._formBuilder.array([]),wildcards:this._formBuilder.array([])});let r=1;n.playerItems.sort((i,d)=>i.letter.localeCompare(d.letter)).forEach(i=>{const d=this._formBuilder.group({letter:new l.NI(i.letter),status:new l.NI(1===r?c.Active:c.Pending),order:new l.NI(r)});r++,o.get("playerItems").push(d)});for(let i=0;i<this.searchForm.get("wildcard").value;i++){const d=new l.NI(!0);o.get("wildcards").push(d)}this.players.push(o)}),console.log("this.players:",this.players)}deleteAllPlayers(){for(let e=this.players.length-1;e>=0;e--)this.deletePlayer(e)}deletePlayer(e){this.players.removeAt(e)}getPlayerItems(e){return e.get("playerItems")}sortBy(e,n){return e.value.sort((o,r)=>o[n]>r[n]?1:o[n]===r[n]?0:-1)}onStartPlay(e){let n=this.players.at(e);n.get("isTimerPaused").setValue(!n.get("isTimerPaused").value),clearInterval(this.interval),this.interval=setInterval(()=>{this.tick(e)},200)}onReduceTime(e){let n=this.players.at(e),o=n.get("playTime").value;o--,n.get("playTime").setValue(o)}onAddTime(e){let n=this.players.at(e),o=n.get("playTime").value;o++,n.get("playTime").setValue(o)}tick(e){let n=this.players.at(e);if(!n.get("isTimerPaused").value){let o=n.get("playTime").value;o-=.2,o>=0?n.get("playTime").setValue(o):n.get("isTimerPaused").setValue(!0)}}onNextPlayer(e){for(let n=0;n<this.players.length;n++){let o=this.players.at(n);o.get("active").setValue(n!==e),o.get("isTimerPaused").setValue(!0)}}onWildCardChange(e,n){let o=this.players.at(e);o.get("wildcards").at(n).setValue(!o.get("wildcards").at(n).value)}onNextTime(e,n){let o=this.players.at(e),r=this.getPlayerItems(o).at(n);this.recountAnswers(e),o.get("correctAnswers").value+o.get("failAnswers").value>=24&&(this.getPlayerItems(o).at(n).get("status").value===c.Active||this.getPlayerItems(o).at(n).get("status").value===c.Pending||this.getPlayerItems(o).at(n).get("status").value===c.NextTime)?this.getPlayerItems(o).at(n).get("status").setValue(c.Active):r.get("status").setValue(c.NextTime);let i=this.foundNextActiveLetter(n,o);void 0!==i&&i.get("status").setValue(c.Active),this.recountAnswers(e),o.get("isTimerPaused").setValue(!0)}onAnswer(e,n){let o=this.players.at(e);this.getPlayerItems(o).at(n).get("status").setValue(c.Correct);let i=this.foundNextActiveLetter(n,o);void 0!==i&&i.get("status").setValue(c.Active),this.recountAnswers(e)}onChangeAnswer(e,n){let o=this.players.at(e);this.recountAnswers(e),o.get("correctAnswers").value+o.get("failAnswers").value>=24&&(this.getPlayerItems(o).at(n).get("status").value===c.Active||this.getPlayerItems(o).at(n).get("status").value===c.Pending||this.getPlayerItems(o).at(n).get("status").value===c.NextTime)&&this.getPlayerItems(o).at(n).get("status").setValue(c.NextTime);for(let d=0;d<this.getPlayerItems(o).value.length;d++)console.log("i:",this.getPlayerItems(o).at(d).value),this.getPlayerItems(o).at(d).get("status").value===c.Active&&this.getPlayerItems(o).at(d).get("status").setValue(c.Pending);let r=this.getPlayerItems(o).at(n);r.get("status").value===c.Active||r.get("status").value===c.Pending?r.get("status").setValue(c.NextTime):r.get("status").value===c.NextTime?r.get("status").setValue(c.Correct):r.get("status").value===c.Correct?r.get("status").setValue(c.Error):r.get("status").value===c.Error&&r.get("status").setValue(c.Pending);let i=this.foundNextActiveLetter(-1,o);void 0!==i&&i.get("status").setValue(c.Active),this.recountAnswers(e)}onFail(e,n){let o=this.players.at(e);this.getPlayerItems(o).at(n).get("status").setValue(c.Error);let i=this.foundNextActiveLetter(n,o);void 0!==i&&i.get("status").setValue(c.Active),this.recountAnswers(e),o.get("isTimerPaused").setValue(!0)}recountAnswers(e){let n=this.players.at(e),o=0,r=0;for(let i=0;i<this.getPlayerItems(n).length;i++){let d=this.getPlayerItems(n).at(i);d.get("status").value===c.Correct&&o++,d.get("status").value===c.Error&&r++}n.get("correctAnswers").setValue(o),n.get("failAnswers").setValue(r),n.get("gameOver").setValue(r+o==25)}foundNextActiveLetter(e,n){let r,o=!1;for(let i=e+1;i<this.game.letterCount;i++)!o&&this.getPlayerItems(n).at(i).get("status").value===c.Pending&&(r=this.getPlayerItems(n).at(i),o=!0);if(!o){for(let i=0;i<this.game.letterCount;i++)this.getPlayerItems(n).at(i).get("status").value===c.NextTime&&this.getPlayerItems(n).at(i).get("status").setValue(c.Pending);for(let i=0;i<e;i++)!o&&this.getPlayerItems(n).at(i).get("status").value===c.Pending&&(r=this.getPlayerItems(n).at(i),o=!0)}return r}getNewGame(e){var n=new T;return n.players=[],n.letterCount=25,n.playerCount=1,n}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.qu),t.Y36(C.z),t.Y36(_.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-rosconometro"]],decls:4,vars:3,consts:[[1,"container-fluid",2,"display","contents"],["name","searchForm","novalidate","",1,"needs-validation",2,"display","flex","flex","1 1 auto","overflow-y","hidden","justify-content","center",3,"formGroup"],["class","row text-center","style","justify-content: center; align-content: center; ",4,"ngIf"],["formArrayName","players","style"," flex: 1 1;",4,"ngIf"],[1,"row","text-center",2,"justify-content","center","align-content","center"],[1,"form-group","col-6",2,"background-color","white"],[1,"row",2,"border-radius","15px","align-items","center"],[1,"col-form-label"],[1,"form-group","has-float-label"],["type","text","formControlName","player1",1,"form-control"],[1,"invalid-feedback"],["type","text","formControlName","player2",1,"form-control"],[1,"form-group","has-float-label","col-md-6"],["type","number","formControlName","seconds",1,"form-control"],["type","number","formControlName","wildcard",1,"form-control"],[1,"col-md-2"],[1,"btn","btn-primary","col-md-8",3,"click"],["formArrayName","players",2,"flex","1 1"],[3,"formGroupName",4,"ngFor","ngForOf"],[3,"formGroupName"],[1,"otherPlayer"],[2,"display","none"],[1,"text-center"],[1,"timer"],[1,"corrects"],[1,"fails"],[1,"btn","btn-xs","btn-primary","m-0","btn-reload",2,"display","none",3,"click"],[1,"fas","fa-sync"],["formArrayName","wildcards",1,"wildcard"],[2,"height","100%"],[1,"player-name-text"],[1,"w100"],["class","col-10 game-over-text circle1",4,"ngIf"],["formArrayName","playerItems",1,""],[3,"formGroupName","hidden",4,"ngFor","ngForOf"],[1,"circle-container"],[1,"circle"],["class","item",3,"item-active","item-success","item-failure","item-nexttime","click",4,"ngFor","ngForOf"],[1,"scoreboard"],["id","js--minus-timer","href","",1,"adjust-timer","row"],[1,"btn","btn-xs","btn-outline-primary","col-3",3,"click"],[1,"fas","fa-chevron-left"],[1,"col-6"],[1,"fas","fa-chevron-right"],["id","js--timer","href","",1,"timer"],["id","js--score","href","",1,"score"],[1,"item-wildcard",3,"click"],[1,"far","fa-smile"],[1,"col-10","game-over-text","circle1"],[1,"col-10","extrasize","circle1"],[1,"manager-box"],[1,"row"],["class","btn btn-md  btn-primary col-12 m-0",3,"click",4,"ngIf"],["class","btn btn-md  btn-outline-danger col-12 m-0",3,"click",4,"ngIf"],[1,"btn","btn-md","btn-success","col-4",3,"click"],[1,"fas","fa-check"],[1,"btn","btn-md","btn-warning","col-4",3,"click"],[1,"fas","fa-pause"],[1,"btn","btn-md","btn-danger","col-4",3,"click"],[1,"fas","fa-times"],[1,"btn","btn-xs","btn-primary","m-0","btn-reload",3,"click"],[1,"btn","btn-md","btn-primary","col-12","m-0",3,"click"],[1,"fas","fa-play"],[1,"btn","btn-md","btn-outline-danger","col-12","m-0",3,"click"],[1,"item",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.YNc(2,y,32,0,"div",2),t.YNc(3,Z,2,1,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.searchForm),t.xp6(1),t.Q6J("ngIf",!n.startedGame),t.xp6(1),t.Q6J("ngIf",n.startedGame))},directives:[l._Y,l.JL,l.sg,u.O5,l.Fj,l.JJ,l.u,l.wV,l.CE,u.sg,l.x0],pipes:[u.JJ],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;padding:1vh 1vh 1vw 1vw}span[_ngcontent-%COMP%]{margin-left:15px}.search-group[_ngcontent-%COMP%]{height:auto}.form-check-input[_ngcontent-%COMP%]{margin-left:auto}.form-check-label[_ngcontent-%COMP%]{margin-left:2.5rem}button[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}.letter-rounded[_ngcontent-%COMP%]{border-radius:50%;background-color:gray;height:2rem;width:2rem}.letter-rounded.active[_ngcontent-%COMP%]{background-color:#00f}.definition[_ngcontent-%COMP%]{position:relative;width:100%;top:3rem;text-transform:uppercase;text-align:center;height:8rem}.contain-box[_ngcontent-%COMP%]{float:left;margin:20px;position:absolute;top:-21.3rem;left:calc(50% - 4.8rem);background-color:#5391fa;color:#fff;font-size:2rem}.answer-box[_ngcontent-%COMP%]{width:40%;top:5rem;left:10%;display:block;position:relative}.answer-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:25%}.player-title[_ngcontent-%COMP%]{display:none}.hidden[_ngcontent-%COMP%]{display:none}.extrasize[_ngcontent-%COMP%]{font-size:15vh;text-align:center}.game-over-text[_ngcontent-%COMP%]{font-size:4vh;text-align:center;display:flex;flex-wrap:wrap;align-content:center;color:#b9121b}.capital-letter[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}.header-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#5c4220;text-transform:uppercase;text-decoration:underline;font-weight:bold}.form-group-inline[_ngcontent-%COMP%]{display:inline-block}.player-name-text[_ngcontent-%COMP%]{text-transform:uppercase;background-color:#fff;display:inline-block;text-align:center;border-radius:15px;border-style:solid;border-width:.5px;width:28.8vh;width:15vw}.player-name-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.player-name-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:auto}.circle-container[_ngcontent-%COMP%]{width:100%}@media (min-width: 54.75em){.circle-container[_ngcontent-%COMP%]{width:100%;height:100%}}.circle[_ngcontent-%COMP%]{position:relative;width:80vh;height:80vh;border-radius:50%;padding:0;list-style:none;font-size:2vw;position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;position:absolute;top:50%;left:50%;width:8vh;height:8vh;margin:-4vh}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(1){transform:rotate(270deg) translate(40vh) rotate(-270deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(2){transform:rotate(284.4deg) translate(40vh) rotate(-284.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(3){transform:rotate(298.8deg) translate(40vh) rotate(-298.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(4){transform:rotate(313.2deg) translate(40vh) rotate(-313.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(5){transform:rotate(327.6deg) translate(40vh) rotate(-327.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(6){transform:rotate(342deg) translate(40vh) rotate(-342deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(7){transform:rotate(356.4deg) translate(40vh) rotate(-356.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(8){transform:rotate(370.8deg) translate(40vh) rotate(-370.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(9){transform:rotate(385.2deg) translate(40vh) rotate(-385.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(10){transform:rotate(399.6deg) translate(40vh) rotate(-399.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(11){transform:rotate(414deg) translate(40vh) rotate(-414deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(12){transform:rotate(428.4deg) translate(40vh) rotate(-428.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(13){transform:rotate(442.8deg) translate(40vh) rotate(-442.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(14){transform:rotate(457.2deg) translate(40vh) rotate(-457.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(15){transform:rotate(471.6deg) translate(40vh) rotate(-471.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(16){transform:rotate(486deg) translate(40vh) rotate(-486deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(17){transform:rotate(500.4deg) translate(40vh) rotate(-500.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(18){transform:rotate(514.8deg) translate(40vh) rotate(-514.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(19){transform:rotate(529.2deg) translate(40vh) rotate(-529.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(20){transform:rotate(543.6deg) translate(40vh) rotate(-543.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(21){transform:rotate(558deg) translate(40vh) rotate(-558deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(22){transform:rotate(572.4deg) translate(40vh) rotate(-572.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(23){transform:rotate(586.8deg) translate(40vh) rotate(-586.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(24){transform:rotate(601.2deg) translate(40vh) rotate(-601.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(25){transform:rotate(615.6deg) translate(40vh) rotate(-615.6deg)}@media only screen and (min-width: 320px) and (max-width: 480px){.circle[_ngcontent-%COMP%]{position:relative;width:70vw;height:70vw;border-radius:50%;padding:0;list-style:none;font-size:2vw;left:50%;transform:translate(-50%);margin-top:5vh}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;position:absolute;top:50%;left:50%;width:8vh;height:8vh;margin:-4vh}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(1){transform:rotate(270deg) translate(35vw) rotate(-270deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(2){transform:rotate(284.4deg) translate(35vw) rotate(-284.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(3){transform:rotate(298.8deg) translate(35vw) rotate(-298.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(4){transform:rotate(313.2deg) translate(35vw) rotate(-313.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(5){transform:rotate(327.6deg) translate(35vw) rotate(-327.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(6){transform:rotate(342deg) translate(35vw) rotate(-342deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(7){transform:rotate(356.4deg) translate(35vw) rotate(-356.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(8){transform:rotate(370.8deg) translate(35vw) rotate(-370.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(9){transform:rotate(385.2deg) translate(35vw) rotate(-385.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(10){transform:rotate(399.6deg) translate(35vw) rotate(-399.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(11){transform:rotate(414deg) translate(35vw) rotate(-414deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(12){transform:rotate(428.4deg) translate(35vw) rotate(-428.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(13){transform:rotate(442.8deg) translate(35vw) rotate(-442.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(14){transform:rotate(457.2deg) translate(35vw) rotate(-457.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(15){transform:rotate(471.6deg) translate(35vw) rotate(-471.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(16){transform:rotate(486deg) translate(35vw) rotate(-486deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(17){transform:rotate(500.4deg) translate(35vw) rotate(-500.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(18){transform:rotate(514.8deg) translate(35vw) rotate(-514.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(19){transform:rotate(529.2deg) translate(35vw) rotate(-529.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(20){transform:rotate(543.6deg) translate(35vw) rotate(-543.6deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(21){transform:rotate(558deg) translate(35vw) rotate(-558deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(22){transform:rotate(572.4deg) translate(35vw) rotate(-572.4deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(23){transform:rotate(586.8deg) translate(35vw) rotate(-586.8deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(24){transform:rotate(601.2deg) translate(35vw) rotate(-601.2deg)}.circle[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-of-type(25){transform:rotate(615.6deg) translate(35vw) rotate(-615.6deg)}}.circle[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:block;width:8vh;height:8vh;transition:all .3s ease-in-out;border:2px solid #fff;border-radius:50%;background-image:radial-gradient(circle,#0074d9,#004b8d);color:#fff;line-height:8vh;text-align:center;text-decoration:none;cursor:default}@media only screen and (min-width: 320px) and (max-width: 480px){.circle[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:8.75vw;height:8.75vw;line-height:8.75vw}}.circle[_ngcontent-%COMP%]   .item-success[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#9ee379,#4caf50)}.circle[_ngcontent-%COMP%]   .item-failure[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#b9121b,#8e001c)}.circle[_ngcontent-%COMP%]   .item-nexttime[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#ffb03b,#b64926)}.circle[_ngcontent-%COMP%]   .item-active[_ngcontent-%COMP%]{font-weight:bolder;border-width:4px;border-style:double}@keyframes blinkingText{0%{background-image:radial-gradient(circle,#5391fa,#004b8d);color:#000}33%{background-image:radial-gradient(circle,#0074d9,#004b8d)}67%{background-image:radial-gradient(circle,#5391fa,#004b8d);color:#000}to{background-image:radial-gradient(circle,#0074d9,#004b8d)}}.circle1[_ngcontent-%COMP%]{float:left;width:20vh;height:20vh;shape-outside:circle();clip-path:circle();position:absolute;left:calc(50% - 10vh);top:calc(50% - 10vh)}@media only screen and (min-width: 320px) and (max-width: 480px){.circle1[_ngcontent-%COMP%]{top:26.6666666667vh;left:50%;transform:translate(-50%)}}.scoreboard[_ngcontent-%COMP%]{list-style:none;position:absolute;left:2vw;bottom:2vh;display:flex;flex-direction:column;align-items:center}.scoreboard[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{display:block;width:14.4vh;height:14.4vh;border:2px solid #fff;border-radius:50%;background-image:radial-gradient(circle,#0074d9,#004b8d);color:#fff;font-weight:900;line-height:14.4vh;text-align:center;text-decoration:none;cursor:default;font-size:4vh}.scoreboard[_ngcontent-%COMP%]   .adjust-timer[_ngcontent-%COMP%]{width:28.8vh;height:7.2vh;position:absolute;top:20%}.scoreboard[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]{display:inherit;width:18vh;height:10vh;margin-top:.5vh;border:2px solid #fff;color:#fff;font-weight:900;line-height:10vh;text-align:center;text-decoration:none;cursor:default;font-size:5.5555555556vh}.scoreboard[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .corrects[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#9ee379,#4caf50);width:60%;color:#000}.scoreboard[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .fails[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#b9121b,#8e001c);width:40%}.manager-box[_ngcontent-%COMP%]{position:absolute;top:2vh;right:4vw}.otherPlayer[_ngcontent-%COMP%]{position:absolute;top:5em;text-align:center;color:#fff;border-style:solid!important;border-radius:15px;width:15vw;padding:0 2em}.otherPlayer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .otherPlayer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .otherPlayer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#000;margin-bottom:0}.otherPlayer[_ngcontent-%COMP%]   .btn-reload[_ngcontent-%COMP%]{width:100%}.otherPlayer[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#0074d9,#004b8d);width:33%}.otherPlayer[_ngcontent-%COMP%]   .corrects[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#9ee379,#4caf50);width:33%;color:#000}.otherPlayer[_ngcontent-%COMP%]   .fails[_ngcontent-%COMP%]{background-image:radial-gradient(circle,#b9121b,#8e001c);width:33%}.wildcard[_ngcontent-%COMP%]{position:absolute;text-align:center;width:25vw;display:flex;flex-direction:row-reverse;bottom:4vh}.wildcard[_ngcontent-%COMP%]   .item-wildcard[_ngcontent-%COMP%]{border-style:solid;width:8vh;height:8vh;line-height:8vh;border:2px solid #fff;border-radius:50%;background-image:radial-gradient(circle,magenta,purple);color:#ff0}.wildcard[_ngcontent-%COMP%]   .used[_ngcontent-%COMP%]{background-image:radial-gradient(circle,lightgrey,grey);color:#a9a9a9}@media only screen and (min-width: 320px) and (max-width: 480px){.wildcard[_ngcontent-%COMP%]{right:2vw;width:45vw}.player-name-text[_ngcontent-%COMP%]{width:40vw}.manager-box[_ngcontent-%COMP%]{width:15vw;height:5vh}.otherPlayer[_ngcontent-%COMP%]{width:40vw;left:40vw;top:1vh}}@media only screen and (min-width: 481px) and (max-width: 720px){.player-name-text[_ngcontent-%COMP%]{width:25vw}.manager-box[_ngcontent-%COMP%]{width:18vw;height:5vh}.otherPlayer[_ngcontent-%COMP%]{padding:0 1vw}}@media only screen and (min-width: 481px){.wildcard[_ngcontent-%COMP%]{right:3vw;margin-left:10vh}}"]}),a})()}]);let q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[u.ez,v.JF,u.ez,l.u5,l.UX,P.uH,I]]}),a})()}}]);