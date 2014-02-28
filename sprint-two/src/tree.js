var makeTree = function(value){

  var extend = function (obj, obj2) {
    for (var key in obj2) {
      obj[key] = obj2[key];
    }
  };

  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  this.children.push(node);
};

treeMethods.contains = function(target){
  if(this.value === target) {
    return true;
  }

  for(var i = 0; i < this.children.length; i++) {
    if( this.children[i].contains(target) ) {
      return true;
    }
  }

  return false;
};
