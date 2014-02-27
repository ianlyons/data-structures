var Queue = function() {
  this.storage = {};
  this.topQueue = 0;
  this.bottomQueue = 0;
};

Queue.prototype.enqueue = function(value){
    this.storage[this.topQueue++] = value;
};

Queue.prototype.dequeue = function(){
  if (this.topQueue > this.bottomQueue) {
    var item = this.storage[this.bottomQueue];
    delete this.storage[this.bottomQueue++];
    return item;
  }
};

Queue.prototype.size = function(){
  return this.topQueue - this.bottomQueue;
};
