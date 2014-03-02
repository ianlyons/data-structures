var treeMethods = {};

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

treeMethods.breadthLog = function () {
  // instantiate queue
  var queue = [];
  // add self
  queue.push(this);
  // while queue length is greater 0
  while (queue.length > 0) {
    var thisNode = queue.shift();
    console.log(thisNode.value);
    if (thisNode.left) {
      queue.push(thisNode.left);
    }
    if (thisNode.right) {
      queue.push(thisNode.right);
    }
  }
};

treeMethods.depthFirstLog = function(callback) {
  this.value = callback(this.value);
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
};

treeMethods.addNumbers = function(number) {
  for (var i = 0; i < number; i++ ) {
    var num = Math.floor(Math.random()*2000);
    console.log(num);
    this.insert(num);
    console.log(this);
  }
};

treeMethods.findClosestNumber = function (number) {
  var closest = arguments[1] || undefined;

  if (this.value === number) {
    return number;
  }

  if (closest === undefined) {
    closest = this.value;
  }

  if (Math.abs(this.value-number) < Math.abs(closest-number)) {
    closest = this.value;
  }

  if ((number > this.value) && (this.right)) {
    closest = this.right.findClosestNumber(number, closest);
  } else if(this.left) {
    closest = this.left.findClosestNumber(number, closest);
  }

  return closest;
};
