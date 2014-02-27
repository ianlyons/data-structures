/* global _ */
/* exported makeQueue */

var queueMethods = {};

var makeQueue = function() {
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.topQueue = 0;
  instance.bottomQueue = 0;

  return instance;
};



queueMethods.enqueue = function(value){
  this.storage[this.topQueue++] = value;
};

queueMethods.dequeue = function(){
  if (this.topQueue > this.bottomQueue) {
    var item = this.storage[this.bottomQueue];
    delete this.storage[this.bottomQueue++];
    return item;
  }
};

queueMethods.size = function(){
  return this.topQueue - this.bottomQueue;
};
