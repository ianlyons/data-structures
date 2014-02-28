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
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  this.children.push(node);
  node.parent = this;
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

treeMethods.removeFromParent = function() {
  for(var i = 0; i < this.parent.children.length; i++) {
    if(this === this.parent.children[i]) {
      this.parent.children[i] = null;
    }
  }
  this.parent = null;
};
