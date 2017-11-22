const maxCapacity = 2;

function Airport(weather = new Weather){
  this.terminal = [];
  this.weather = weather;
};
// var plane = new Plane();

Airport.prototype.landPlane = function(plane){
  if(this.weather.isStormy() === false && this.terminal.length < maxCapacity && plane.isFlying === true){
    console.log('NOW HERE ' + this.weather.isStormy())
    this.terminal.push(plane);
    return true;
  }
  console.log('LOOOOOK HERE ' + this.weather.isStormy())
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
