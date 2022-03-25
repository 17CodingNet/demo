"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2897,8633],{98633:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r,o=n(52657),a=n(13815),i=n(36636),d=n(75550),s=n(38036),c=n(64636),l=n(89224),u=n(76508),g=n(92541);!function(e){e.open="settingeditor:open",e.openJSON="settingeditor:open-json",e.revert="settingeditor:revert",e.save="settingeditor:save"}(r||(r={}));const m={id:"@jupyterlab/settingeditor-extension:form-ui",requires:[l.ISettingRegistry,u.IStateDB,g.ITranslator,d.IFormComponentRegistry,o.ILabStatus],optional:[o.ILayoutRestorer,a.ICommandPalette,c.IJSONSettingEditorTracker],autoStart:!0,provides:c.ISettingEditorTracker,activate:function(e,t,n,o,i,s,l,u,g){const v=o.load("jupyterlab"),{commands:p,shell:S}=e,I="setting-editor",y=new a.WidgetTracker({namespace:I});return l&&l.restore(y,{command:r.open,args:e=>({}),name:e=>I}),u&&u.addItem({category:v.__("Settings"),command:r.open}),p.addCommand(r.open,{execute:()=>{if(y.currentWidget)return void S.activateById(y.currentWidget.id);const e=m.id,l=new a.MainAreaWidget({content:new c.SettingsEditor({editorRegistry:i,key:e,registry:t,state:n,commands:p,toSkip:["@jupyterlab/application-extension:context-menu","@jupyterlab/mainmenu-extension:plugin"],translator:o,status:s})});g&&(l.toolbar.addItem("spacer",a.Toolbar.createSpacerItem()),l.toolbar.addItem("open-json-editor",new a.CommandToolbarButton({commands:p,id:r.openJSON,icon:d.launchIcon,label:v.__("JSON Settings Editor")}))),l.id=I,l.title.icon=d.settingsIcon,l.title.label=v.__("Settings"),l.title.closable=!0,y.add(l),S.add(l)},label:v.__("Advanced Settings Editor")}),y}},v={id:"@jupyterlab/settingeditor-extension:plugin",requires:[l.ISettingRegistry,i.IEditorServices,u.IStateDB,s.IRenderMimeRegistry,o.ILabStatus,g.ITranslator],optional:[o.ILayoutRestorer,a.ICommandPalette],autoStart:!0,provides:c.IJSONSettingEditorTracker,activate:function(e,t,n,o,i,s,l,u,g){const v=l.load("jupyterlab"),{commands:p,shell:S}=e,I="json-setting-editor",y=n.factoryService.newInlineEditor,b=new a.WidgetTracker({namespace:I});return u&&u.restore(b,{command:r.openJSON,args:e=>({}),name:e=>I}),p.addCommand(r.openJSON,{execute:()=>{if(b.currentWidget)return void S.activateById(b.currentWidget.id);const n=m.id,u=e.restored,g=new c.JsonSettingEditor({commands:{registry:p,revert:r.revert,save:r.save},editorFactory:y,key:n,registry:t,rendermime:i,state:o,translator:l,when:u});let _=null;g.commandsChanged.connect(((e,t)=>{t.forEach((e=>{p.notifyCommandChanged(e)})),g.canSaveRaw?_||(_=s.setDirty()):_&&(_.dispose(),_=null),g.disposed.connect((()=>{_&&_.dispose()}))}));const E=new a.MainAreaWidget({content:g});E.id=I,E.title.icon=d.settingsIcon,E.title.label=v.__("Advanced Settings Editor"),E.title.closable=!0,b.add(E),S.add(E)},label:v.__("Advanced JSON Settings Editor")}),g&&g.addItem({category:v.__("Settings"),command:r.openJSON}),p.addCommand(r.revert,{execute:()=>{var e;null===(e=b.currentWidget)||void 0===e||e.content.revert()},icon:d.undoIcon,label:v.__("Revert User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=b.currentWidget)||void 0===e?void 0:e.content.canRevertRaw)&&void 0!==t&&t}}),p.addCommand(r.save,{execute:()=>{var e;return null===(e=b.currentWidget)||void 0===e?void 0:e.content.save()},icon:d.saveIcon,label:v.__("Save User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=b.currentWidget)||void 0===e?void 0:e.content.canSaveRaw)&&void 0!==t&&t}}),b}},p=[m,v]}}]);
//# sourceMappingURL=2897.61389f3.js.map