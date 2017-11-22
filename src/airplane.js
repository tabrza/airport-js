function Plane(){
  this.isFlying = true;
};

Plane.prototype.landed = function(){
  return this.isFlying = false;
}

Plane.prototype.takeOff = function(){
  return this.isFlying = true;
}
