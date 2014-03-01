var makeBinarySearchTree = function(value){
  var extend = function (obj, obj2) {
    for (var key in obj2) {
      obj[key] = obj2[key];
    }
  };

  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function(value) {
  var newNode = makeBinarySearchTree(value);

  if ( value > this.value ) {
    if( this.right === null ) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  } else if( value < this.value ) {
    if( this.left === null ) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else {
    // throw new Error("Whoa, whoa, whoa.");
  }
};

treeMethods.contains = function(target) {
  // check yourself first
  if( this.value === target ) {
    return true;
  } else {
    if(target > this.value) {
      if( (this.right) && (this.right.contains(target)) ) {
        return true;
      }
    } else if (target < this.value) {
      if( (this.left) && (this.left.contains(target)) ){
        return true;
      }
    }
  }
  return false;
};

treeMethods.depthFirstLog = function() {

};
