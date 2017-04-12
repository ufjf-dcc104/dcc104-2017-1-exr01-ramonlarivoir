function ImageLoader () {
	this.images= {};
}

ImageLoader.prototype.load = function (key, imgUrl) {
	var img = new Image();
	img.src = imgUrl;
	this.images[key] = img;
	
};

ImageLoader.prototype.drawSprite = function (ctx, key, sx, sy, sw, sh, dx, dy, dw, dh) {
	ctx.drawImage(this.images[key], sx, sy, sw, sh, dx, dy, dw, dh);
};