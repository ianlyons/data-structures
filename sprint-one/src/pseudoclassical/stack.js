var Stack = function() {
  this.storage = {};
  this.objSize = 0; // Hint: set an initial value here
};

Stack.prototype.push = function(value) {
  this.storage[this.objSize++] = value;
};

Stack.prototype.pop = function() {
  var item = this.storage[this.objSize-1];
  if (this.objSize > 0) {
    delete this.storage[this.objSize--];
  }
  return item;
};

Stack.prototype.size = function () {
  return this.objSize;
};
