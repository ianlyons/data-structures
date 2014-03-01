/* global makeLimitedArray, getIndexBelowMaxForKey */

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._usage = 0;
  this._usageFlag = false;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = [k,v];
  this._storage.set(i,arr);
  this._usage++;

  this.checkHashTable();
};

HashTable.prototype.rehash = function (newLimit, oldLimit) {
  // debugger;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(newLimit);
  for (var i = 0; i < oldLimit; i++) {
    if (oldStorage.get(i) !== undefined) {
      var arr = oldStorage.get(i);
      this.insert(arr[0],arr[1]);
    }
  }
};

HashTable.prototype.checkHashTable = function() {
  if(this._usage/this._limit > 0.75) {
    this.rehash(this._limit*=2, this._limit/2);
    this._usageFlag = true;
  }
  console.log('usageflag: ' + this._usageFlag);
  if((this._usage/this._limit <= 0.25) && (this._usageFlag)) {
    console.log("Halved!");
    this._limit = this._limit * 0.50;
  }
  console.log('usage: ' + this._usage);
  console.log('limit: ' + this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket[0] === k) {
    return bucket[1];
  }
  return undefined;
};

HashTable.prototype.remove = function(k){
  console.log("Removed " + k);
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  bucket[1] = null;
  this._usage--;
  this.checkHashTable();
};
