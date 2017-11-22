const maxCapacity = 2;
function Airport(weather = new Weather()){
  this.terminal = [];
  this.weather = weather;
};


Airport.prototype.landPlane = function(plane){
  if(this.weather.isStormy() === false && this.terminal.length < maxCapacity){
    this.terminal.push(plane);
    return true;
  }
};

Airport.prototype.departPlane = function(plane){
  if(this.weather.isStormy() === false){
    for(var i=0; i < this.terminal.length; i++){
      if(this.terminal[i] === plane){
        this.terminal.splice(i,1);
      }
    }
    return true;
  }
};
