(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8603,6616,709,6178,2630],{79484:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityMonitor=void 0;const o=n(41649);t.ActivityMonitor=class{constructor(e){this._timer=-1,this._timeout=-1,this._isDisposed=!1,this._activityStopped=new o.Signal(this),e.signal.connect(this._onSignalFired,this),this._timeout=e.timeout||1e3}get activityStopped(){return this._activityStopped}get timeout(){return this._timeout}set timeout(e){this._timeout=e}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,o.Signal.clearData(this))}_onSignalFired(e,t){clearTimeout(this._timer),this._sender=e,this._args=t,this._timer=setTimeout((()=>{this._activityStopped.emit({sender:this._sender,args:this._args})}),this._timeout)}}},60103:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),s=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),s(n(79484),t),s(n(88214),t),s(n(6431),t),s(n(83413),t),s(n(38297),t),s(n(42340),t),s(n(17722),t),s(n(97048),t)},88214:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},6431:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MarkdownCodeBlocks=void 0,function(e){e.CODE_BLOCK_MARKER="```";const t=[".markdown",".mdown",".mkdn",".md",".mkd",".mdwn",".mdtxt",".mdtext",".text",".txt",".Rmd"];class n{constructor(e){this.startLine=e,this.code="",this.endLine=-1}}e.MarkdownCodeBlock=n,e.isMarkdown=function(e){return t.indexOf(e)>-1},e.findMarkdownCodeBlocks=function(t){if(!t||""===t)return[];const o=t.split("\n"),s=[];let r=null;for(let t=0;t<o.length;t++){const i=o[t],a=0===i.indexOf(e.CODE_BLOCK_MARKER),u=null!=r;if(a||u)if(u)r&&(a?(r.endLine=t-1,s.push(r),r=null):r.code+=i+"\n");else{r=new n(t);const o=i.indexOf(e.CODE_BLOCK_MARKER),a=i.lastIndexOf(e.CODE_BLOCK_MARKER);o!==a&&(r.code=i.substring(o+e.CODE_BLOCK_MARKER.length,a),r.endLine=t,s.push(r),r=null)}}return s}}(t.MarkdownCodeBlocks||(t.MarkdownCodeBlocks={}))},83413:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var process=__webpack_require__(34406),__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PageConfig=void 0;const coreutils_1=__webpack_require__(93315),minimist_1=__importDefault(__webpack_require__(33649)),url_1=__webpack_require__(97048);var PageConfig;(function(PageConfig){function getOption(name){if(configData)return configData[name]||getBodyData(name);configData=Object.create(null);let found=!1;if("undefined"!=typeof document&&document){const e=document.getElementById("jupyter-config-data");e&&(configData=JSON.parse(e.textContent||""),found=!0)}if(!found&&process.argv)try{const cli=minimist_1.default(process.argv.slice(2)),path=__webpack_require__(21023);let fullPath="";"jupyter-config-data"in cli?fullPath=path.resolve(cli["jupyter-config-data"]):"JUPYTER_CONFIG_DATA"in{}&&(fullPath=path.resolve({}.JUPYTER_CONFIG_DATA)),fullPath&&(configData=eval("require")(fullPath))}catch(e){console.error(e)}if(coreutils_1.JSONExt.isObject(configData))for(const e in configData)"string"!=typeof configData[e]&&(configData[e]=JSON.stringify(configData[e]));else configData=Object.create(null);return configData[name]||getBodyData(name)}function setOption(e,t){const n=getOption(e);return configData[e]=t,n}function getBaseUrl(){return url_1.URLExt.normalize(getOption("baseUrl")||"/")}function getTreeUrl(){return url_1.URLExt.join(getBaseUrl(),getOption("treeUrl"))}function getShareUrl(){return url_1.URLExt.normalize(getOption("shareUrl")||getBaseUrl())}function getTreeShareUrl(){return url_1.URLExt.normalize(url_1.URLExt.join(getShareUrl(),getOption("treeUrl")))}function getUrl(e){var t,n,o;let s=getOption("baseUrl")||"/";const r=null!==(t=e.mode)&&void 0!==t?t:getOption("mode"),i=null!==(n=e.workspace)&&void 0!==n?n:getOption("workspace"),a="multiple-document"===r?"lab":"doc";s=url_1.URLExt.join(s,a),i!==PageConfig.defaultWorkspace&&(s=url_1.URLExt.join(s,"workspaces",encodeURIComponent(getOption("workspace"))));const u=null!==(o=e.treePath)&&void 0!==o?o:getOption("treePath");return u&&(s=url_1.URLExt.join(s,"tree",url_1.URLExt.encodeParts(u))),s}function getWsUrl(e){let t=getOption("wsUrl");if(!t){if(0!==(e=e?url_1.URLExt.normalize(e):getBaseUrl()).indexOf("http"))return"";t="ws"+e.slice(4)}return url_1.URLExt.normalize(t)}function getNBConvertURL({path:e,format:t,download:n}){const o=url_1.URLExt.encodeParts(e),s=url_1.URLExt.join(getBaseUrl(),"nbconvert",t,o);return n?s+"?download=true":s}function getToken(){return getOption("token")||getBodyData("jupyterApiToken")}function getNotebookVersion(){const e=getOption("notebookVersion");return""===e?[0,0,0]:JSON.parse(e)}PageConfig.getOption=getOption,PageConfig.setOption=setOption,PageConfig.getBaseUrl=getBaseUrl,PageConfig.getTreeUrl=getTreeUrl,PageConfig.getShareUrl=getShareUrl,PageConfig.getTreeShareUrl=getTreeShareUrl,PageConfig.getUrl=getUrl,PageConfig.defaultWorkspace="default",PageConfig.getWsUrl=getWsUrl,PageConfig.getNBConvertURL=getNBConvertURL,PageConfig.getToken=getToken,PageConfig.getNotebookVersion=getNotebookVersion;let configData=null,Extension;function getBodyData(e){if("undefined"==typeof document||!document.body)return"";const t=document.body.dataset[e];return void 0===t?"":decodeURIComponent(t)}!function(e){function t(e){try{const t=getOption(e);if(t)return JSON.parse(t)}catch(t){console.warn(`Unable to parse ${e}.`,t)}return[]}e.deferred=t("deferredExtensions"),e.disabled=t("disabledExtensions"),e.isDeferred=function(t){const n=t.indexOf(":");let o="";return-1!==n&&(o=t.slice(0,n)),e.deferred.some((e=>e===t||o&&e===o))},e.isDisabled=function(t){const n=t.indexOf(":");let o="";return-1!==n&&(o=t.slice(0,n)),e.disabled.some((e=>e===t||o&&e===o))}}(Extension=PageConfig.Extension||(PageConfig.Extension={}))})(PageConfig=exports.PageConfig||(exports.PageConfig={}))},38297:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PathExt=void 0;const o=n(21023);!function(e){function t(e){return 0===e.indexOf("/")&&(e=e.slice(1)),e}e.join=function(...e){const n=o.posix.join(...e);return"."===n?"":t(n)},e.basename=function(e,t){return o.posix.basename(e,t)},e.dirname=function(e){const n=t(o.posix.dirname(e));return"."===n?"":n},e.extname=function(e){return o.posix.extname(e)},e.normalize=function(e){return""===e?"":t(o.posix.normalize(e))},e.resolve=function(...e){return t(o.posix.resolve(...e))},e.relative=function(e,n){return t(o.posix.relative(e,n))},e.normalizeExtension=function(e){return e.length>0&&0!==e.indexOf(".")&&(e=`.${e}`),e},e.removeSlash=t}(t.PathExt||(t.PathExt={}))},42340:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0,function(e){const t="𝐚".length>1;e.jsIndexToCharIndex=function(e,n){if(t)return e;let o=e;for(let t=0;t+1<n.length&&t<e;t++){const e=n.charCodeAt(t);if(e>=55296&&e<=56319){const e=n.charCodeAt(t+1);e>=56320&&e<=57343&&(o--,t++)}}return o},e.charIndexToJsIndex=function(e,n){if(t)return e;let o=e;for(let e=0;e+1<n.length&&e<o;e++){const t=n.charCodeAt(e);if(t>=55296&&t<=56319){const t=n.charCodeAt(e+1);t>=56320&&t<=57343&&(o++,e++)}}return o},e.camelCase=function(e,t=!1){return e.replace(/^(\w)|[\s-_:]+(\w)/g,(function(e,n,o){return o?o.toUpperCase():t?n.toUpperCase():n.toLowerCase()}))},e.titleCase=function(e){return(e||"").toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}}(t.Text||(t.Text={}))},17722:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Time=void 0;const s=o(n(19034));var r;(r=t.Time||(t.Time={})).formatHuman=function(e){s.default.locale(document.documentElement.lang);let t=s.default(e).fromNow();return t="a few seconds ago"===t?"seconds ago":t,t},r.format=function(e,t="YYYY-MM-DD HH:mm"){return s.default(e).format(t)}},97048:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.URLExt=void 0;const s=n(21023),r=o(n(64846));!function(e){function t(e){if("undefined"!=typeof document&&document){const t=document.createElement("a");return t.href=e,t}return r.default(e)}function n(...e){const t=r.default(e[0],{}),n=`${t.protocol}${t.slashes?"//":""}${t.auth}${t.auth?"@":""}${t.host}`,o=s.posix.join(`${n&&"/"!==t.pathname[0]?"/":""}${t.pathname}`,...e.slice(1));return`${n}${"."===o?"":o}`}e.parse=t,e.getHostName=function(e){return r.default(e).hostname},e.normalize=function(e){return e&&t(e).toString()},e.join=n,e.encodeParts=function(e){return n(...e.split("/").map(encodeURIComponent))},e.objectToQueryString=function(e){const t=Object.keys(e).filter((e=>e.length>0));return t.length?"?"+t.map((t=>{const n=encodeURIComponent(String(e[t]));return t+(n?"="+n:"")})).join("&"):""},e.queryStringToObject=function(e){return e.replace(/^\?/,"").split("&").reduce(((e,t)=>{const[n,o]=t.split("=");return n.length>0&&(e[n]=decodeURIComponent(o||"")),e}),{})},e.isLocal=function(e){const{protocol:n}=t(e);return(!n||0!==e.toLowerCase().indexOf(n))&&0!==e.indexOf("/")}}(t.URLExt||(t.URLExt={}))},96616:(e,t,n)=>{var o={"./af":95191,"./af.js":95191,"./ar":54358,"./ar-dz":71727,"./ar-dz.js":71727,"./ar-kw":98279,"./ar-kw.js":98279,"./ar-ly":87895,"./ar-ly.js":87895,"./ar-ma":11987,"./ar-ma.js":11987,"./ar-sa":52796,"./ar-sa.js":52796,"./ar-tn":12386,"./ar-tn.js":12386,"./ar.js":54358,"./az":57452,"./az.js":57452,"./be":79053,"./be.js":79053,"./bg":65428,"./bg.js":65428,"./bm":21569,"./bm.js":21569,"./bn":56212,"./bn-bd":24635,"./bn-bd.js":24635,"./bn.js":56212,"./bo":13667,"./bo.js":13667,"./br":192,"./br.js":192,"./bs":51802,"./bs.js":51802,"./ca":19118,"./ca.js":19118,"./cs":39990,"./cs.js":39990,"./cv":30557,"./cv.js":30557,"./cy":4227,"./cy.js":4227,"./da":95406,"./da.js":95406,"./de":87994,"./de-at":44139,"./de-at.js":44139,"./de-ch":86591,"./de-ch.js":86591,"./de.js":87994,"./dv":94649,"./dv.js":94649,"./el":14453,"./el.js":14453,"./en-au":48428,"./en-au.js":48428,"./en-ca":36972,"./en-ca.js":36972,"./en-gb":13224,"./en-gb.js":13224,"./en-ie":18843,"./en-ie.js":18843,"./en-il":32732,"./en-il.js":32732,"./en-in":76579,"./en-in.js":76579,"./en-nz":29851,"./en-nz.js":29851,"./en-sg":70442,"./en-sg.js":70442,"./eo":10654,"./eo.js":10654,"./es":63621,"./es-do":68791,"./es-do.js":68791,"./es-mx":67278,"./es-mx.js":67278,"./es-us":60717,"./es-us.js":60717,"./es.js":63621,"./et":72404,"./et.js":72404,"./eu":62944,"./eu.js":62944,"./fa":30496,"./fa.js":30496,"./fi":98137,"./fi.js":98137,"./fil":32872,"./fil.js":32872,"./fo":6545,"./fo.js":6545,"./fr":49090,"./fr-ca":13049,"./fr-ca.js":13049,"./fr-ch":12338,"./fr-ch.js":12338,"./fr.js":49090,"./fy":95088,"./fy.js":95088,"./ga":77812,"./ga.js":77812,"./gd":8374,"./gd.js":8374,"./gl":63649,"./gl.js":63649,"./gom-deva":52674,"./gom-deva.js":52674,"./gom-latn":44948,"./gom-latn.js":44948,"./gu":24033,"./gu.js":24033,"./he":10175,"./he.js":10175,"./hi":58055,"./hi.js":58055,"./hr":41678,"./hr.js":41678,"./hu":85111,"./hu.js":85111,"./hy-am":26530,"./hy-am.js":26530,"./id":19126,"./id.js":19126,"./is":11696,"./is.js":11696,"./it":98710,"./it-ch":38821,"./it-ch.js":38821,"./it.js":98710,"./ja":93974,"./ja.js":93974,"./jv":70648,"./jv.js":70648,"./ka":54731,"./ka.js":54731,"./kk":43501,"./kk.js":43501,"./km":84398,"./km.js":84398,"./kn":91825,"./kn.js":91825,"./ko":13729,"./ko.js":13729,"./ku":19670,"./ku.js":19670,"./ky":78797,"./ky.js":78797,"./lb":50627,"./lb.js":50627,"./lo":65859,"./lo.js":65859,"./lt":80355,"./lt.js":80355,"./lv":10195,"./lv.js":10195,"./me":45324,"./me.js":45324,"./mi":11689,"./mi.js":11689,"./mk":61308,"./mk.js":61308,"./ml":85241,"./ml.js":85241,"./mn":76320,"./mn.js":76320,"./mr":96771,"./mr.js":96771,"./ms":20503,"./ms-my":77748,"./ms-my.js":77748,"./ms.js":20503,"./mt":55534,"./mt.js":55534,"./my":62727,"./my.js":62727,"./nb":7550,"./nb.js":7550,"./ne":49899,"./ne.js":49899,"./nl":41228,"./nl-be":31225,"./nl-be.js":31225,"./nl.js":41228,"./nn":97130,"./nn.js":97130,"./oc-lnc":93130,"./oc-lnc.js":93130,"./pa-in":91282,"./pa-in.js":91282,"./pl":28190,"./pl.js":28190,"./pt":41549,"./pt-br":78135,"./pt-br.js":78135,"./pt.js":41549,"./ro":307,"./ro.js":307,"./ru":89272,"./ru.js":89272,"./sd":79248,"./sd.js":79248,"./se":74969,"./se.js":74969,"./si":65522,"./si.js":65522,"./sk":61581,"./sk.js":61581,"./sl":56428,"./sl.js":56428,"./sq":34611,"./sq.js":34611,"./sr":19821,"./sr-cyrl":20185,"./sr-cyrl.js":20185,"./sr.js":19821,"./ss":35029,"./ss.js":35029,"./sv":80939,"./sv.js":80939,"./sw":73107,"./sw.js":73107,"./ta":72304,"./ta.js":72304,"./te":72550,"./te.js":72550,"./tet":99717,"./tet.js":99717,"./tg":87669,"./tg.js":87669,"./th":94959,"./th.js":94959,"./tk":92661,"./tk.js":92661,"./tl-ph":52234,"./tl-ph.js":52234,"./tlh":94120,"./tlh.js":94120,"./tr":81111,"./tr.js":81111,"./tzl":53080,"./tzl.js":53080,"./tzm":88246,"./tzm-latn":25385,"./tzm-latn.js":25385,"./tzm.js":88246,"./ug-cn":48777,"./ug-cn.js":48777,"./uk":2014,"./uk.js":2014,"./ur":45953,"./ur.js":45953,"./uz":89716,"./uz-latn":87791,"./uz-latn.js":87791,"./uz.js":89716,"./vi":99816,"./vi.js":99816,"./x-pseudo":94450,"./x-pseudo.js":94450,"./yo":22556,"./yo.js":22556,"./zh-cn":7414,"./zh-cn.js":7414,"./zh-hk":50824,"./zh-hk.js":50824,"./zh-mo":88589,"./zh-mo.js":88589,"./zh-tw":63285,"./zh-tw.js":63285};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=r,e.exports=s,s.id=96616}}]);
//# sourceMappingURL=8603.5e19e252cdefbf8fc774.js.map