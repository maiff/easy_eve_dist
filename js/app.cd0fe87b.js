(function(t){function e(e){for(var o,r,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"43158c69"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"45a1":function(t,e,n){"use strict";n("5cd9")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("034f"),n("2877")),c={},s=Object(r["a"])(c,i,a,!1,null,null,null),l=s.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:4},placeholder:"请输入内容"},model:{value:t.textarea2,callback:function(e){t.textarea2=e},expression:"textarea2"}}),n("el-button",{staticClass:"main-button",attrs:{size:"small","native-type":"submit",loading:t.isloading},on:{click:t.submit}},[t._v("提交")]),n("el-upload",{staticClass:"upload-demo main-button",attrs:{"on-preview":t.handlePreview,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,limit:1,"on-exceed":t.handleExceed,"file-list":t.fileList}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._l(t.items,(function(e){return n("el-card",{key:e._id.$oid,staticClass:"container"},["text"==e.type?n("div",{staticClass:"text-item",on:{click:function(n){return t.copyContent(e.content)}}},[t._v(" "+t._s(t._f("enterreplace")(e.content))+" "),n("a",{staticClass:"del",on:{click:function(n){return n.stopPropagation(),t.del(e._id.$oid)}}},[t._v("删除")])]):t._e(),"img"==e.type?n("div",{staticClass:"img-item"},[n("el-avatar",{attrs:{shape:"square",size:100,fit:t.fit,src:e.content}}),n("a",{staticClass:"del",on:{click:function(n){return n.stopPropagation(),t.del(e._id.$oid)}}},[t._v("删除")]),n("div",[n("a",{attrs:{href:e.content,download:t._f("basename")(e.content)}},[t._v(t._s(t._f("basename")(e.content)))])])],1):t._e(),"file"==e.type?n("div",{staticClass:"text-item"},[n("a",{attrs:{href:e.content,download:t._f("basename")(e.content)}},[t._v(t._s(t._f("basename")(e.content)))]),n("a",{staticClass:"del",on:{click:function(n){return n.stopPropagation(),t.del(e._id.$oid)}}},[t._v("删除")])]):t._e()])})),n("el-button",{staticClass:"loadingnext",attrs:{loading:t.loadingnext},on:{click:t.loadnext}},[t._v("点击加载更多")]),n("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",[t._v("是否删除")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.comfirmdel}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"提示",visible:t.copyDialogVisible,width:"30%","before-close":t.cclose},on:{"update:visible":function(e){t.copyDialogVisible=e}}},[t.csrc?n("el-avatar",{attrs:{shape:"square",size:100,fit:t.fit,src:t.csrc}}):n("div",[t._v(t._s(t.ctext))]),n("div",[n("span",[t._v(t._s(t.csrc?"是否上传这个图片":"是否上传这个text"))])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cclose}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.comfirmrecord}},[t._v("确 定")])],1)],1)],2)},f=[],p=(n("99af"),n("c975"),n("b0c0"),n("ac1f"),n("25f0"),n("3ca3"),n("466d"),n("5319"),n("ddb0"),n("2b3d"),n("2909")),m=n("8587"),h=n.n(m);h.a.defaults.xsrfCookieName="csrftoken",h.a.defaults.xsrfHeaderName="X-CSRFTOKEN";function v(t){return h.a.get("/api/tools/copy/copys"+(t?"?id="+t:"")).then((function(t){return t.data}))}function b(t){return h.a.post("/api/tools/copy/copys",t).then((function(t){return t.data}))}function g(t){return h.a.delete("/api/tools/copy/copy/".concat(t)).then((function(t){return t.data}))}n("e925");function y(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length,i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*o));return e}var x={name:"Home",components:{},mounted:function(){var t=this;v().then((function(e){t.items=e})),window.addEventListener("paste",(function(e){var n=e.clipboardData||window.clipboardData;t.retrieveImageFromClipboardAsBlob(e,(function(e){if(e){t.copyDialogVisible=!0;var o=window.URL||window.webkitURL;t.csrc=o.createObjectURL(e),t.blob=e}else t.copyDialogVisible=!0,t.ctext=n.getData("Text")}))}))},data:function(){return{textarea2:"",items:[],isloading:!1,dialogVisible:!1,nowid:"",loadingnext:!1,fileList:[],copyDialogVisible:!1,csrc:!1,ctext:"",blob:null}},filters:{basename:function(t){if(t){var e=t.toString().match(/.*\/(.+)/);if(e&&e.length>1)return console.log(e),e[1]}return""},enterreplace:function(t){return t?t.replace(/↵/g,"\n"):""}},methods:{enterreplace:function(t){return t?t.replace(/↵/g,"\n"):""},loadnext:function(){var t=this;this.loadingnext=!0,console.log(this.items[this.items.length-1]._id.$oid),v(this.items[this.items.length-1]._id.$oid).then((function(e){console.log(e),t.items=[].concat(Object(p["a"])(t.items),Object(p["a"])(e.reverse())),t.loadingnext=!1}))},comfirmrecord:function(){this.csrc?this.upload(y(10)+this.blob.name,this.blob):(console.log(this.ctext),this.dorecord("text",this.ctext)),this.cclose()},cclose:function(){this.csrc=!1,this.ctext="",this.copyDialogVisible=!1},submit:function(){console.log(111),""!=this.textarea2&&(this.isloading=!0,this.dorecord("text",this.textarea2))},retrieveImageFromClipboardAsBlob:function(t,e){0==t.clipboardData&&"function"==typeof e&&e(void 0);var n=t.clipboardData.items;void 0==n&&"function"==typeof e&&e(void 0);for(var o=0;o<n.length;o++)if(-1!=n[o].type.indexOf("image")||-1!=n[o].type.indexOf("text")){if(-1==n[o].type.indexOf("text")){var i=n[o].getAsFile();"function"==typeof e&&e(i);break}var a=event.clipboardData||window.clipboardData;console.log();var r=a.getData("Text");if(""==r)continue;e(void 0)}},copyContent:function(t){var e=document.createElement("textarea");t=this.enterreplace(t),e.value=t,document.body.appendChild(e),e.select(),console.log(e.value,t),document.execCommand("Copy"),this.$message({message:"复制成功",type:"success"}),e.remove()},del:function(t){console.log(t),this.dialogVisible=!0,this.nowid=t},comfirmdel:function(){var t=this;this.dialogVisible=!1,g(this.nowid).then((function(e){v().then((function(e){t.items=e}))}))},dorecord:function(t,e){var n=this;b({type:t,content:e}).then((function(t){n.textarea2="",n.isloading=!1,n.reflash()}))},handleRemove:function(t,e){},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeUpload:function(t,e){console.log(t,t.name,Object.prototype.toString.call(t));var n=t.name;this.upload(n,t)},upload:function(t,e){var n=this,o=new FormData;o.append("file",e),o.append("name",t),h.a.post("/api/tools/upload/upload",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e,"234241244");var o=new URL(e.data.file),i=o.pathname;/\.(jpg|jpeg|png|GIF|JPG|PNG)$/.test(t)?n.dorecord("img","//easy.maiff.cn"+i):n.dorecord("file","//easy.maiff.cn"+i)})).catch((function(t){console.log(t)}))},handleSuccess:function(t,e){},reflash:function(){var t=this;v().then((function(e){t.items=e}))}}},_=x,w=(n("45a1"),Object(r["a"])(_,d,f,!1,null,"7c5128a4",null)),C=w.exports;o["default"].use(u["a"]);var k=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new u["a"]({routes:k}),j=O,P=n("e1fd"),D=n.n(P),V=(n("f56d"),n("d44b")),$=n.n(V);o["default"].config.productionTip=!1,o["default"].use(D.a),o["default"].use($.a),new o["default"]({router:j,render:function(t){return t(l)}}).$mount("#app")},"5cd9":function(t,e,n){},"85ec":function(t,e,n){}});