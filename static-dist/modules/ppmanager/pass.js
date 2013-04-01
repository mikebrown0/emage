define(["require"],function(e){var t=function(e){var t=this;this.inputPin={},this._inputSlot=0,this.parameters={},this.outputPin=null,this.fragmentShader="",this._material=new THREE.ShaderMaterial({vertexShader:["varying vec2 vUv;","void main(){","vUv = vec2(uv.x, uv.y);","gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join("\n")}),e=e||{},this.initialize(e),this._camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),this._geometry=new THREE.PlaneGeometry(2,2),this._quad=new THREE.Mesh(this._geometry,this._material),this._scene=new THREE.Scene,this._scene.add(this._quad),this._scene.add(this._camera)};return t.prototype={initialize:function(e){e.fragmentShader&&this.setFragmentShader(e.fragmentShader),e.inputPin&&this.addInputPin(e.inputPin),e.outputPin&&this.setOutputPin(e.outputPin),e.parameters&&this.addParameter(e.parameters)},addInputPin:function(e){for(var t in e)this.inputPin[t]=e[t],this._material.uniforms[t]={type:"t",value:e[t]}},addParameter:function(e){for(var t in e)this.parameters[t]=e[t],this._material.uniforms[t]=e[t]},updateParameter:function(e,t){if(typeof e=="string"){var n={};n[e]=t}else n=e;for(var e in n)this.parameters[e].value=n[e],this._material.uniforms[e].value=n[e]},setInputPin:function(e,t){if(typeof e=="string"){var n={};n[e]=t}else var n=e;for(var e in n){this.inputPin[e]=n[e];var r=this._material.uniforms[e];r.value=n[e]}},removeInputPin:function(e){this.inputPin[e]=null;var t=this._material.uniforms[e];t.value=null},setOutputPin:function(e){this.outputPin=e},removeOutputPin:function(){this.outputPin=null},setFragmentShader:function(e){this.fragmentShader=e,this._material.fragmentShader=e,this._material.needsUpdate=!0},setVertexShader:function(e){this._material.vertexShader=e,this._material.needsUpdate=!0},render:function(e,t){this.outputPin&&!t?e.render(this._scene,this._camera,this.outputPin,!0):e.render(this._scene,this._camera)}},t});