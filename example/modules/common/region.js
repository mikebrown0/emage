define(["require","qpf","../router"],function(e){var t=e("qpf"),n=t.use("components/meta/meta"),r=t.use("components/base"),i=t.use("knockout"),s=e("../router"),o=r.derive(function(){return{controller:{},_moduleCache:{},_currentModule:null}},{type:"REGION",css:"region",initialize:function(){var e=this;_.each(this.controller,function(t,n){var r=t.url,i=t.context;r==="*"?e.enterModule(n,{},function(){}):(s.on("after",r,e.leaveModule.bind(e,n)),s.on(r,e.enterModule.bind(e,n,i)))})},_updateStatus:function(){var e=this,t=Array.prototype.pop.call(arguments),n=0;_.each(e._moduleCache,function(e){n++,e.__enable__?e.enable(t):e.disable(t)}),n||t()},leaveModule:function(e){var t=this._moduleCache[e],n=Array.prototype.pop.call(arguments);t&&t.disable(n)},enterModule:function(t,n){var r={},i=this,s=Array.prototype.pop.call(arguments),o=Array.prototype.slice.call(arguments,2);n&&_.each(o,function(e,t){var i=n[t];i&&(r[i]=e)});var u=this._moduleCache[t];u?(u.enable(s),u.setContext(r),this._currentModule=u,this.afterResize()):e([t],function(e){if(e&&e.start){var n=e.start();n&&i.$el.append(n),e.mainComponent.parent=i,e.enable(s),e.setContext(r),i._moduleCache[t]=e,i._currentModule=e,i.afterResize()}}),s()},afterResize:function(){this._currentModule&&this._currentModule.mainComponent&&(this._currentModule.mainComponent.width(this.$el.width()),this._currentModule.mainComponent.height(this.$el.height())),r.prototype.afterResize.call(this)}});return n.provideBinding("region",o),o});