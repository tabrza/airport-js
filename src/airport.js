function Airport(){
  this.terminal = [];
  this.weather = 'clear';
};


Airport.prototype.landPlane = function(plane){
  if(this.weather === 'clear'){
    this.terminal.push(plane);
    return true;
  }
};

Airport.prototype.departPlane = function(plane){
  if(this.weather === 'clear'){
    for(var i=0; i < this.terminal.length; i++){
      if(this.terminal[i] === plane){
        this.terminal.splice(i,1);
      }
    }
    return true;
  }
};
