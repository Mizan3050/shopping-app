(self.webpackChunkshopping_app=self.webpackChunkshopping_app||[]).push([[987],{7987:(t,r,a)=>{"use strict";a.r(r),a.d(r,{ProductModule:()=>G});var e=a(1116),i=a(3337),n=a(4156),o=a(5416),c=a(9146),d=a(5366),s=a(4900),l=a(4369);let p=(()=>{class t{constructor(t,r){this.route=t,this.cartRepositoryService=r,this.listOfProducts=c.G,this.destroyed$=new n.t(1)}ngOnInit(){this.route.params.pipe((0,o.R)(this.destroyed$)).subscribe(t=>{const r=null==t?void 0:t.productId;this.productDetail=this.listOfProducts.products.find(t=>t.id===r)})}addToCart(t){this.cartRepositoryService.addProductToCart(t)}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(i.gz),d.Y36(s.e))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-product-detail"]],decls:14,vars:5,consts:[[1,"detail"],[1,"product-image"],[3,"src"],[1,"description"],[1,"desc-text"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,r){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d._UZ(2,"img",2),d.qZA(),d.TgZ(3,"div",3),d.TgZ(4,"p"),d._uU(5),d.qZA(),d.TgZ(6,"p"),d._uU(7),d.qZA(),d.TgZ(8,"p"),d._uU(9),d.qZA(),d.TgZ(10,"p",4),d._uU(11),d.qZA(),d.TgZ(12,"button",5),d.NdJ("click",function(){return r.addToCart(null==r.productDetail?null:r.productDetail.id)}),d._uU(13," Add to Cart "),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(2),d.Q6J("src",null==r.productDetail?null:r.productDetail.imageUrl,d.LSH),d.xp6(3),d.Oqu(null==r.productDetail?null:r.productDetail.name),d.xp6(2),d.hij("Price: ",null==r.productDetail?null:r.productDetail.price,"\u20b9"),d.xp6(2),d.hij("Category: ",null==r.productDetail?null:r.productDetail.category,""),d.xp6(2),d.hij("Description: ",null==r.productDetail?null:r.productDetail.description,""))},directives:[l.lW],styles:["img[_ngcontent-%COMP%]{height:350px;width:400px;object-fit:contain}.product-image[_ngcontent-%COMP%]{margin:50px 0 50px 100px}.desc-text[_ngcontent-%COMP%]{width:520px}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap}.description[_ngcontent-%COMP%]{margin-left:300px}@media screen and (max-width:600px){.description[_ngcontent-%COMP%], .product-image[_ngcontent-%COMP%]{margin:30px 0 30px 30px}img[_ngcontent-%COMP%]{height:230px;width:280px}.desc-text[_ngcontent-%COMP%]{width:340px}}"]}),t})();var u=a(1041);let m=(()=>{class t{constructor(){this.footer=new d.vpe}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,r){if(1&t&&(d.ynx(0),d.TgZ(1,"a",2),d._uU(2),d.ALo(3,"titlecase"),d.qZA(),d.BQk()),2&t){const t=r.$implicit;d.xp6(1),d.Q6J("routerLink","/products/"+t),d.xp6(1),d.Oqu(d.lcZ(3,2,t))}}let h=(()=>{class t{constructor(t,r){this.appApiService=r,this.Categories=c.R}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(u.qu),d.Y36(m))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-categories"]],decls:2,vars:1,consts:[[1,"sidenav"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(d.TgZ(0,"div",0),d.YNc(1,g,4,4,"ng-container",1),d.qZA()),2&t&&(d.xp6(1),d.Q6J("ngForOf",r.Categories))},directives:[e.sg,i.yS],pipes:[e.rS],styles:[".sidenav[_ngcontent-%COMP%]{width:170px;height:100%;position:fixed;z-index:1;top:0;background:#eee;overflow-x:hidden;padding:250px 0;display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px 8px 12px 16px;text-decoration:none;font-size:25px;color:#0b6ab8;display:block}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#064579}@media screen and (max-width:450px){.sidenav[_ngcontent-%COMP%]{width:130px;padding:200px}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}}"]}),t})();function f(t,r){1&t&&(d.TgZ(0,"footer"),d.TgZ(1,"p"),d._uU(2,"All rights reserved @Github/Mizan3050"),d.qZA(),d.qZA())}let x=(()=>{class t{constructor(t){this.appApiService=t,this.flag=!1}ngOnInit(){this.appApiService.footer.subscribe(t=>{this.flag=!0})}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(m))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-footer"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,r){1&t&&d.YNc(0,f,3,0,"footer",0),2&t&&d.Q6J("ngIf",r.flag)},directives:[e.O5],styles:["p[_ngcontent-%COMP%]{text-align:center}footer[_ngcontent-%COMP%]{width:100%;height:50px;position:sticky;bottom:0}"]}),t})();var b=a(6136),y=a(7064);const v=["*",[["mat-card-footer"]]],w=["*","mat-card-footer"],Z=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],C=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let A=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=d.lG2({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=d.lG2({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=d.lG2({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t})(),_=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=d.lG2({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,r){2&t&&d.ekj("mat-card-actions-align-end","end"===r.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=d.lG2({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),t})(),P=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(b.Qb,8))},t.\u0275cmp=d.Xpm({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,r){2&t&&d.ekj("_mat-animation-noopable","NoopAnimations"===r._animationMode)},exportAs:["matCard"],ngContentSelectors:w,decls:2,vars:0,template:function(t,r){1&t&&(d.F$t(v),d.Hsn(0),d.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:C,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,r){1&t&&(d.F$t(Z),d.Hsn(0),d.TgZ(1,"div",0),d.Hsn(2,1),d.qZA(),d.Hsn(3,2))},encapsulation:2,changeDetection:0}),t})(),M=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[y.BQ],y.BQ]}),t})();const S=function(t){return[t]};function Q(t,r){if(1&t){const t=d.EpF();d.ynx(0),d.TgZ(1,"button",7),d.NdJ("click",function(){d.CHM(t);const r=d.oxw();return r.addToCart(null==r.product?null:r.product.id)}),d._uU(2," Add to Cart "),d.qZA(),d.TgZ(3,"button",8),d._uU(4," View "),d.qZA(),d.BQk()}if(2&t){const t=d.oxw();d.xp6(3),d.Q6J("routerLink",d.VKq(1,S,"/products/"+(null==t.product?null:t.product.id)+"/detail"))}}function U(t,r){1&t&&(d.TgZ(0,"button",9),d._uU(1," Checkout "),d.qZA())}let $=(()=>{class t{constructor(t){this.cartRepositoryService=t,this.addToProduct$=new d.vpe}ngOnInit(){}addToCart(t){this.addToProduct$.emit(t)}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(s.e))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-product-card"]],inputs:{product:"product"},outputs:{addToProduct$:"addToProduct$"},decls:15,vars:9,consts:[[1,"example-card"],[2,"font-weight","400","font-size","medium"],[2,"font-weight","bold"],["mat-card-image","","alt","Photo of a Shiba Inu",3,"src"],[1,"category-link",3,"routerLink"],[4,"ngIf","ngIfElse"],["checkOut",""],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","primary"]],template:function(t,r){if(1&t&&(d.TgZ(0,"mat-card",0),d.TgZ(1,"mat-card-header"),d.TgZ(2,"mat-card-title",1),d._uU(3),d.qZA(),d.TgZ(4,"mat-card-subtitle",2),d._uU(5),d.qZA(),d.qZA(),d._UZ(6,"img",3),d.TgZ(7,"mat-card-content"),d.TgZ(8,"h3",4),d._uU(9),d.ALo(10,"titlecase"),d.qZA(),d.qZA(),d.TgZ(11,"mat-card-actions"),d.YNc(12,Q,5,3,"ng-container",5),d.YNc(13,U,2,0,"ng-template",null,6,d.W1O),d.qZA(),d.qZA()),2&t){const t=d.MAs(14);d.xp6(3),d.Oqu(null==r.product?null:r.product.name),d.xp6(2),d.hij("Price: ",null==r.product?null:r.product.price,"\u20b9"),d.xp6(1),d.Q6J("src",null==r.product?null:r.product.imageUrl,d.LSH),d.xp6(2),d.Q6J("routerLink","/products/"+(null==r.product?null:r.product.category)),d.xp6(1),d.hij("Category: ",d.lcZ(10,7,null==r.product?null:r.product.category),""),d.xp6(3),d.Q6J("ngIf",!0)("ngIfElse",t)}},directives:[P,q,O,T,k,A,i.rH,_,e.O5,l.lW],pipes:[e.rS],styles:[".example-card{width:350px;margin-top:40px}.example-header-image{background-size:cover}.category-name{font-size:.875rem;margin:0 0 20px}h3{font-weight:700}img{height:250px;width:320px;object-fit:contain}.category-link{font-weight:400;width:200px;cursor:pointer;color:red}.category-link:hover{font-weight:400;cursor:pointer;color:#f17b7b;text-decoration:underline;-webkit-text-decoration-color:#f17b7b;text-decoration-color:#f17b7b}"],encapsulation:2}),t})();function z(t,r){if(1&t){const t=d.EpF();d.ynx(0),d.TgZ(1,"app-product-card",3),d.NdJ("addToProduct$",function(r){return d.CHM(t),d.oxw().addToCart(r)}),d.qZA(),d.BQk()}if(2&t){const t=r.$implicit;d.xp6(1),d.Q6J("product",t)}}let D=(()=>{class t{constructor(t,r){this.route=t,this.cartRepositoryService=r,this.listOfProducts=c.G,this.destroyed$=new n.t(1),this.filteredProductList$=this.cartRepositoryService.productAccordingToCategories$}ngOnInit(){let t;this.route.params.pipe((0,o.R)(this.destroyed$)).subscribe(r=>{var a,e;t=null==r?void 0:r.category,this.cartRepositoryService.productAccordingToCategories.next(t?null===(a=this.listOfProducts)||void 0===a?void 0:a.products.filter(r=>r.category===t):null===(e=this.listOfProducts)||void 0===e?void 0:e.products)})}addToCart(t){this.cartRepositoryService.addProductToCart(t)}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return t.\u0275fac=function(r){return new(r||t)(d.Y36(i.gz),d.Y36(s.e))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-product-list"]],decls:6,vars:3,consts:[[1,"product-list"],[4,"ngFor","ngForOf"],[1,"space"],[3,"product","addToProduct$"]],template:function(t,r){1&t&&(d._UZ(0,"app-categories"),d.TgZ(1,"div",0),d.YNc(2,z,2,1,"ng-container",1),d.ALo(3,"async"),d.qZA(),d._UZ(4,"div",2),d._UZ(5,"app-footer")),2&t&&(d.xp6(2),d.Q6J("ngForOf",d.lcZ(3,1,r.filteredProductList$)))},directives:[h,e.sg,x,$],pipes:[e.Ov],styles:[".product-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;position:absolute;left:150px;right:20px;margin-top:27px}"]}),t})();const j=[{path:"",component:D},{path:":category",component:D},{path:":productId/detail",component:p}];let B=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[i.Bz.forChild(j),e.ez],i.Bz]}),t})();var J=a(3169),I=a(6151);a(9861),a(9235),a(5959),a(7254),a(1906),a(3835),a(9996),a(6673),a(8720),a(611),a(6238),a(7701),a(9713),a(7388),a(4720);let Y=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[e.ez,y.BQ,J.ud,I.ZD],I.ZD,y.BQ]}),t})();var L=a(7112),F=a(7853);let H=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({}),t})(),N=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[y.si,y.BQ,F.Q8,H],y.BQ,H]}),t})();var R=a(3070);let G=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[e.ez,L.g0,l.ot,Y,R.lN,M,u.u5,u.UX,N,B]]}),t})()}}]);