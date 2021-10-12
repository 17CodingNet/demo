"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3450],{93450:(e,t,s)=>{s.r(t),s.d(t,{ABCWidgetFactory:()=>w,Base64ModelFactory:()=>F,Context:()=>p,DocumentModel:()=>y,DocumentRegistry:()=>k,DocumentWidget:()=>v,MimeContent:()=>b,MimeDocument:()=>C,MimeDocumentFactory:()=>D,TextModelFactory:()=>f});var i,n=s(38320),a=s(66763),r=s(66119),o=s(46856),h=s(24697),l=s(93315),d=s(79444),c=s(41649),_=s(18151);class p{constructor(e){this._path="",this._useCRLF=!1,this._contentsModel=null,this._populatedPromise=new l.PromiseDelegate,this._isPopulated=!1,this._isReady=!1,this._isDisposed=!1,this._pathChanged=new c.Signal(this),this._fileChanged=new c.Signal(this),this._saveState=new c.Signal(this),this._disposed=new c.Signal(this);const t=this._manager=e.manager;this.translator=e.translator||h.nullTranslator,this._trans=this.translator.load("jupyterlab"),this._factory=e.factory,this._dialogs=e.sessionDialogs||n.sessionContextDialogs,this._opener=e.opener||i.noOp,this._path=this._manager.contents.normalize(e.path);const s=this._manager.contents.localPath(this._path),d=this._factory.preferredLanguage(a.PathExt.basename(s)),_=e.modelDBFactory;if(_){const e=t.contents.localPath(this._path);this._modelDB=_.createNew(e),this._model=this._factory.createNew(d,this._modelDB,!1)}else this._model=this._factory.createNew(d,void 0,!1);const p=this._model.sharedModel,m=p.ydoc;this._ydoc=m,this._ycontext=m.getMap("context");const g=e.docProviderFactory;this._provider=g?g({path:this._path,contentType:this._factory.contentType,ymodel:p}):new r.ProviderMock,this._readyPromise=t.ready.then((()=>this._populatedPromise.promise));const u=a.PathExt.extname(this._path);this.sessionContext=new n.SessionContext({sessionManager:t.sessions,specsManager:t.kernelspecs,path:this._path,type:".ipynb"===u?"notebook":"file",name:a.PathExt.basename(s),kernelPreference:e.kernelPreference||{shouldStart:!1},setBusy:e.setBusy}),this.sessionContext.propertyChanged.connect(this._onSessionChanged,this),t.contents.fileChanged.connect(this._onFileChanged,this);const y=this.urlResolver=new o.RenderMimeRegistry.UrlResolver({path:this._path,contents:t.contents});this._ycontext.set("path",this._path),this._ycontext.observe((e=>{var t;const s=e.changes.keys.get("path");if(s){const e=this._ycontext.get("path");e&&e!==s.oldValue&&(y.path=e,this._path=e,this._provider.setPath(e),this._pathChanged.emit(this.path),null===(t=this.sessionContext.session)||void 0===t||t.setPath(e))}}))}get pathChanged(){return this._pathChanged}get fileChanged(){return this._fileChanged}get saveState(){return this._saveState}get disposed(){return this._disposed}get model(){return this._model}get path(){return this._path}get localPath(){return this._manager.contents.localPath(this._path)}get contentsModel(){return this._contentsModel}get factoryName(){return this.isDisposed?"":this._factory.name}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this.sessionContext.dispose(),this._modelDB&&this._modelDB.dispose(),this._model.dispose(),this._provider.destroy(),this._model.sharedModel.dispose(),this._ydoc.destroy(),this._disposed.emit(void 0),c.Signal.clearData(this))}get isReady(){return this._isReady}get ready(){return this._readyPromise}async initialize(e){const t=await this._provider.acquireLock(),s=await this._provider.requestInitialContent();let i;i=e||s?this._save():this._revert();const n=()=>{this._provider.releaseLock(t)};return i.then((()=>{this._provider.putInitializedState(),this._model.initialize()})).then(n,n),i}rename(e){return this.ready.then((()=>this._manager.ready.then((()=>this._rename(e)))))}async save(){const[e]=await Promise.all([this._provider.acquireLock(),this.ready]);let t;t=this._save(),t=t.then((()=>{this._provider.putInitializedState()}));const s=()=>{this._provider.releaseLock(e)};return t.then(s,s),await t}saveAs(){return this.ready.then((()=>i.getSavePath(this._path))).then((e=>{if(!this.isDisposed&&e)return e===this._path?this.save():this._manager.ready.then((()=>this._manager.contents.get(e))).then((()=>this._maybeOverWrite(e))).catch((t=>{if(!t.response||404!==t.response.status)throw t;return this._finishSaveAs(e)}))}))}async download(){const e=await this._manager.contents.getDownloadUrl(this._path),t=document.createElement("a");t.href=e,t.download="",document.body.appendChild(t),t.click(),document.body.removeChild(t)}async revert(){const[e]=await Promise.all([this._provider.acquireLock(),this.ready]),t=this._revert(),s=()=>{this._provider.releaseLock(e)};return t.then(s,s),await t}createCheckpoint(){const e=this._manager.contents;return this._manager.ready.then((()=>e.createCheckpoint(this._path)))}deleteCheckpoint(e){const t=this._manager.contents;return this._manager.ready.then((()=>t.deleteCheckpoint(this._path,e)))}restoreCheckpoint(e){const t=this._manager.contents,s=this._path;return this._manager.ready.then((()=>e?t.restoreCheckpoint(s,e):this.listCheckpoints().then((i=>{if(!this.isDisposed&&i.length)return e=i[i.length-1].id,t.restoreCheckpoint(s,e)}))))}listCheckpoints(){const e=this._manager.contents;return this._manager.ready.then((()=>e.listCheckpoints(this._path)))}addSibling(e,t={}){const s=this._opener;return s&&s(e,t),new d.DisposableDelegate((()=>{e.close()}))}_onFileChanged(e,t){var s,i,n;if("rename"!==t.type)return;let r=t.oldValue&&t.oldValue.path,o=t.newValue&&t.newValue.path;if(o&&0===this._path.indexOf(r||"")){let e=t.newValue;r!==this._path&&(o=this._path.replace(new RegExp(`^${r}/`),`${o}/`),r=this._path,e={last_modified:null===(s=t.newValue)||void 0===s?void 0:s.created,path:o}),this._path=o,null===(i=this.sessionContext.session)||void 0===i||i.setPath(o);const h=Object.assign(Object.assign({},this._contentsModel),e),l=this._manager.contents.localPath(o);null===(n=this.sessionContext.session)||void 0===n||n.setName(a.PathExt.basename(l)),this._updateContentsModel(h),this._ycontext.set("path",this._path)}}_onSessionChanged(e,t){if("path"!==t)return;const s=this.sessionContext.session.path;s!==this._path&&(this._path=s,this._ycontext.set("path",this._path))}_updateContentsModel(e){const t={path:e.path,name:e.name,type:e.type,content:void 0,writable:e.writable,created:e.created,last_modified:e.last_modified,mimetype:e.mimetype,format:e.format},s=this._contentsModel?this._contentsModel.last_modified:null;this._contentsModel=t,this._ycontext.set("last_modified",t.last_modified),s&&t.last_modified===s||this._fileChanged.emit(t)}_populate(){return this._isPopulated=!0,this._isReady=!0,this._populatedPromise.resolve(void 0),this._maybeCheckpoint(!1).then((()=>{if(this.isDisposed)return;const e=this._model.defaultKernelName||this.sessionContext.kernelPreference.name;this.sessionContext.kernelPreference=Object.assign(Object.assign({},this.sessionContext.kernelPreference),{name:e,language:this._model.defaultKernelLanguage}),this.sessionContext.initialize().then((e=>{e&&this._dialogs.selectKernel(this.sessionContext)}))}))}async _rename(e){var t,s;const i=this.path.split("/");i[i.length-1]=e;const n=i.join("/");await this._manager.contents.rename(this.path,n),await(null===(t=this.sessionContext.session)||void 0===t?void 0:t.setPath(n)),await(null===(s=this.sessionContext.session)||void 0===s?void 0:s.setName(e)),this._path=n,this._ycontext.set("path",this._path)}async _save(){this._saveState.emit("started");const e=this._model;let t;"json"===this._factory.fileFormat?t=e.toJSON():(t=e.toString(),this._useCRLF&&(t=t.replace(/\n/g,"\r\n")));const s={type:this._factory.contentType,format:this._factory.fileFormat,content:t};try{let t;if(await this._manager.ready,t=e.modelDB.isCollaborative?await this._manager.contents.save(this._path,s):await this._maybeSave(s),this.isDisposed)return;e.dirty=!1,this._updateContentsModel(t),this._isPopulated||await this._populate(),this._saveState.emit("completed")}catch(e){if("Cancel"===e.message)throw e;const t=this._manager.contents.localPath(this._path),s=a.PathExt.basename(t);throw this._handleError(e,this._trans.__("File Save Error for %1",s)),this._saveState.emit("failed"),e}}_revert(e=!1){const t={format:this._factory.fileFormat,type:this._factory.contentType,content:null!==this._factory.fileFormat},s=this._path,i=this._model;return this._manager.ready.then((()=>this._manager.contents.get(s,t))).then((t=>{if(!this.isDisposed){if("json"===t.format)i.fromJSON(t.content),e&&i.initialize();else{let s=t.content;-1!==s.indexOf("\r")?(this._useCRLF=!0,s=s.replace(/\r\n/g,"\n")):this._useCRLF=!1,i.fromString(s),e&&i.initialize()}return this._updateContentsModel(t),i.dirty=!1,this._isPopulated?void 0:this._populate()}})).catch((async e=>{const t=this._manager.contents.localPath(this._path),s=a.PathExt.basename(t);throw this._handleError(e,this._trans.__("File Load Error for %1",s)),e}))}_maybeSave(e){const t=this._path;return this._manager.contents.get(t,{content:!1}).then((s=>{var i;if(this.isDisposed)return Promise.reject(new Error("Disposed"));const n=this._ycontext.get("last_modified")||(null===(i=this.contentsModel)||void 0===i?void 0:i.last_modified),a=n?new Date(n):new Date,r=new Date(s.last_modified);return n&&r.getTime()-a.getTime()>500?this._timeConflict(a,s,e):this._manager.contents.save(t,e)}),(s=>{if(s.response&&404===s.response.status)return this._manager.contents.save(t,e);throw s}))}async _handleError(e,t){await(0,n.showErrorMessage)(t,e)}_maybeCheckpoint(e){let t=this._contentsModel&&this._contentsModel.writable,s=Promise.resolve(void 0);return t?(s=e?this.createCheckpoint().then():this.listCheckpoints().then((e=>{if(t=this._contentsModel&&this._contentsModel.writable,!this.isDisposed&&!e.length&&t)return this.createCheckpoint().then()})),s.catch((e=>{if(!e.response||403!==e.response.status)throw e}))):s}_timeConflict(e,t,s){const i=new Date(t.last_modified);console.warn(`Last saving performed ${e} while the current file seems to have been saved ${i}`);const a=this._trans.__('"%1" has changed on disk since the last time it was opened or saved.\nDo you want to overwrite the file on disk with the version open here,\nor load the version on disk (revert)?',this.path),r=n.Dialog.okButton({label:this._trans.__("Revert")}),o=n.Dialog.warnButton({label:this._trans.__("Overwrite")});return(0,n.showDialog)({title:this._trans.__("File Changed"),body:a,buttons:[n.Dialog.cancelButton(),r,o]}).then((e=>this.isDisposed?Promise.reject(new Error("Disposed")):e.button.label===this._trans.__("Overwrite")?this._manager.contents.save(this._path,s):e.button.label===this._trans.__("Revert")?this.revert().then((()=>t)):Promise.reject(new Error("Cancel"))))}_maybeOverWrite(e){const t=this._trans.__('"%1" already exists. Do you want to replace it?',e),s=n.Dialog.warnButton({label:this._trans.__("Overwrite")});return(0,n.showDialog)({title:this._trans.__("File Overwrite?"),body:t,buttons:[n.Dialog.cancelButton(),s]}).then((t=>this.isDisposed?Promise.reject(new Error("Disposed")):t.button.label===this._trans.__("Overwrite")?this._manager.contents.delete(e).then((()=>this._finishSaveAs(e))):void 0))}async _finishSaveAs(e){var t,s;this._path=e,await(null===(t=this.sessionContext.session)||void 0===t?void 0:t.setPath(e)),await(null===(s=this.sessionContext.session)||void 0===s?void 0:s.setName(e.split("/").pop())),await this.save(),this._ycontext.set("path",this._path),await this._maybeCheckpoint(!0)}}!function(e){e.getSavePath=function(e,s){const i=(s=s||h.nullTranslator).load("jupyterlab"),a=n.Dialog.okButton({label:i.__("Save")});return(0,n.showDialog)({title:i.__("Save File As.."),body:new t(e),buttons:[n.Dialog.cancelButton(),a]}).then((e=>{var t;if(e.button.label===i.__("Save"))return null!==(t=e.value)&&void 0!==t?t:void 0}))},e.noOp=function(){};class t extends _.Widget{constructor(e){super({node:s(e)})}getValue(){return this.node.value}}function s(e){const t=document.createElement("input");return t.value=e,t}}(i||(i={}));var m=s(20759),g=s(87276),u=s(78439);class y extends m.CodeEditor.Model{constructor(e,t){super({modelDB:t}),this._defaultLang="",this._dirty=!1,this._readOnly=!1,this._contentChanged=new c.Signal(this),this._stateChanged=new c.Signal(this),this._defaultLang=e||"";const s=new u.YFile;this.switchSharedModel(s,!0),this.value.changed.connect(this.triggerContentChange,this)}get contentChanged(){return this._contentChanged}get stateChanged(){return this._stateChanged}get dirty(){return this._dirty}set dirty(e){if(e===this._dirty)return;const t=this._dirty;this._dirty=e,this.triggerStateChange({name:"dirty",oldValue:t,newValue:e})}get readOnly(){return this._readOnly}set readOnly(e){if(e===this._readOnly)return;const t=this._readOnly;this._readOnly=e,this.triggerStateChange({name:"readOnly",oldValue:t,newValue:e})}get defaultKernelName(){return""}get defaultKernelLanguage(){return this._defaultLang}toString(){return this.value.text}fromString(e){this.value.text=e}toJSON(){return JSON.parse(this.value.text||"null")}fromJSON(e){this.fromString(JSON.stringify(e))}initialize(){}triggerStateChange(e){this._stateChanged.emit(e)}triggerContentChange(){this._contentChanged.emit(void 0),this.dirty=!0}}class f{constructor(){this._isDisposed=!1}get name(){return"text"}get contentType(){return"file"}get fileFormat(){return"text"}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed=!0}createNew(e,t,s){return new y(e,t)}preferredLanguage(e){const t=g.Mode.findByFileName(e);return t&&t.mode}}class F extends f{get name(){return"base64"}get contentType(){return"file"}get fileFormat(){return"base64"}}class w{constructor(e){this._isDisposed=!1,this._widgetCreated=new c.Signal(this),this._translator=e.translator||h.nullTranslator,this._name=e.name,this._readOnly=void 0!==e.readOnly&&e.readOnly,this._defaultFor=e.defaultFor?e.defaultFor.slice():[],this._defaultRendered=(e.defaultRendered||[]).slice(),this._fileTypes=e.fileTypes.slice(),this._modelName=e.modelName||"text",this._preferKernel=!!e.preferKernel,this._canStartKernel=!!e.canStartKernel,this._shutdownOnClose=!!e.shutdownOnClose,this._toolbarFactory=e.toolbarFactory}get widgetCreated(){return this._widgetCreated}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,c.Signal.clearData(this))}get readOnly(){return this._readOnly}get name(){return this._name}get fileTypes(){return this._fileTypes.slice()}get modelName(){return this._modelName}get defaultFor(){return this._defaultFor.slice()}get defaultRendered(){return this._defaultRendered.slice()}get preferKernel(){return this._preferKernel}get canStartKernel(){return this._canStartKernel}get translator(){return this._translator}get shutdownOnClose(){return this._shutdownOnClose}set shutdownOnClose(e){this._shutdownOnClose=e}createNew(e,t){const s=this.createNewWidget(e,t);let i;return i=this._toolbarFactory?this._toolbarFactory(s):this.defaultToolbarFactory(s),i.forEach((({name:e,widget:t})=>{s.toolbar.addItem(e,t)})),this._widgetCreated.emit(s),s}defaultToolbarFactory(e){return[]}}class v extends n.MainAreaWidget{constructor(e){e.reveal=Promise.all([e.reveal,e.context.ready]),super(e),this.context=e.context,this.context.pathChanged.connect(this._onPathChanged,this),this._onPathChanged(this.context,this.context.path),this.context.model.stateChanged.connect(this._onModelStateChanged,this),this.context.ready.then((()=>{this._handleDirtyState()})),this.title.changed.connect(this._onTitleChanged,this)}setFragment(e){}async _onTitleChanged(e){const t=this.title.label,s=this.context.path.split("/").pop();if(t!==s){if(t.length>0&&!/[\/\\:]/.test(t)){const e=this.context.path;if(await this.context.rename(t),this.context.path!==e)return}this.title.label=s}}_onPathChanged(e,t){this.title.label=a.PathExt.basename(e.localPath)}_onModelStateChanged(e,t){"dirty"===t.name&&this._handleDirtyState()}_handleDirtyState(){this.context.model.dirty?this.title.className+=" jp-mod-dirty":this.title.className=this.title.className.replace("jp-mod-dirty","")}}var x,T=s(28685);class b extends _.Widget{constructor(e){super(),this._changeCallback=e=>{if(!e.data||!e.data[this.mimeType])return;const t=e.data[this.mimeType];"string"==typeof t?t!==this._context.model.toString()&&this._context.model.fromString(t):null==t||l.JSONExt.deepEqual(t,this._context.model.toJSON())||this._context.model.fromJSON(t)},this._fragment="",this._ready=new l.PromiseDelegate,this._isRendering=!1,this._renderRequested=!1,this.addClass("jp-MimeDocument"),this.translator=e.translator||h.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.mimeType=e.mimeType,this._dataType=e.dataType||"string",this._context=e.context,this.renderer=e.renderer,(this.layout=new _.StackedLayout).addWidget(this.renderer),this._context.ready.then((()=>this._render())).then((()=>{this.node===document.activeElement&&T.MessageLoop.sendMessage(this.renderer,_.Widget.Msg.ActivateRequest),this._monitor=new a.ActivityMonitor({signal:this._context.model.contentChanged,timeout:e.renderTimeout}),this._monitor.activityStopped.connect(this.update,this),this._ready.resolve(void 0)})).catch((e=>{requestAnimationFrame((()=>{this.dispose()})),(0,n.showErrorMessage)(this._trans.__("Renderer Failure: %1",this._context.path),e)}))}[n.Printing.symbol](){return n.Printing.getPrintFunction(this.renderer)}get ready(){return this._ready.promise}setFragment(e){this._fragment=e,this.update()}dispose(){this.isDisposed||(this._monitor&&this._monitor.dispose(),this._monitor=null,super.dispose())}onUpdateRequest(e){this._context.isReady&&(this._render(),this._fragment="")}async _render(){if(this.isDisposed)return;if(this._isRendering)return void(this._renderRequested=!0);this._renderRequested=!1;const e=this._context,t=e.model,s={};"string"===this._dataType?s[this.mimeType]=t.toString():s[this.mimeType]=t.toJSON();const i=new o.MimeModel({data:s,callback:this._changeCallback,metadata:{fragment:this._fragment}});try{if(this._isRendering=!0,await this.renderer.renderModel(i),this._isRendering=!1,this._renderRequested)return this._render()}catch(t){requestAnimationFrame((()=>{this.dispose()})),(0,n.showErrorMessage)(this._trans.__("Renderer Failure: %1",e.path),t)}}}class C extends v{setFragment(e){this.content.setFragment(e)}}class D extends w{constructor(e){super(x.createRegistryOptions(e)),this._rendermime=e.rendermime,this._renderTimeout=e.renderTimeout||1e3,this._dataType=e.dataType||"string",this._fileType=e.primaryFileType,this._factory=e.factory}createNewWidget(e){var t,s;const i=this._fileType,n=(null==i?void 0:i.mimeTypes.length)?i.mimeTypes[0]:"text/plain",a=this._rendermime.clone({resolver:e.urlResolver});let r;r=this._factory&&this._factory.mimeTypes.includes(n)?this._factory.createRenderer({mimeType:n,resolver:a.resolver,sanitizer:a.sanitizer,linkHandler:a.linkHandler,latexTypesetter:a.latexTypesetter}):a.createRenderer(n);const o=new b({context:e,renderer:r,mimeType:n,renderTimeout:this._renderTimeout,dataType:this._dataType});return o.title.icon=null==i?void 0:i.icon,o.title.iconClass=null!==(t=null==i?void 0:i.iconClass)&&void 0!==t?t:"",o.title.iconLabel=null!==(s=null==i?void 0:i.iconLabel)&&void 0!==s?s:"",new C({content:o,context:e})}}!function(e){e.createRegistryOptions=function(e){return Object.assign(Object.assign({},e),{readOnly:!0})}}(x||(x={}));var O,S=s(91858),P=s(58623);class k{constructor(e={}){this._modelFactories=Object.create(null),this._widgetFactories=Object.create(null),this._defaultWidgetFactory="",this._defaultWidgetFactoryOverrides=Object.create(null),this._defaultWidgetFactories=Object.create(null),this._defaultRenderedWidgetFactories=Object.create(null),this._widgetFactoriesForFileType=Object.create(null),this._fileTypes=[],this._extenders=Object.create(null),this._changed=new c.Signal(this),this._isDisposed=!1;const t=e.textModelFactory;if(this.translator=e.translator||h.nullTranslator,t&&"text"!==t.name)throw new Error("Text model factory must have the name `text`");this._modelFactories.text=t||new f,(e.initialFileTypes||k.getDefaultFileTypes(this.translator)).forEach((e=>{const t=Object.assign(Object.assign({},k.getFileTypeDefaults(this.translator)),e);this._fileTypes.push(t)}))}get changed(){return this._changed}get isDisposed(){return this._isDisposed}dispose(){if(!this.isDisposed){this._isDisposed=!0;for(const e in this._modelFactories)this._modelFactories[e].dispose();for(const e in this._widgetFactories)this._widgetFactories[e].dispose();for(const e in this._extenders)this._extenders[e].length=0;this._fileTypes.length=0,c.Signal.clearData(this)}}addWidgetFactory(e){const t=e.name.toLowerCase();if(!t||"default"===t)throw Error("Invalid factory name");if(this._widgetFactories[t])return console.warn(`Duplicate registered factory ${t}`),new d.DisposableDelegate(O.noOp);this._widgetFactories[t]=e;for(const s of e.defaultFor||[])-1!==e.fileTypes.indexOf(s)&&("*"===s?this._defaultWidgetFactory=t:this._defaultWidgetFactories[s]=t);for(const s of e.defaultRendered||[])-1!==e.fileTypes.indexOf(s)&&(this._defaultRenderedWidgetFactories[s]=t);for(const s of e.fileTypes)this._widgetFactoriesForFileType[s]||(this._widgetFactoriesForFileType[s]=[]),this._widgetFactoriesForFileType[s].push(t);return this._changed.emit({type:"widgetFactory",name:t,change:"added"}),new d.DisposableDelegate((()=>{delete this._widgetFactories[t],this._defaultWidgetFactory===t&&(this._defaultWidgetFactory="");for(const e of Object.keys(this._defaultWidgetFactories))this._defaultWidgetFactories[e]===t&&delete this._defaultWidgetFactories[e];for(const e of Object.keys(this._defaultRenderedWidgetFactories))this._defaultRenderedWidgetFactories[e]===t&&delete this._defaultRenderedWidgetFactories[e];for(const e of Object.keys(this._widgetFactoriesForFileType))P.ArrayExt.removeFirstOf(this._widgetFactoriesForFileType[e],t),0===this._widgetFactoriesForFileType[e].length&&delete this._widgetFactoriesForFileType[e];for(const e of Object.keys(this._defaultWidgetFactoryOverrides))this._defaultWidgetFactoryOverrides[e]===t&&delete this._defaultWidgetFactoryOverrides[e];this._changed.emit({type:"widgetFactory",name:t,change:"removed"})}))}addModelFactory(e){const t=e.name.toLowerCase();return this._modelFactories[t]?(console.warn(`Duplicate registered factory ${t}`),new d.DisposableDelegate(O.noOp)):(this._modelFactories[t]=e,this._changed.emit({type:"modelFactory",name:t,change:"added"}),new d.DisposableDelegate((()=>{delete this._modelFactories[t],this._changed.emit({type:"modelFactory",name:t,change:"removed"})})))}addWidgetExtension(e,t){(e=e.toLowerCase())in this._extenders||(this._extenders[e]=[]);const s=this._extenders[e];return-1!==P.ArrayExt.firstIndexOf(s,t)?(console.warn(`Duplicate registered extension for ${e}`),new d.DisposableDelegate(O.noOp)):(this._extenders[e].push(t),this._changed.emit({type:"widgetExtension",name:e,change:"added"}),new d.DisposableDelegate((()=>{P.ArrayExt.removeFirstOf(this._extenders[e],t),this._changed.emit({type:"widgetExtension",name:e,change:"removed"})})))}addFileType(e){const t=Object.assign(Object.assign(Object.assign({},k.getFileTypeDefaults(this.translator)),e),!(e.icon||e.iconClass)&&{icon:S.fileIcon});return this._fileTypes.push(t),this._changed.emit({type:"fileType",name:t.name,change:"added"}),new d.DisposableDelegate((()=>{P.ArrayExt.removeFirstOf(this._fileTypes,t),this._changed.emit({type:"fileType",name:e.name,change:"removed"})}))}preferredWidgetFactories(e){const t=new Set,s=this.getFileTypesForPath(a.PathExt.basename(e));s.forEach((e=>{e.name in this._defaultWidgetFactoryOverrides&&t.add(this._defaultWidgetFactoryOverrides[e.name])})),s.forEach((e=>{e.name in this._defaultWidgetFactories&&t.add(this._defaultWidgetFactories[e.name])})),s.forEach((e=>{e.name in this._defaultRenderedWidgetFactories&&t.add(this._defaultRenderedWidgetFactories[e.name])})),this._defaultWidgetFactory&&t.add(this._defaultWidgetFactory),s.forEach((e=>{e.name in this._widgetFactoriesForFileType&&(0,P.each)(this._widgetFactoriesForFileType[e.name],(e=>{t.add(e)}))})),"*"in this._widgetFactoriesForFileType&&(0,P.each)(this._widgetFactoriesForFileType["*"],(e=>{t.add(e)}));const i=[];return t.forEach((e=>{const t=this._widgetFactories[e];t&&(t.modelName||"text")in this._modelFactories&&i.push(t)})),i}defaultRenderedWidgetFactory(e){const t=this.getFileTypesForPath(a.PathExt.basename(e));let s;for(const e of t)if(e.name in this._defaultRenderedWidgetFactories){s=this._widgetFactories[this._defaultRenderedWidgetFactories[e.name]];break}return s||this.defaultWidgetFactory(e)}defaultWidgetFactory(e){return e?this.preferredWidgetFactories(e)[0]:this._widgetFactories[this._defaultWidgetFactory]}setDefaultWidgetFactory(e,t){if(e=e.toLowerCase(),!this.getFileType(e))throw Error(`Cannot find file type ${e}`);if(!t)return void(this._defaultWidgetFactoryOverrides[e]&&delete this._defaultWidgetFactoryOverrides[e]);if(!this.getWidgetFactory(t))throw Error(`Cannot find widget factory ${t}`);t=t.toLowerCase();const s=this._widgetFactoriesForFileType[e];if(!(t===this._defaultWidgetFactory||s&&s.includes(t)))throw Error(`Factory ${t} cannot view file type ${e}`);this._defaultWidgetFactoryOverrides[e]=t}widgetFactories(){return(0,P.map)(Object.keys(this._widgetFactories),(e=>this._widgetFactories[e]))}modelFactories(){return(0,P.map)(Object.keys(this._modelFactories),(e=>this._modelFactories[e]))}widgetExtensions(e){return(e=e.toLowerCase())in this._extenders?new P.ArrayIterator(this._extenders[e]):(0,P.empty)()}fileTypes(){return new P.ArrayIterator(this._fileTypes)}getWidgetFactory(e){return this._widgetFactories[e.toLowerCase()]}getModelFactory(e){return this._modelFactories[e.toLowerCase()]}getFileType(e){return e=e.toLowerCase(),(0,P.find)(this._fileTypes,(t=>t.name.toLowerCase()===e))}getKernelPreference(e,t,s){t=t.toLowerCase();const i=this._widgetFactories[t];if(!i)return;const n=this.getModelFactory(i.modelName||"text");if(!n)return;const r=n.preferredLanguage(a.PathExt.basename(e)),o=s&&s.name;return{id:s&&s.id,name:o,language:r,shouldStart:i.preferKernel,canStart:i.canStartKernel,shutdownOnDispose:i.shutdownOnClose}}getFileTypeForModel(e){switch(e.type){case"directory":return(0,P.find)(this._fileTypes,(e=>"directory"===e.contentType))||k.getDefaultDirectoryFileType(this.translator);case"notebook":return(0,P.find)(this._fileTypes,(e=>"notebook"===e.contentType))||k.getDefaultNotebookFileType(this.translator);default:if(e.name||e.path){const t=e.name||a.PathExt.basename(e.path),s=this.getFileTypesForPath(t);if(s.length>0)return s[0]}return this.getFileType("text")||k.getDefaultTextFileType(this.translator)}}getFileTypesForPath(e){const t=[],s=a.PathExt.basename(e);let i=(0,P.find)(this._fileTypes,(e=>!(!e.pattern||null===s.match(e.pattern))));i&&t.push(i);let n=O.extname(s);for(;n.length>1;)i=(0,P.find)(this._fileTypes,(e=>-1!==e.extensions.indexOf(n))),i&&t.push(i),n="."+n.split(".").slice(2).join(".");return t}}!function(e){function t(e){return{name:"default",displayName:(null==(e=e||h.nullTranslator)?void 0:e.load("jupyterlab")).__("default"),extensions:[],mimeTypes:[],contentType:"file",fileFormat:"text"}}function s(e){const s=null==(e=e||h.nullTranslator)?void 0:e.load("jupyterlab"),i=t(e);return Object.assign(Object.assign({},i),{name:"text",displayName:s.__("Text"),mimeTypes:["text/plain"],extensions:[".txt"],icon:S.fileIcon})}function i(e){const s=null==(e=e||h.nullTranslator)?void 0:e.load("jupyterlab");return Object.assign(Object.assign({},t(e)),{name:"notebook",displayName:s.__("Notebook"),mimeTypes:["application/x-ipynb+json"],extensions:[".ipynb"],contentType:"notebook",fileFormat:"json",icon:S.notebookIcon})}function n(e){const s=null==(e=e||h.nullTranslator)?void 0:e.load("jupyterlab");return Object.assign(Object.assign({},t(e)),{name:"directory",displayName:s.__("Directory"),extensions:[],mimeTypes:["text/directory"],contentType:"directory",icon:S.folderIcon})}e.getFileTypeDefaults=t,e.getDefaultTextFileType=s,e.getDefaultNotebookFileType=i,e.getDefaultDirectoryFileType=n,e.getDefaultFileTypes=function(e){const t=null==(e=e||h.nullTranslator)?void 0:e.load("jupyterlab");return[s(e),i(e),n(e),{name:"markdown",displayName:t.__("Markdown File"),extensions:[".md"],mimeTypes:["text/markdown"],icon:S.markdownIcon},{name:"PDF",displayName:t.__("PDF File"),extensions:[".pdf"],mimeTypes:["application/pdf"],icon:S.pdfIcon},{name:"python",displayName:t.__("Python File"),extensions:[".py"],mimeTypes:["text/x-python"],icon:S.pythonIcon},{name:"json",displayName:t.__("JSON File"),extensions:[".json"],mimeTypes:["application/json"],icon:S.jsonIcon},{name:"julia",displayName:t.__("Julia File"),extensions:[".jl"],mimeTypes:["text/x-julia"],icon:S.juliaIcon},{name:"csv",displayName:t.__("CSV File"),extensions:[".csv"],mimeTypes:["text/csv"],icon:S.spreadsheetIcon},{name:"tsv",displayName:t.__("TSV File"),extensions:[".tsv"],mimeTypes:["text/csv"],icon:S.spreadsheetIcon},{name:"r",displayName:t.__("R File"),mimeTypes:["text/x-rsrc"],extensions:[".r"],icon:S.rKernelIcon},{name:"yaml",displayName:t.__("YAML File"),mimeTypes:["text/x-yaml","text/yaml"],extensions:[".yaml",".yml"],icon:S.yamlIcon},{name:"svg",displayName:t.__("Image"),mimeTypes:["image/svg+xml"],extensions:[".svg"],icon:S.imageIcon,fileFormat:"base64"},{name:"tiff",displayName:t.__("Image"),mimeTypes:["image/tiff"],extensions:[".tif",".tiff"],icon:S.imageIcon,fileFormat:"base64"},{name:"jpeg",displayName:t.__("Image"),mimeTypes:["image/jpeg"],extensions:[".jpg",".jpeg"],icon:S.imageIcon,fileFormat:"base64"},{name:"gif",displayName:t.__("Image"),mimeTypes:["image/gif"],extensions:[".gif"],icon:S.imageIcon,fileFormat:"base64"},{name:"png",displayName:t.__("Image"),mimeTypes:["image/png"],extensions:[".png"],icon:S.imageIcon,fileFormat:"base64"},{name:"bmp",displayName:t.__("Image"),mimeTypes:["image/bmp"],extensions:[".bmp"],icon:S.imageIcon,fileFormat:"base64"}]}}(k||(k={})),function(e){e.extname=function(e){const t=a.PathExt.basename(e).split(".");return t.shift(),("."+t.join(".")).toLowerCase()},e.noOp=function(){}}(O||(O={}))}}]);
//# sourceMappingURL=3450.0da4371bd9ca4487ca3f.js.map