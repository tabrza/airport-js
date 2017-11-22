function Plane(){
  this.isFlying = true;
};

Plane.prototype.landed = function(){
  return plane.isFlying = false;
}

Plane.prototype.takeOff = function(){
  return plane.isFlying = true;
}
