System.register("chunks:///_virtual/Circle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,r,s,n,o,c;return{setters:[function(t){i=t.inheritsLoose,e=t.createClass},function(t){r=t.cclegacy,s=t._decorator,n=t.Layers,o=t.Sprite,c=t.Node}],execute:function(){r._RF.push({},"80823EpjO5DyYF2XyLrsN4T","Circle",void 0);s.ccclass,s.property,t("Circle",function(t){function r(){for(var i,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return(i=t.call.apply(t,[this].concat(r))||this)._idx=void 0,i._key=void 0,i._right=void 0,i._wrong=void 0,i._sprite=void 0,i}i(r,t);var s=r.prototype;return s.init=function(t,i,e){return this.layer=n.Enum.UI_2D,this._sprite=this.addComponent(o),this._key=t,this._right=i,this._wrong=e,this},s.render=function(t){this._idx=t,t===this._key?this._sprite.spriteFrame=this._right:this._sprite.spriteFrame=this._wrong},e(r,[{key:"key",get:function(){return this._key}},{key:"idx",get:function(){return this._idx}}]),r}(c));r._RF.pop()}}}));

System.register("chunks:///_virtual/CircleManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RenderManager.ts","./DataManager.ts","./Circle.ts"],(function(e){"use strict";var n,r,t,i,a,o,c,l,s,u;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.SpriteFrame},function(e){l=e.RenderManager},function(e){s=e.DataManager},function(e){u=e.Circle}],execute:function(){var g,p,f,h,d,v,y;a._RF.push({},"499eegrkSdEPLKmPawsRwNo","CircleManager",void 0);var M=o.ccclass,C=o.property;e("CircleManager",(g=M("CircleManager"),p=C([c]),f=C([c]),g((v=n((d=function(e){function n(){for(var n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,t(n,"contentRight",v,i(n)),t(n,"contentWrong",y,i(n)),n}return r(n,e),n.prototype.render=function(){for(var e=this.node.children,n=s.Instance.circlePos,r=0;r<e.length;r++){var t=n[r],i=e[r];if(i.removeAllChildren(),null!==t){var a=this.contentRight[t],o=this.contentWrong[t],c=new u("Content");c.init(r,a,o).render(t),c.setParent(i)}}},n}(l)).prototype,"contentRight",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=n(d.prototype,"contentWrong",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=d))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["cc"],(function(t){"use strict";var s;return{setters:[function(t){s=t.cclegacy}],execute:function(){s._RF.push({},"0c6d8aHxOxBor5god/77ISN","Constants",void 0);t("GrandmaTalks1",["我年纪大了，很多事情想不起来了。","你是谁？算了，我也不在乎你是谁。你能帮我找到信箱的钥匙吗？","老头子说最近会给我寄船票过来，叫我和他一起出去看看。虽然我没有什么兴趣...","他折腾了一辈子，不是躲在楼上捣鼓什么时间机器，就是出海找点什么东西。","这些古怪的电视节目真没有什么意思。","老头子说这个岛上有很多秘密，其实我知道，不过是岛上的日子太孤独，他找点事情做罢了。","人嘛，谁没有年轻过。年轻的时候...算了，不说这些往事了。","老了才明白，万物静默如迷。"]),t("GrandmaTalks2",["没想到老头子的船票寄过来了，谢谢你。"]);s._RF.pop()}}}));

System.register("chunks:///_virtual/DataManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./Singleton.ts","./EventManager.ts","./index.ts"],(function(e){"use strict";var t,n,r,i,s,c,u,a,o,l,g,m,f,h;return{setters:[function(e){t=e.inheritsLoose,n=e.createClass,r=e.assertThisInitialized},function(e){i=e.cclegacy,s=e.director},function(e){c=e.SceneEnum,u=e.ItemTypeEnum,a=e.ItemStateEnum,o=e.TriggerItemTypeEnum,l=e.TriggerItemStateEnum,g=e.EventEnum},function(e){m=e.default},function(e){f=e.default},function(e){h=e.throttle}],execute:function(){i._RF.push({},"8ec06i4VMpKLrXJEBYtQzkf","DataManager",void 0);var d="DATA_KEY";e("DataManager",function(e){function i(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))||this).defaultCirclePos=[1,0,3,2,5,4,null],t._circlePos=[1,0,3,2,5,4,null],t.lineMaps=new Map([[0,[1,4,6]],[1,[0,5,6]],[2,[4,6]],[3,[5,6]],[4,[0,2,5,6]],[5,[1,3,4,6]],[6,[0,1,2,3,4,5]]]),t._currScene=c.H1,t._isSelected=!1,t._currItem=null,t._items=[{type:u.Key,state:a.Scene},{type:u.Ticket,state:a.Scene}],t._triggerItems=[{type:o.MailBox,state:l.Pending},{type:o.Door,state:l.Pending},{type:o.Grandma,state:l.Pending}],t.render=h({cb:function(){f.Instance.emit(g.Render),t.saveGame()},ctx:r(t)}),t}t(i,e);var m=i.prototype;return m.getItemByType=function(e){return this._items.find((function(t){return t.type===e}))},m.getTriggerItemByType=function(e){return this._triggerItems.find((function(t){return t.type===e}))},m.newGame=function(){this.loadGame(JSON.stringify({currPos:this.defaultCirclePos.slice(),isSelelected:!1,currIitem:null,currScene:c.H1,items:[{type:u.Key,state:a.Scene},{type:u.Ticket,state:a.Scene}],triggerItems:[{type:o.MailBox,state:l.Pending},{type:o.Door,state:l.Pending},{type:o.Grandma,state:l.Pending}]}))},m.saveGame=function(){var e={currPos:this.defaultCirclePos.slice(),isSelected:this.isSelected,currItem:this.currItem,currScene:this.currScene,items:this.items.slice(),triggerItems:this.triggerItems.slice()};localStorage.setItem(d,JSON.stringify(e))},m.loadGame=function(e){var t=this;if(e=e||localStorage.getItem(d))try{e=JSON.parse(e),Object.keys(e).forEach((function(n){t[n]=e[n]}))}catch(e){console.error(e)}else this.newGame()},n(i,[{key:"isSelected",get:function(){return this._isSelected},set:function(e){this._isSelected=e,this.render()}},{key:"currItem",get:function(){return this._currItem},set:function(e){this._currItem=e,this.render()}},{key:"packages",get:function(){return this._items.filter((function(e){return e.state===a.Package}))}},{key:"currScene",get:function(){return this._currScene},set:function(e){this._currScene=e,s.loadScene(e)}},{key:"items",get:function(){return this._items},set:function(e){this._items=[].concat(e),this.render()}},{key:"triggerItems",get:function(){return this._triggerItems},set:function(e){this._triggerItems=[].concat(e),this.render()}},{key:"circlePos",get:function(){return this._circlePos},set:function(e){this._circlePos=[].concat(e),this.render()}}],[{key:"Instance",get:function(){return e.GetInstance.call(this)}}]),i}(m));i._RF.pop()}}}));

System.register("chunks:///_virtual/DoorManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./DataManager.ts","./TriggerItem.ts"],(function(e){"use strict";var t,r,n,i,a,o,c,u,s,p,g,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.SpriteFrame},function(e){u=e.TriggerItemTypeEnum,s=e.TriggerItemStateEnum,p=e.SceneEnum},function(e){g=e.DataManager},function(e){l=e.default}],execute:function(){var f,d,y,m,h;a._RF.push({},"fc595j8QwpJroH/S9u0+O5F","DoorManager",void 0);var v=o.ccclass,D=o.property;e("default",(f=v("DoorManager"),d=D(c),f((h=t((m=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).type=u.Door,n(t,"opendSF",h,i(t)),t}r(t,e);var a=t.prototype;return a.handleTriggered=function(){var e=this,t=g.Instance.triggerItems.find((function(t){return t.type===e.type}));t&&t.state===s.Pending&&(g.Instance.currScene=p.H2A)},a.render=function(){var e=this;g.Instance.triggerItems.find((function(t){return t.type===e.type})).state===s.Triggered&&(this.node.active=!1)},t}(l)).prototype,"opendSF",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=m))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/Enum.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){var t,u,i,c,r,m,o;e({EventEnum:void 0,ItemStateEnum:void 0,ItemTypeEnum:void 0,PrefabEnum:void 0,SceneEnum:void 0,TriggerItemStateEnum:void 0,TriggerItemTypeEnum:void 0}),n._RF.push({},"c3973uu5MNK9639L3DNsX8n","Enum",void 0),function(e){e.H1="H1",e.H2="H2",e.H2A="H2A",e.H3="H3",e.H4="H4",e.Menu="Menu"}(t||(t=e("SceneEnum",{}))),function(e){e.Key="Key",e.Ticket="Ticket"}(u||(u=e("ItemTypeEnum",{}))),function(e){e.Scene="Scene",e.Package="Package",e.Used="Used"}(i||(i=e("ItemStateEnum",{}))),function(e){e.MailBox="MailBox",e.Door="Door",e.Grandma="Grandma"}(c||(c=e("TriggerItemTypeEnum",{}))),function(e){e.Pending="Pending",e.Triggered="Triggered"}(r||(r=e("TriggerItemStateEnum",{}))),function(e){e.Render="Render"}(m||(m=e("EventEnum",{}))),function(e){e.Key="Key",e.Ticket="Ticket"}(o||(o=e("PrefabEnum",{}))),n._RF.pop()}}}));

System.register("chunks:///_virtual/EventManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Singleton.ts"],(function(t){"use strict";var n,e,a,c;return{setters:[function(t){n=t.inheritsLoose,e=t.createClass},function(t){a=t.cclegacy},function(t){c=t.default}],execute:function(){a._RF.push({},"7694aWGQABDo7CdD3XswemW","EventManager",void 0);t("default",function(t){function a(){for(var n,e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return(n=t.call.apply(t,[this].concat(a))||this).map=new Map,n}n(a,t);var c=a.prototype;return c.on=function(t,n,e){this.map.has(t)?this.map.get(t).push({cb:n,ctx:e}):this.map.set(t,[{cb:n,ctx:e}])},c.off=function(t,n,e){if(this.map.has(t)){var a=this.map.get(t).findIndex((function(t){return n===t.cb&&t.ctx===e}));a>-1&&this.map.get(t).splice(a,1)}},c.emit=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];this.map.has(t)&&this.map.get(t).forEach((function(t){var n=t.cb,a=t.ctx;n.apply(a,e)}))},c.clear=function(){this.map.clear()},e(a,null,[{key:"Instance",get:function(){return t.GetInstance.call(this)}}]),a}(c));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./DataManager.ts"],(function(e){"use strict";var n,t,c,r,a,o,i,s,u,l;return{setters:[function(e){n=e.inheritsLoose,t=e.createForOfIteratorHelperLoose},function(e){c=e.cclegacy,r=e._decorator,a=e.Input,o=e.Component},function(e){i=e.TriggerItemTypeEnum,s=e.TriggerItemStateEnum,u=e.SceneEnum},function(e){l=e.DataManager}],execute:function(){var f;c._RF.push({},"82a6ccLwt1BB7H9HhAnHwUN","GameManager",void 0);var g=r.ccclass;r.property,e("GameManager",g("GameManager")(f=function(e){function c(){return e.apply(this,arguments)||this}n(c,e);var r=c.prototype;return r.onLoad=function(){for(var e,n=this.node.children,c=t(n);!(e=c()).done;){e.value.on(a.EventType.TOUCH_END,this._handleTouchEnd,this)}},r._handleTouchEnd=function(e){var n=e.target.getChildByName("Content");if(n){var t=l.Instance.circlePos,c=l.Instance.lineMaps.get(n.key),r=t.indexOf(null),a=t.indexOf(n.idx);-1!==c.indexOf(r)&&(t[r]=n.idx,t[a]=null,l.Instance.circlePos=[].concat(t),this._checkSuccess())}},r.handleReset=function(){l.Instance.circlePos=[].concat(l.Instance.defaultCirclePos)},r._checkSuccess=function(){if(l.Instance.circlePos.slice(0,-1).every((function(e,n){return e===n}))){var e=l.Instance.triggerItems;e.find((function(e){return e.type===i.Door})).state=s.Triggered,l.Instance.triggerItems=e,l.Instance.currScene=u.H2}},c}(o))||f);c._RF.pop()}}}));

System.register("chunks:///_virtual/GrandmaManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constants.ts","./Enum.ts","./DataManager.ts","./TriggerItem.ts"],(function(t){"use strict";var e,n,r,i,a,s,o,c,g,d,u;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,i=t.Label},function(t){a=t.GrandmaTalks1,s=t.GrandmaTalks2},function(t){o=t.ItemTypeEnum,c=t.TriggerItemStateEnum,g=t.TriggerItemTypeEnum},function(t){d=t.DataManager},function(t){u=t.default}],execute:function(){var l;n._RF.push({},"59fc6G2lHlNiJVhqBr3zIXd","GrandmaManager",void 0);var h=r.ccclass;r.property,t("default",h("GrandmaManager")(l=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).type=g.Grandma,e._content=void 0,e._idx=0,e._triggered=!1,e._dialog=void 0,e}e(n,t);var r=n.prototype;return r.onLoad=function(){t.prototype.onLoad.call(this),this._dialog=this.node.getChildByName("Dialog"),this._content=this._dialog.getComponentInChildren(i)},r.handleTriggered=function(){var t=this,e=d.Instance,n=e.getItemByType(o.Ticket),r=e.items.slice(),i=e.triggerItems.slice(),a=i.find((function(e){return e.type===t.type}));if(e.isSelected&&e.currItem&&a.state===c.Pending&&e.currItem.type===o.Ticket){a.state=c.Triggered,e.triggerItems=[].concat(i);var s=r.indexOf(n);r.splice(s,1),e.items=[].concat(r)}this._triggered=!0,this.render()},r.render=function(){var t=this;if(this._triggered){this._triggered=!1,this._dialog.active=!0;var e=d.Instance.triggerItems.find((function(e){return e.type===t.type}));e.state===c.Pending?this._content.string=a[this._idx++%a.length]:e.state===c.Triggered&&(this._content.string=s[0])}},n}(u))||l);n._RF.pop()}}}));

System.register("chunks:///_virtual/H1.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./SceneManager.ts"],(function(n){"use strict";var e,t,c,r,o;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,c=n._decorator},function(n){r=n.SceneEnum},function(n){o=n.SceneManager}],execute:function(){var a;t._RF.push({},"07043LcAa5Ib41aD/Yk2nDi","H1",void 0);var i=c.ccclass;c.property,n("H1",i("H1")(a=function(n){function t(){for(var e,t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return(e=n.call.apply(n,[this].concat(c))||this).type=r.H1,e}return e(t,n),t.prototype.handleClickNext=function(){this.changeScene(r.H2)},t}(o))||a);t._RF.pop()}}}));

System.register("chunks:///_virtual/H2.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./DataManager.ts","./SceneManager.ts"],(function(e){"use strict";var t,n,i,r,o,a,c,s,l,u,p,h,f,y,g,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Prefab,s=e.Vec2,l=e.instantiate},function(e){u=e.SceneEnum,p=e.TriggerItemTypeEnum,h=e.TriggerItemStateEnum,f=e.ItemTypeEnum,y=e.ItemStateEnum},function(e){g=e.DataManager},function(e){m=e.SceneManager}],execute:function(){var d,P,v,S,b,I,H;o._RF.push({},"0b848lUpylE8Im1qbL4r8Pr","H2",void 0);var T=a.ccclass,_=a.property;e("H2",(d=T("H2"),P=_(c),v=_(s),d((I=t((b=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).type=u.H2,t._items=null,i(t,"keyPf",I,r(t)),i(t,"positionPlaceholder",H,r(t)),t}n(t,e);var o=t.prototype;return o.onLoad=function(){e.prototype.onLoad.call(this),this._items=this.node.getChildByName("Items")},o.handleClickPrev=function(){this.changeScene(u.H1)},o.handleClickNext=function(){this.changeScene(u.H4)},o.handleUpStair=function(){g.Instance.getTriggerItemByType(p.Door).state===h.Triggered&&this.changeScene(u.H3)},o.render=function(){e.prototype.render.call(this),this._items.removeAllChildren();var t=g.Instance.items.find((function(e){return e.type===f.Key}));if(t&&this.positionPlaceholder&&t.state===y.Scene){var n=l(this.keyPf);n.setPosition(this.positionPlaceholder.x,this.positionPlaceholder.y),n.setParent(this._items)}},t}(m)).prototype,"keyPf",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(b.prototype,"positionPlaceholder",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=b))||S));o._RF.pop()}}}));

System.register("chunks:///_virtual/H2A.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./SceneManager.ts"],(function(e){"use strict";var n,t,r,c,o;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,r=e._decorator},function(e){c=e.SceneEnum},function(e){o=e.SceneManager}],execute:function(){var s;t._RF.push({},"3d7b25gJsxLIoDUCtHGlrs7","H2A",void 0);var u=r.ccclass;r.property,e("H2A",u("H2A")(s=function(e){function t(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))||this).type=c.H2A,n}n(t,e);var r=t.prototype;return r.handleClickPrev=function(){this.changeScene(c.H2)},r.reset=function(){},t}(o))||s);t._RF.pop()}}}));

System.register("chunks:///_virtual/H3.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./SceneManager.ts"],(function(e){"use strict";var n,t,c,r,o;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,c=e._decorator},function(e){r=e.SceneEnum},function(e){o=e.SceneManager}],execute:function(){var u;t._RF.push({},"7a4c7kzHCFC9pdJUBWoeYGm","H3",void 0);var a=c.ccclass;c.property,e("H3",a("H3")(u=function(e){function t(){for(var n,t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return(n=e.call.apply(e,[this].concat(c))||this).type=r.H3,n}return n(t,e),t.prototype.handleClickPrev=function(){this.changeScene(r.H2)},t}(o))||u);t._RF.pop()}}}));

System.register("chunks:///_virtual/H4.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./DataManager.ts","./SceneManager.ts"],(function(e){"use strict";var t,n,i,r,o,a,c,s,l,u,p,f,h,m,d,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Prefab,s=e.Vec2,l=e.instantiate},function(e){u=e.SceneEnum,p=e.ItemTypeEnum,f=e.TriggerItemTypeEnum,h=e.TriggerItemStateEnum,m=e.ItemStateEnum},function(e){d=e.DataManager},function(e){g=e.SceneManager}],execute:function(){var y,P,v,T,I,S,b;o._RF.push({},"aff61RxBeJPRJZ6hFK688Sz","H4",void 0);var _=a.ccclass,H=a.property;e("H4",(y=_("H4"),P=H(c),v=H(s),y((S=t((I=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).type=u.H4,t._items=null,i(t,"TicketPf",S,r(t)),i(t,"positionPlaceholder",b,r(t)),t}n(t,e);var o=t.prototype;return o.onLoad=function(){e.prototype.onLoad.call(this),this._items=this.node.getChildByName("Items")},o.start=function(){e.prototype.start.call(this)},o.handleClickPrev=function(){this.changeScene(u.H2)},o.render=function(){var t;e.prototype.render.call(this),null==(t=this._items)||t.removeAllChildren();var n=d.Instance.items.find((function(e){return e.type===p.Ticket})),i=d.Instance.triggerItems.find((function(e){return e.type===f.MailBox}));if(n&&this.positionPlaceholder&&i.state===h.Triggered&&n.state===m.Scene){var r=l(this.TicketPf);r.setPosition(this.positionPlaceholder.x,this.positionPlaceholder.y),r.setParent(this._items)}},t}(g)).prototype,"TicketPf",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(I.prototype,"positionPlaceholder",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=I))||T));o._RF.pop()}}}));

System.register("chunks:///_virtual/index.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"860e3dIwoNOxa28YC/zhWHl","index",void 0);t("debounce",(function(t,n){var e;return void 0===n&&(n=200),function(){for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];e&&clearTimeout(e),e=setTimeout((function(){t.cb.apply(t.ctx,c),e=null}),n)}})),t("throttle",(function(t,n){var e,r;return void 0===n&&(n=200),function(){for(var c=arguments.length,u=new Array(c),o=0;o<c;o++)u[o]=arguments[o];e=u,r||(r=setTimeout((function(){t.cb.apply(t.ctx,e),r=null}),n))}}));n._RF.pop()}}}));

System.register("chunks:///_virtual/Interface.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"a9505axAIlEFIVPQ/lyyCru","Interface",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/Item.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RenderManager.ts","./Enum.ts","./DataManager.ts"],(function(e){"use strict";var t,n,i,r,a,s,c,o,p,l,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,c=e.SpriteFrame,o=e.Sprite,p=e.Input},function(e){l=e.RenderManager},function(e){u=e.ItemStateEnum},function(e){h=e.DataManager}],execute:function(){var f,d,m,y,g,S,v;a._RF.push({},"29f5bZkkrxNwbKTqrrajWtM","Item",void 0);var k=s.ccclass,F=s.property;e("default",(f=k("Item"),d=F(c),m=F(c),f((S=t((g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).type=void 0,t.itemName="物品",t.sprite=void 0,i(t,"inSceneSpriteFrame",S,r(t)),i(t,"inPackageSpriteFrame",v,r(t)),t}n(t,e);var a=t.prototype;return a.onLoad=function(){this.sprite=this.getComponent(o),this.node.on(p.EventType.TOUCH_END,this.handleClick,this)},a.onDestroy=function(){e.prototype.onDestroy.call(this),this.node.off(p.EventType.TOUCH_END,this.handleClick,this)},a.handleClick=function(){var e=this,t=h.Instance.items,n=t.find((function(t){return t.type===e.type}));n&&(n.state===u.Scene?n.state=u.Package:n.state===u.Package&&(h.Instance.isSelected=!h.Instance.isSelected),h.Instance.items=[].concat(t))},a.render=function(){var e=this,t=h.Instance.items.find((function(t){return t.type===e.type}));t&&(t.state===u.Scene?(this.node.active=!0,this.sprite.spriteFrame=this.inSceneSpriteFrame):t.state===u.Package?(this.node.active=!0,this.sprite.spriteFrame=this.inPackageSpriteFrame):this.node.active=!1)},t}(l)).prototype,"inSceneSpriteFrame",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=t(g.prototype,"inPackageSpriteFrame",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=g))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/Key.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Item.ts","./Enum.ts"],(function(e){"use strict";var t,n,r,c,u;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator},function(e){c=e.default},function(e){u=e.ItemTypeEnum}],execute:function(){var s;n._RF.push({},"2d9cdsnsUFLuYGG9eCEwwWq","Key",void 0);var o=r.ccclass;r.property,e("default",o("Key")(s=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).type=u.Key,t.itemName="信箱钥匙",t}return t(n,e),n}(c))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/LineManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DataManager.ts"],(function(e){"use strict";var t,r,n,a,i,o,s,l,c,p,u,h,f,d,v,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,i=e.createForOfIteratorHelperLoose},function(e){o=e.cclegacy,s=e._decorator,l=e.SpriteFrame,c=e.Node,p=e.Layers,u=e.Sprite,h=e.UITransform,f=e.Size,d=e.Vec3,v=e.Component},function(e){y=e.DataManager}],execute:function(){var M,g,m,b,L,w,F;o._RF.push({},"af12eNoxHZFnJ7TrlsyuhFv","LineManager",void 0);var z=s.ccclass,D=s.property;e("LineManager",(M=z("LineManager"),g=D(l),m=D(c),M((w=t((L=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,n(t,"line",w,a(t)),n(t,"circlesNode",F,a(t)),t}r(t,e);var o=t.prototype;return o.start=function(){this.render()},o.render=function(){for(var e,t=this.circlesNode.children,r=y.Instance.lineMaps,n=i(r);!(e=n()).done;)for(var a,o=e.value,s=o[0],l=o[1],v=i(l);!(a=v()).done;){var M=a.value;if(s<M){var g=t[s].position,m=g.x,b=g.y,L=t[M].position,w=L.x,F=L.y,z=new c("Line");z.layer=p.Enum.UI_2D;var D=(m+w)/2,I=(b+F)/2,S=Math.abs(w-m),N=Math.abs(F-b),P=Math.sqrt(Math.pow(S,2)+Math.pow(N,2));z.setPosition(D,I),z.addComponent(u).spriteFrame=this.line,z.setParent(this.node);var _=z.getComponent(h);_.setContentSize(new f(P-160,_.contentSize.height));var x=Math.atan(N/S)/Math.PI*180,C=m>w&&b>F||m<w&&b<F?1:-1;z.setRotationFromEuler(new d(0,0,x*C))}}},t}(v)).prototype,"line",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=t(L.prototype,"circlesNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=L))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/MailBoxManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./DataManager.ts","./TriggerItem.ts"],(function(e){"use strict";var t,r,n,i,a,o,s,c,u,p,l,g,d,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.SpriteFrame,c=e.Sprite},function(e){u=e.TriggerItemTypeEnum,p=e.TriggerItemStateEnum,l=e.ItemTypeEnum,g=e.ItemStateEnum},function(e){d=e.DataManager},function(e){m=e.default}],execute:function(){var f,y,h,I,v;a._RF.push({},"9c4634QR9dN2KhVFCKVU4jk","MailBoxManager",void 0);var M=o.ccclass,S=o.property;e("default",(f=M("MailBoxManager"),y=S(s),f((v=t((I=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).type=u.MailBox,n(t,"opendSF",v,i(t)),t._sprite=void 0,t}r(t,e);var a=t.prototype;return a.onLoad=function(){e.prototype.onLoad.call(this),this._sprite=this.node.getChildByName("Box").getComponent(c)},a.handleTriggered=function(){var e=this,t=d.Instance,r=t.triggerItems.slice(),n=t.items.slice(),i=n.find((function(e){return e.type===t.currItem.type})),a=r.find((function(t){return t.type===e.type}));a&&a.state===p.Pending&&t.isSelected&&t.currItem.type===l.Key&&(a.state=p.Triggered,t.triggerItems=r,t.isSelected=!1,i.state=g.Used,t.items=[].concat(n),t.currItem=null)},a.render=function(){var e=this;d.Instance.triggerItems.find((function(t){return t.type===e.type})).state===p.Triggered&&(this._sprite.spriteFrame=this.opendSF)},t}(m)).prototype,"opendSF",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=I))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./EventManager.ts","./RenderManager.ts","./ResourceManager.ts","./Singleton.ts","./Constants.ts","./Enum.ts","./Interface.ts","./GameManager.ts","./Item.ts","./Key.ts","./Ticket.ts","./DataManager.ts","./H1.ts","./H2.ts","./H2A.ts","./H3.ts","./H4.ts","./Menu.ts","./SceneManager.ts","./DoorManager.ts","./GrandmaManager.ts","./MailBoxManager.ts","./TriggerItem.ts","./Circle.ts","./CircleManager.ts","./LineManager.ts","./PackageManger.ts","./index.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Menu.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./DataManager.ts","./SceneManager.ts"],(function(n){"use strict";var e,t,a,c,r,u;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,a=n._decorator},function(n){c=n.SceneEnum},function(n){r=n.DataManager},function(n){u=n.SceneManager}],execute:function(){var o;t._RF.push({},"2f08cK4FqtI9JSlSXineZdQ","Menu",void 0);var i=a.ccclass;a.property,n("Menu",i("Menu")(o=function(n){function t(){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))||this).type=c.Menu,e}e(t,n);var a=t.prototype;return a.newGame=function(){r.Instance.newGame()},a.handleContinue=function(){r.Instance.loadGame()},t}(u))||o);t._RF.pop()}}}));

System.register("chunks:///_virtual/PackageManger.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RenderManager.ts","./Item.ts","./DataManager.ts"],(function(e){"use strict";var t,n,i,a,r,c,o,s,l,h,d,g,u,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized,r=e.createForOfIteratorHelperLoose},function(e){c=e.cclegacy,o=e._decorator,s=e.Prefab,l=e.Button,h=e.Label,d=e.instantiate},function(e){g=e.RenderManager},function(e){u=e.default},function(e){p=e.DataManager}],execute:function(){var f,v,m,_,y,I,C;c._RF.push({},"7cc87hsa5dKr5fOZwgPrkli","PackageManger",void 0);var b=o.ccclass,k=o.property;e("default",(f=b("PackageManager"),v=k(s),m=k(s),f((I=t((y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this)._left=void 0,t._right=void 0,t._itemContainer=void 0,t._hand=void 0,t._tip=void 0,i(t,"Key",I,a(t)),i(t,"Ticket",C,a(t)),t}n(t,e);var c=t.prototype;return c.onLoad=function(){this._left=this.node.getChildByName("Left").getComponent(l),this._right=this.node.getChildByName("Right").getComponent(l);var e=this.node.getChildByName("Container");this._hand=e.getChildByName("Hand"),this._tip=e.getChildByName("Tip").getComponentInChildren(h),this._itemContainer=e.getChildByName("Items")},c.handleClickPrev=function(){var e=p.Instance.packages,t=e.indexOf(p.Instance.currItem);p.Instance.currItem=e[t-1]},c.handleClickNext=function(){var e=p.Instance.packages,t=e.indexOf(p.Instance.currItem);p.Instance.currItem=e[t+1]},c.render=function(){var e=p.Instance.packages;if(e.length){this.node.active=!0;var t=p.Instance.currItem;t||(t=p.Instance.currItem=e[0]),this._itemContainer.removeAllChildren();for(var n,i=r(e);!(n=i()).done;){var a=n.value,c=d(this[a.type]),o=c.getComponent(u);this._tip.string=o.itemName,c.setParent(this._itemContainer),o.type===t.type?c.active=!0:c.active=!1}var s=e.indexOf(t);1===e.length?(this._left.interactable=!1,this._right.interactable=!1):(s<e.length-1?this._right.interactable=!0:this._right.interactable=!1,this._left.interactable=s>0),p.Instance.isSelected?this._hand.active=!0:this._hand.active=!1}else this.node.active=!1},t}(g)).prototype,"Key",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(y.prototype,"Ticket",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=y))||_));c._RF.pop()}}}));

System.register("chunks:///_virtual/RenderManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enum.ts","./EventManager.ts"],(function(n){"use strict";var e,t,r,s,o,a;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,r=n._decorator,s=n.Component},function(n){o=n.EventEnum},function(n){a=n.default}],execute:function(){var c;t._RF.push({},"d56bdTUd8NFaLnwbu0d4PPs","RenderManager",void 0);var i=r.ccclass;r.property,n("RenderManager",i("RenderManager")(c=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.start=function(){a.Instance.on(o.Render,this.render,this),this.render()},r.onDestroy=function(){a.Instance.off(o.Render,this.render,this)},t}(s))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/ResourceManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Singleton.ts"],(function(n){"use strict";var e,t,r,o,u;return{setters:[function(n){e=n.inheritsLoose,t=n.createClass},function(n){r=n.cclegacy,o=n.resources},function(n){u=n.default}],execute:function(){r._RF.push({},"03cf1K4bjhKzrUqezE/qDI7","ResourceManager",void 0);n("ResourceManager",function(n){function r(){return n.apply(this,arguments)||this}e(r,n);var u=r.prototype;return u.loadRes=function(n,e){return new Promise((function(t,r){o.load(n,e,(function(n,e){n?r(n):t(e)}))}))},u.loadDir=function(n,e){return new Promise((function(t,r){o.loadDir(n,e,(function(n,e){n?r(n):t(e)}))}))},t(r,null,[{key:"Instance",get:function(){return n.GetInstance.call(this)}}]),r}(u));r._RF.pop()}}}));

System.register("chunks:///_virtual/SceneManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RenderManager.ts","./Enum.ts","./DataManager.ts","./PackageManger.ts"],(function(e){"use strict";var n,t,a,r,i,c,o,u,s,l,p,f,g,h,d;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,c=e._decorator,o=e.Prefab,u=e.director,s=e.instantiate,l=e.Button,p=e.EventHandler},function(e){f=e.RenderManager},function(e){g=e.SceneEnum},function(e){h=e.DataManager},function(e){d=e.default}],execute:function(){var v,M,b,m,y,P,S;i._RF.push({},"47329ga/iRHwZfN7nUF2Rpw","SceneManager",void 0);var k=c.ccclass,w=c.property;e("SceneManager",(v=k("SceneManager"),M=w(o),b=w(o),v((P=n((y=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(n=e.call.apply(e,[this].concat(i))||this).type=void 0,a(n,"menu",P,r(n)),a(n,"packagePrefab",S,r(n)),n}t(n,e);var i=n.prototype;return i.onLoad=function(){for(var e in g)u.preloadScene(e);if(this.menu){var n=s(this.menu);n.setParent(this.node);var t=n.getComponent(l),a=new p;a.target=this.node,a.component=this.type,a.handler="handleMenuClick",t.clickEvents=[a]}if(this.packagePrefab){var r=s(this.packagePrefab);r.getComponent(d),r.setParent(this.node)}},i.changeScene=function(e){h.Instance.currScene=e},i.handleMenuClick=function(){this.changeScene(g.Menu)},i.render=function(){},n}(f)).prototype,"menu",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=n(y.prototype,"packagePrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=y))||m));i._RF.pop()}}}));

System.register("chunks:///_virtual/Singleton.ts",["cc"],(function(n){"use strict";var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"38e0e8JZoBNU5Q9bgiT/1yU","Singleton",void 0),n("default",function(){function n(){}return n.GetInstance=function(){return this._instance||(this._instance=new this),this._instance},n}())._instance=null,t._RF.pop()}}}));

System.register("chunks:///_virtual/Ticket.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Item.ts","./Enum.ts"],(function(t){"use strict";var e,c,n,r,i;return{setters:[function(t){e=t.inheritsLoose},function(t){c=t.cclegacy,n=t._decorator},function(t){r=t.default},function(t){i=t.ItemTypeEnum}],execute:function(){var u;c._RF.push({},"5df7f4fMRZDea8cwa8dNJhP","Ticket",void 0);var o=n.ccclass;n.property,t("default",o("Ticket")(u=function(t){function c(){for(var e,c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).type=i.Ticket,e.itemName="船票",e}return e(c,t),c}(r))||u);c._RF.pop()}}}));

System.register("chunks:///_virtual/TriggerItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RenderManager.ts"],(function(e){"use strict";var t,r,n,o,i;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,n=e._decorator,o=e.Input},function(e){i=e.RenderManager}],execute:function(){var s;r._RF.push({},"3eb26M+HvhJcrqUeqw3bsmW","TriggerItem",void 0);var c=n.ccclass;n.property,e("default",c("TriggerItem")(s=function(e){function r(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).type=void 0,t}t(r,e);var n=r.prototype;return n.onLoad=function(){this.node.on(o.EventType.TOUCH_END,this.handleTriggered,this)},n.onDestroy=function(){e.prototype.onDestroy.call(this),this.node.off(o.EventType.TOUCH_END,this.handleTriggered,this)},r}(i))||s);r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});