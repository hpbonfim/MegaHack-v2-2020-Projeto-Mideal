(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ZW5V:function(t,e,n){"use strict";n.r(e),n.d(e,"UserConfirmationModule",(function(){return R}));var o=n("ofXK"),i=n("3Pt+"),r=n("YUcS"),a=n("kmnG"),c=n("qFsG"),s=n("bTqV"),b=n("6NWb"),m=n("tmjD"),u=n("tyNb"),f=n("mrSG"),d={prefix:"fas",iconName:"paper-plane",icon:[512,512,[],"f1d8","M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"]},p=n("PSD3"),l=n.n(p),g=n("cYo0"),h=n("MvzY"),v=n("fXoL"),x=n("mavo"),C=n("pQon"),S=n("FXLl"),y=n("tk/3");let M=(()=>{class t extends S.a{constructor(t){super(t),this.API_URL="function/verify"}}return t.\u0275fac=function(e){return new(e||t)(v.Vb(y.b))},t.\u0275prov=v.Ib({token:t,factory:t.\u0275fac}),t})();var P=n("XiUz");const O=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.router=t,this.userDataService=e,this.userConfirmationSmsService=n,this.userConfirmationCodeService=o,this.faPaperPlane=d,this.handleSubmit=()=>Object(f.a)(this,void 0,void 0,(function*(){const{_id:t}=this.user;if(Object(g.a)(this.form),this.form.invalid)return;const e=Object.assign(Object.assign({},this.form.value),{_id:t}),{verification:n}=yield this.userConfirmationCodeService.post(e).toPromise();n&&l.a.fire("Sucesso","C\xf3dico validado!","success").then(()=>{this.router.navigate(["/user-menu"])})})),this.handleSendAgain=()=>Object(f.a)(this,void 0,void 0,(function*(){const{_id:t}=this.user;Object(g.a)(this.form),this.form.invalid||(yield this.userConfirmationSmsService.post({_id:t}).toPromise(),l.a.fire("Sucesso","SMS enviado!","success"))})),this.getErrorMessage=t=>Object(h.a)(this.form.get(t))}ngOnInit(){this.phoneNumber=this.userDataService.getPhoneNumber(),this.user=this.userDataService.getUserData(),this.createForm()}createForm(){this.form=new i.d({code:new i.b("",[i.n.required])})}}return t.\u0275fac=function(e){return new(e||t)(v.Mb(u.b),v.Mb(x.a),v.Mb(C.a),v.Mb(M))},t.\u0275cmp=v.Gb({type:t,selectors:[["app-user-confirmation"]],decls:22,vars:7,consts:[[1,"content"],["fxFlex","100","fxLayout","column","fxLayoutAlign","start center",1,"align-center"],["fxLayout","column","fxLayoutAlign","center center",1,"box"],["alt","Logo","src","../../assets/images/mideal-logo-black.png"],[1,"w-100",3,"formGroup"],["fxLayout","column"],[1,"color","accent"],["appearance","outline","color","primary"],["formControlName","code","type","text","ngDefaultControl","","matInput",""],["mat-raised-button","","color","accent",1,"btn-accent",3,"click"],["mat-raised-button","",3,"click"],[3,"icon"]],template:function(t,e){1&t&&(v.Rb(0,"div",0),v.Rb(1,"div",1),v.Rb(2,"div",2),v.Nb(3,"img",3),v.Rb(4,"form",4),v.Rb(5,"div",5),v.Rb(6,"p"),v.Rb(7,"span",6),v.rc(8,"Ol\xe1!"),v.Qb(),v.rc(9),v.cc(10,"mask"),v.Qb(),v.Rb(11,"mat-form-field",7),v.Rb(12,"mat-label"),v.rc(13,"C\xf3digo de confirma\xe7\xe3o"),v.Qb(),v.Nb(14,"input",8),v.Rb(15,"mat-error"),v.rc(16),v.Qb(),v.Qb(),v.Qb(),v.Qb(),v.Rb(17,"button",9),v.Zb("click",(function(){return e.handleSubmit()})),v.rc(18," Continuar "),v.Qb(),v.Rb(19,"button",10),v.Zb("click",(function(){return e.handleSendAgain()})),v.rc(20," Enviar novamente "),v.Nb(21,"fa-icon",11),v.Qb(),v.Qb(),v.Qb(),v.Qb()),2&t&&(v.Bb(4),v.gc("formGroup",e.form),v.Bb(5),v.tc(" enviamos uma mensagem com o c\xf3digo de confirma\xe7\xe3o para o telefone ",v.dc(10,4,e.phoneNumber,"(00) 00009-0000"),", informe o c\xf3digo recebido abaixo para continuar: "),v.Bb(7),v.sc(e.getErrorMessage("code")),v.Bb(5),v.gc("icon",e.faPaperPlane))},directives:[P.a,P.c,P.b,i.o,i.k,i.e,a.b,a.e,i.a,c.a,i.j,i.c,a.a,s.a,b.a],pipes:[m.b],styles:["img[_ngcontent-%COMP%]{max-width:150px}form[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:80px}button[_ngcontent-%COMP%]{margin-bottom:10px}p[_ngcontent-%COMP%]{max-width:300px}.box[_ngcontent-%COMP%]{min-width:300px;padding-top:200px}.content[_ngcontent-%COMP%]{height:100vh}.content-login[_ngcontent-%COMP%]{padding:30px}a[_ngcontent-%COMP%]{margin-top:10px}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=v.Kb({type:t}),t.\u0275inj=v.Jb({factory:function(e){return new(e||t)},imports:[[u.e.forChild(O)],u.e]}),t})(),R=(()=>{class t{}return t.\u0275mod=v.Kb({type:t}),t.\u0275inj=v.Jb({factory:function(e){return new(e||t)},providers:[x.a,C.a,M],imports:[[w,o.b,i.f,i.m,r.a,m.c.forRoot(),b.b,a.d,c.b,s.b]]}),t})()}}]);