/* global makeLimitedArray, getIndexBelowMaxForKey */

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._usage = 0;
  this._usageFlag = false;
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var arr = [key,value];
  var bucket = this._storage.get(i);
  if (!bucket) {
    this._storage.set(i,[arr]);
  } else {
    bucket.push(arr);
  }
  this._usage++;
  this.checkHashTable();
  this._storage.set(i,bucket);
};

// .get the bucket
// if the bucket already has something, push the new key-value pair onto the bucket
// otherwise set the bucket to be an array, then push the new key-value pair onto the bucket
// .set the bucket back into the larger, private storage array


HashTable.prototype.rehash = function (newLimit, oldLimit) {
  var transferArray = [];
  for (var i = 0; i < oldLimit; i++) {
    var bucket = this._storage.get(i);
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        transferArray.push(bucket[j]);
      }
    }
  }
  this._usage = 0;
  this._storage = makeLimitedArray(newLimit);
  for(var i = 0; i < transferArray.length; i++) {
    this.insert(transferArray[i][0],transferArray[i][1]);
  }
};

HashTable.prototype.checkHashTable = function() {
  if(this._usage/this._limit > 0.75) {
    this.rehash(this._limit*=2, this._limit/2);
    this._usageFlag = true;
  }
   if((this._usage/this._limit < 0.25) && (this._usageFlag)) {
     this._limit = this._limit * 0.50;
  }
  };

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  if(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  if(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = null;
      }
    }
  }
  this._usage--;
  this.checkHashTable();
};
