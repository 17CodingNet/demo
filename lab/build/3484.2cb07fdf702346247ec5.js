"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3484],{83484:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});const i=new(n(93315).Token)("@jupyterlite/contents:IContents");var o=n(1468),r=n(3580),a=n(41649),s=n(75486),c=n.n(s);const l="JupyterLite Storage";class m{constructor(){this._serverContents=new Map,this._isDisposed=!1,this._fileChanged=new a.Signal(this),this._storage=c().createInstance({name:l,description:"Offline Storage for Notebooks and Files",storeName:"files",version:1}),this._counters=c().createInstance({name:l,description:"Store the current file suffix counters",storeName:"counters",version:1}),this._checkpoints=c().createInstance({name:l,description:"Offline Storage for Checkpoints",storeName:"checkpoints",version:1})}get fileChanged(){return this._fileChanged}get isDisposed(){return this._isDisposed}get serverSettings(){return r.ServerConnection.makeSettings()}dispose(){throw new Error("Method not implemented.")}async newUntitled(e){var t,n,i;const o=null!==(t=null==e?void 0:e.path)&&void 0!==t?t:"",r=null!==(n=null==e?void 0:e.type)&&void 0!==n?n:"notebook",a=(new Date).toISOString(),s=o?`${o}/`:"";let c,l="";switch(r){case"directory":l+=`Untitled Folder${await this._incrementCounter("directory")||""}`,c={name:l,path:`${s}${l}`,last_modified:a,created:a,format:"text",mimetype:"",content:null,size:void 0,writable:!0,type:"directory"};break;case"file":{const t=null!==(i=null==e?void 0:e.ext)&&void 0!==i?i:".txt";l+=`untitled${await this._incrementCounter("file")||""}${t}`,c={name:l,path:`${s}${l}`,last_modified:a,created:a,format:"text",mimetype:"text/plain",content:"",size:0,writable:!0,type:"file"};break}default:l+=`Untitled${await this._incrementCounter("notebook")||""}.ipynb`,c={name:l,path:`${s}${l}`,last_modified:a,created:a,format:"json",mimetype:"application/json",content:d.EMPTY_NB,size:JSON.stringify(d.EMPTY_NB).length,writable:!0,type:"notebook"}}const m=`${s}${l}`;return await this._storage.setItem(m,c),c}async copy(e,t){let n=o.PathExt.basename(e);for(t=""===t?"":`${t.slice(1)}/`;await this.get(`${t}${n}`,{content:!0});){const e=o.PathExt.extname(n),t=n.replace(e,"");n=`${t} (copy)${e}`}const i=`${t}${n}`;let r=await this.get(e,{content:!0});return r={...r,name:n,path:i},await this._storage.setItem(i,r),r}async get(e,t){if(""===(e=decodeURIComponent(e.replace(/^\//,""))))return await this.getFolder(e);const n=await this._storage.getItem(e),i=await this.getServerContents(e,t),r=n||i;if(!r)throw Error(`Could not find file with path ${e}`);if(!(null==t?void 0:t.content))return{...r,content:null,size:void 0};if("directory"===r.type){const t=new Map;await this._storage.iterate(((n,i)=>{const o=n;i===`${e}/${o.name}`&&t.set(o.name,o)}));const n=i?i.content:Array.from((await this.getServerDirectory(e)).values());for(const e of n)t.has(e.name)||t.set(e.name,e);const a=[...t.values()];return{name:o.PathExt.basename(e),path:e,last_modified:r.last_modified,created:r.created,format:"json",mimetype:"application/json",content:a,size:void 0,writable:!0,type:"directory"}}return r}async getFolder(e){const t=new Map;await this._storage.iterate(((e,n)=>{if(n.includes("/"))return;const i=e;t.set(i.path,i)}));for(const n of(await this.getServerDirectory(e)).values())t.has(n.path)||t.set(n.path,n);return{name:"",path:e,last_modified:new Date(0).toISOString(),created:new Date(0).toISOString(),format:"json",mimetype:"application/json",content:Array.from(t.values()),size:void 0,writable:!0,type:"directory"}}async getServerDirectory(e){const t=this._serverContents.get(e)||new Map;if(!this._serverContents.has(e)){const n=o.URLExt.join(o.PageConfig.getBaseUrl(),"api/contents",e,"all.json");try{const e=await fetch(n),i=JSON.parse(await e.text());for(const e of i.content)t.set(e.name,e)}catch(e){console.warn(`don't worry, about ${e}... nothing's broken. if there had been a\n          file at ${n}, you might see some more files.`)}this._serverContents.set(e,t)}return t}async getServerContents(e,t){const n=o.PathExt.basename(e);let i=(await this.getServerDirectory(o.URLExt.join(e,".."))).get(n)||{name:n,path:e,last_modified:new Date(0).toISOString(),created:new Date(0).toISOString(),format:"text",mimetype:"text/plain",type:"file",writable:!0,content:null};if(null==t?void 0:t.content)if("directory"===i.type){const t=await this.getServerDirectory(e);i={...i,content:Array.from(t.values())}}else{const t=o.URLExt.join(o.PageConfig.getBaseUrl(),"files",e),n=await fetch(t);if(!n.ok)return null;const r=i.mimetype||n.headers.get("Content-Type");i="notebook"===i.type||-1!==(null==r?void 0:r.indexOf("json"))||e.match(/\.(ipynb|[^/]*json[^/]*)$/)?{...i,content:await n.json(),format:"json",mimetype:i.mimetype||"application/json"}:-1!==r.indexOf("xml")||-1!==r.indexOf("text")?{...i,content:await n.text(),format:"text",mimetype:r||"text/plain"}:{...i,content:btoa(String.fromCharCode(...new Uint8Array(await n.arrayBuffer()))),format:"base64",mimetype:r||"octet/stream"}}return i}async rename(e,t){const n=decodeURIComponent(e),i=await this.get(n,{content:!0});if(!i)throw Error(`Could not find file with path ${n}`);const r=(new Date).toISOString(),a=o.PathExt.basename(t),s={...i,name:a,path:t,last_modified:r};if(await this._storage.setItem(t,s),await this._storage.removeItem(n),await this._checkpoints.removeItem(n),"directory"===i.type){let n;for(n of i.content)await this.rename(o.URLExt.join(e,n.name),o.URLExt.join(t,n.name))}return s}async save(e,t={}){var n;let i=await this.get(e);i||(i=await this.newUntitled({path:e}));const r=(new Date).toISOString();i={...i,...t,last_modified:r};const a=o.PathExt.extname(null!==(n=t.name)&&void 0!==n?n:"");if(t.content&&"base64"===t.format){const e=atob(t.content),n=".ipynb"===a;i={...i,content:n?JSON.parse(e):e,format:n?"json":"text",type:n?"notebook":"file"}}return await this._storage.setItem(e,i),i}async delete(e){e=decodeURIComponent(e);const t=[];await this._storage.iterate(((n,i)=>{(i===e||i.startsWith(`${e}/`))&&t.push(i)})),await Promise.all(t.map((async e=>Promise.all([this._storage.removeItem(e),this._checkpoints.removeItem(e)]))))}async createCheckpoint(e){var t;const n=await this.get(e,{content:!0}),i=(null!==(t=await this._checkpoints.getItem(e))&&void 0!==t?t:[]).filter((e=>!!e));return i.push(n),i.length>5&&i.splice(0,i.length-5),await this._checkpoints.setItem(e,i),{id:""+(i.length-1),last_modified:n.last_modified}}async listCheckpoints(e){return(await this._checkpoints.getItem(e)||[]).filter((e=>!!e)).map(((e,t)=>({id:t.toString(),last_modified:e.last_modified})))}async restoreCheckpoint(e,t){const n=(await this._checkpoints.getItem(e)||[])[parseInt(t)];await this._storage.setItem(e,n)}async deleteCheckpoint(e,t){const n=await this._checkpoints.getItem(e)||[],i=parseInt(t);n.splice(i,1),await this._checkpoints.setItem(e,n)}addDrive(e){throw new Error("Method not implemented.")}localPath(e){throw new Error("Method not implemented.")}normalize(e){throw new Error("Method not implemented.")}resolvePath(e,t){throw new Error("Method not implemented.")}driveName(e){throw new Error("Method not implemented.")}getModelDBFactory(e){throw new Error("Method not implemented.")}getDownloadUrl(e){throw new Error("Method not implemented.")}async _incrementCounter(e){var t;const n=(null!==(t=await this._counters.getItem(e))&&void 0!==t?t:-1)+1;return await this._counters.setItem(e,n),n}}var d;!function(e){e.EMPTY_NB={metadata:{orig_nbformat:4},nbformat_minor:4,nbformat:4,cells:[]}}(d||(d={}));var h=n(44668),p=n(66813),w=n(8257),f=n(12196),u=n(98193);const g={id:"@jupyterlite/server-extension:contents",autoStart:!0,provides:i,activate:e=>new m},v={id:"@jupyterlite/server-extension:kernels",autoStart:!0,provides:h.IKernels,requires:[h.IKernelSpecs],activate:(e,t)=>new h.Kernels({kernelspecs:t})},y={id:"@jupyterlite/server-extension:kernelspec",autoStart:!0,provides:h.IKernelSpecs,activate:e=>new h.KernelSpecs({})},_={id:"@jupyterlite/server-extension:sessions",autoStart:!0,provides:w.ISessions,requires:[h.IKernels],activate:(e,t)=>new w.Sessions({kernels:t})},S=[g,v,y,{id:"@jupyterlite/server-extension:server",autoStart:!0,requires:[i,h.IKernels,h.IKernelSpecs,w.ISessions,f.ISettings,u.ITranslation],activate:(e,t,n,i,o,r,a)=>{const s=new p.JupyterServer({contents:t,kernels:n,kernelspecs:i,sessions:o,settings:r,translation:a}),c=new p.LiteServiceManager({server:s});e.registerServiceManager(c)}},_,{id:"@jupyterlite/server-extension:settings",autoStart:!0,provides:f.ISettings,activate:e=>new f.Settings},{id:"@jupyterlite/server-extension:translation",autoStart:!0,provides:u.ITranslation,activate:e=>new u.Translation}]}}]);
//# sourceMappingURL=3484.2cb07fdf702346247ec5.js.map