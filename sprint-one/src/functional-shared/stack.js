var stackMethods = {};

var makeStack = function() {
  var instance = {};  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.objSize = 0; // Hint: set an initial value here

  instance = _.extend(instance, stackMethods);

  return instance;
};

stackMethods.push = function(value) {
  this.storage[this.objSize++] = value;
};

stackMethods.pop = function() {
  var item = this.storage[this.objSize-1];
  if (this.objSize > 0) {
    delete this.storage[this.objSize--];
  }
  return item;
};

stackMethods.size = function () {
  return this.objSize;
};

