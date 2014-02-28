var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    var prevTail = list.tail;
    if(list.tail === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
    list.tail.prev = prevTail;
  };

  list.removeTail = function(value) {
    var node = list.tail;
    list.tail = node.prev;
    return node;
  };

  list.removeHead = function(){
    var node = list.head;
    list.head = node.next;
    list.head.prev = null;
    return node;
  };

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    if(list.head === null) {
    // the list is empty, so:
      list.tail = newNode;
    } else {
    // there's already an element, so:
      list.head.prev = newNode;
    }
    newNode.next = list.head;
    list.head = newNode;
  };

  list.contains = function(target){
    var node = list.head;
    while(node) {
      if( node.value === target ) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
