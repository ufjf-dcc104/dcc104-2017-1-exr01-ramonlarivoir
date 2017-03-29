
function Sprite() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
	//this.g = 60;
  this.color = "blue";

}

Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, 15, 15);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, 15, 15);
};

Sprite.prototype.mover = function (dt) {
  this.vx = this.vx + this.ax*dt;
  this.vy = this.vy + (this.ay)*dt;
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;

}

Sprite.prototype.colidiuCom = function(alvo) {
	if(this.x+15 < alvo.x) return false;
	if(this.x > alvo.x+15) return false;
	if(this.y+15 < alvo.y) return false;
	if(this.y > alvo.y+15) return false;
	
	return true;
}

Sprite.prototype.perseguir = function(alvo, dt) {
	this.ax = dt*(alvo.x - this.x)*10 - 1*this.vx;
	this.ay = dt*(alvo.y - this.y)*10 - 1*this.vy;
}
