var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var topQueue = 0;
  var bottomQueue = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[topQueue++] = value;
  };

  instance.dequeue = function(){
    if (topQueue > bottomQueue) {
      var item = storage[bottomQueue];
      delete storage[bottomQueue++];
      return item;
    }
  };

  instance.size = function(){
    return topQueue - bottomQueue;
  };

  return instance;
};




