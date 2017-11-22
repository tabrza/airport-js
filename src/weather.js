function Weather(){
}

Weather.prototype.isStormy = function(){
  Math.random() > 0.5 ? true : false;
}
