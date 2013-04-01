define({

	//meta
	name : "Gaussian Blur",
	description : "高斯模糊",
	preview : "",

	//passes
	passes : [{

		name : "Horizontal",
		shader : "gaussian_h.essl",

		uniforms : {
			blurSize : {
				name : "Horizontal Blur Size",
				ui : "range",
				type : 'f',
				precision : 4,
				max : 0.01,
				min : 0,
				value : 1/256
			}
		}
	}, {
		name : "Vertical",
		shader : "gaussian_v.essl",

		uniforms : {
			blurSize : {
				name : "Vertical Blur Size",
				ui : "range",
				type : 'f',
				precision : 4,
				max : 0.01,
				min : 0,
				value : 1/256
			}
		}
	}]
})