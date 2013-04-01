define(["require","modules/ppmanager/pass","text!shaders/imagelookup.essl","text!shaders/gaussian_h.essl","text!shaders/gaussian_v.essl","text!shaders/alphablend.essl"],function(e){var t=e("modules/ppmanager/pass"),n=e("text!shaders/imagelookup.essl"),r=e("text!shaders/gaussian_h.essl"),i=e("text!shaders/gaussian_v.essl"),s=e("text!shaders/alphablend.essl"),o=function(){function e(e){var t=THREE.ImageUtils.loadTexture(e);return t.magFilter=THREE.NearestFilter,t.minFilter=THREE.NearestFilter,t.flipY=!1,t.needsUpdate=!0,t}this.name="Soft Elegance",this._lookupPass1=new t({fragmentShader:n,inputPin:{texture:null,lookup:e("fx/lookups/lookup_soft_elegance_1.png")}}),this._blurHPass=new t({fragmentShader:r,inputPin:{texture:null},parameters:{blurSize:{type:"f",value:9.7/1024}}}),this._blurVPass=new t({fragmentShader:i,inputPin:{texture:null},parameters:{blurSize:{type:"f",value:9.7/1024}}}),this._blendPass=new t({fragmentShader:s,inputPin:{texture:null,overlay:null},parameters:{percent:{type:"f",value:.17}}}),this._lookupPass2=new t({fragmentShader:n,inputPin:{texture:null,lookup:e("fx/lookups/lookup_soft_elegance_2.png")}}),this._extraRT1=new THREE.WebGLRenderTarget(1024,1024,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat}),this._extraRT2=new THREE.WebGLRenderTarget(1024,1024,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat}),this.provides=[]};return o.prototype.render=function(e,t,n){return this._lookupPass1.setInputPin("texture",t),this._lookupPass1.setOutputPin(n),this._lookupPass1.render(e),this._blurHPass.setInputPin("texture",n),this._blurHPass.setOutputPin(this._extraRT1),this._blurHPass.render(e),this._blurVPass.setInputPin("texture",this._extraRT1),this._blurVPass.setOutputPin(this._extraRT2),this._blurVPass.render(e),this._blendPass.setInputPin("texture",n),this._blendPass.setInputPin("overlay",this._extraRT2),this._blendPass.setOutputPin(this._extraRT1),this._blendPass.render(e),this._lookupPass2.setInputPin("texture",this._extraRT1),this._lookupPass2.setOutputPin(n),this._lookupPass2.render(e),n},o.prototype.dispose=function(){this._extraRT1.dispose(),this._extraRT2.dispose()},o});