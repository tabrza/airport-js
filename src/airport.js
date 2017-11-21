function Airport(){
  this.terminal = [];
};


Airport.prototype.landPlane = function(plane){
  this.terminal.push(plane);
  console.log(this.terminal);
  return true;
};
