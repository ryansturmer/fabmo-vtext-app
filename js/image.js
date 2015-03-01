
var lut_a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var lut_b = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
var lut_c = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var lut_d = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var lut_e = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var lut_f = [0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var lut_g = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var lut_h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function max(arr) {
	retval = arr[0];
	for(var i=1; i<arr.length; i++) {
		retval = Math.max(arr[i], retval);
	}
	return retval;
}

function min(arr) {
	retval = arr[0];
	for(var i=1; i<arr.length; i++) {
		retval = Math.min(arr[i], retval);
	}
	return retval;
}

function neighborhoodToMask(n,ne,e,se,s,sw,w,nw) {
	return (n << 0) | (ne << 1) | (e << 2) | (se << 3) | (s << 4) | (sw << 5) | (w << 6) | (nw << 7);
}

function Img(arg1,arg2) {
	function arrayFromCanvas(canvas) {
		var ctx = canvas.getContext('2d');
		var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
		var data = imgData.data;
		retval = [];
		for(var i=0; i<data.length; i+=4) {
			v = Math.max(data[i], data[i+1], data[i+2]);
			retval.push(v);
		}
		return retval;
	}

	if(arg1 instanceof jQuery) {
		canvas = arg1[0];
		this.width = canvas.width;
		this.height = canvas.height;
		this.d = arrayFromCanvas(arg1);
	} else if(arg1 instanceof HTMLCanvasElement) {
		this.width = arg1.width;
		this.height = arg1.height;
		this.d = arrayFromCanvas(arg1);
	} else if(arg1 instanceof CanvasRenderingContext2D) {
		this.width = arg1.canvas.width;
		this.height = arg1.canvas.height;
		this.d = arrayFromCanvas(arg1.canvas);
	} else if(arg1 !== undefined && arg2 !== undefined) {
		this.width = arg1;
		this.height = arg2;
		this.d = [];
		for(i=0; i<this.width*this.height; i++) {
			this.d.push(0);
		}
	} else {
		throw "I don't know how to make an image from this"
	}
}

Img.prototype.drawOn = function(canvas) {
	var ctx = canvas.getContext("2d");
	var imgData = ctx.createImageData(this.width, this.height);
	var data = imgData.data;
	var i=0;
	for(var j=0; j<data.length; j+=4) {
		var v = this.d[i++];
		data[j] = v;
		data[j+1] = v;
		data[j+2] = v;
		data[j+3] = 0xff;
	}
	ctx.putImageData(imgData, 0,0);
}

Img.prototype.threshold = function(thresh, value) {
	value = value || 0xff;
	for(var i=0; i<this.d.length; i++) {
		this.d[i] = this.d[i] >= thresh ? value : 0;
	} 
}

Img.prototype.setPixel = function(x,y,val) {
	this.d[x+y*this.width] = val;
}

Img.prototype.getPixel = function(x,y) {
	return this.d[x+y*this.width];
}

Img.prototype._dilate = function() {
	for(var x = 1; x<this.width-1; x++) {
		for(var y=1; y<this.height-1; y++) {
			center = this.getPixel(x,y);
			if(center === 0x00) {
				a = this.getPixel(x-1,y-1);
				b = this.getPixel(x+0,y-1);
				c = this.getPixel(x+1,y-1);
				d = this.getPixel(x-1,y+0);
				//e = this.getPixel(x,y);
				f = this.getPixel(x+1,y+0);
				g = this.getPixel(x-1,y+1);
				h = this.getPixel(x+0,y+1);
				i = this.getPixel(x+1,y+1);
				var v = a | b | c | d | f | g | h | i;
				if(v === 0xff) {
					this.setPixel(x,y,1);
				}
			}
		}
	}
}

Img.prototype._erode = function() {
	for(var x = 1; x<this.width-1; x++) {
		for(var y=1; y<this.height-1; y++) {
			center = this.getPixel(x,y);
			if(center === 0xff) {
				a = this.getPixel(x-1,y-1);
				b = this.getPixel(x+0,y-1);
				c = this.getPixel(x+1,y-1);
				d = this.getPixel(x-1,y+0);
				//e = this.getPixel(x,y);
				f = this.getPixel(x+1,y+0);
				g = this.getPixel(x-1,y+1);
				h = this.getPixel(x+0,y+1);
				i = this.getPixel(x+1,y+1);
				var v = a & b & c & d & f & g & h & i;
				if(v === 0) {
					this.setPixel(x,y,1);
				}
			}
		}
	}
}

Img.prototype.dilate = function(iterations) {
	var iterations = iterations || 1;
	for(var i=0; i<iterations; i++) {
		this._dilate();
		this.threshold(1, 0xff);
	}
}

Img.prototype.erode = function(iterations) {
	var iterations = iterations || 1;
	for(var i=0; i<iterations; i++) {
		this._erode();
		this.threshold(2, 0xff);
	}
}

Img.prototype.normalize = function(minval, maxval) {
	var img_min = min(this.d);
	var img_max = max(this.d);
	var img_scale = (img_max - img_min);
	var output_scale = (maxval-minval);
	console.log('img-min: ' + img_min)
	console.log('img-max: ' + img_max)
	console.log('img-scale: ' + img_scale)
	console.log('output-scale: ' + output_scale)

	for(var i=0; i<this.d.length; i++) {
		var p = minval + output_scale*(this.d[i] - img_min)/img_scale;
		this.d[i] = p;
	}
}

Img.prototype.neighborhood = function(x,y) {
	nw = this.getPixel(x-1,y-1) ? 1 : 0;
	n = this.getPixel(x+0,y-1) ? 1 : 0;
	ne = this.getPixel(x+1,y-1) ? 1 : 0;
	w = this.getPixel(x-1,y+0) ? 1 : 0;
	e = this.getPixel(x+1,y+0) ? 1 : 0;
	sw = this.getPixel(x-1,y+1) ? 1 : 0;
	s = this.getPixel(x+0,y+1) ? 1 : 0;
	se = this.getPixel(x+1,y+1) ? 1 : 0;
	return neighborhoodToMask(n,ne,e,se,s,sw,w,nw);
}

Img.prototype.cdt = function() {

	// Create second image to store result
	new_img = new Img(this.width, this.height);

	this.threshold(0xff, 0xffff);
	var pixel_changed = true;
	var max_v = 0
	var iteration = 0;
	while(pixel_changed) {
		iteration += 1;
		pixel_changed = false;
		var pixels_changed = 0;
		for(var x = 1; x<this.width-1; x++) {
			for(var y=1; y<this.height-1; y++) {
				center = this.getPixel(x,y);
				if(center === 0xffff) {
					n = this.getPixel(x+0,y-1);
					s = this.getPixel(x+0,y+1);
					w = this.getPixel(x-1,y+0);
					e = this.getPixel(x+1,y+0);
					var v = n & s & e & w;
					if(v === 0) {
						new_img.setPixel(x,y,iteration);
						this.setPixel(x,y,1);
						pixel_changed = true;
						pixels_changed += 1;
					}
				}
			}
		}
		this.threshold(2, 0xffff);
		console.log(pixels_changed);
		console.log(iteration);
	}

	for(i=0; i<this.d.length; i++) {
		this.d[i] = new_img.d[i];
	}
}

Img.prototype.clone = function() {
	retval = new Img(this.width, this.height)
	for(i=0; i<this.d.length; i++) {
		retval.d[i] = this.d[i];
	}
	return retval;
}

Img.prototype.mask = function(img) {
	if(this.d.length != img.d.length) {
		throw "Can't mask.  Images aren't the same size"
	}
	for(i=0; i<this.d.length; i++) {
		this.d[i] = img.d[i] ? this.d[i] : 0;
	}
}

Img.prototype.skel = function() {
	var changed = true;
	while(changed) {
		changed = false;
		changed |= this._thin(lut_a);
		changed |= this._thin(lut_b);
		changed |= this._thin(lut_c);
		changed |= this._thin(lut_d);
		changed |= this._thin(lut_e);
		changed |= this._thin(lut_f);
		changed |= this._thin(lut_g);
		changed |= this._thin(lut_h);
	}
}

Img.prototype.mat = function() {
	mask = this.clone();
	mask.skel();
	this.cdt();
	this.mask(mask);
}

Img.prototype._thin = function(lut) {
	var changed = false;
	for(var x = 1; x<this.width-1; x++) {
		for(var y=1; y<this.height-1; y++) {
			center = this.getPixel(x,y);
			if(center === 0xff) {
				var mask = this.neighborhood(x,y)
				if(lut[mask]) {
					this.setPixel(x,y,1)
					changed = true;
				}
			}
		}
	}
	this.threshold(2, 0xff);
	return changed;
}
