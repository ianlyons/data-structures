var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  console.log(this._storage);
  for( var i = 0; i < this._storage.length; i++) {
    if(JSON.stringify(this._storage[i]) ===  JSON.stringify(item)) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for(var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item) {
      this._storage.splice(i,1);
    }
  }
};
