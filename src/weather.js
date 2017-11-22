function Weather(){
}

Weather.prototype.isStormy = function(){
  return [true,false][Math.random() > 0.5 ? 0 : 1]
}
