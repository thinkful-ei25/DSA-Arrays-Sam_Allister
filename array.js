'use strict';
const Memory = require('./memory');

const memory = new  Memory();

class Array {
  
  constructor(){
    this.length = 0;
    this.ptr = memory.allocate(this.length);
    this.capacity = 0;
  }

  push(value){
    if(this.length >= this.capacity){
      this.resize((this.length+1)*Array.SIZE_RATIO);
    }
    memory.set(this.ptr+this.length, value);
    this.length++;
  }

  //O(1)

  resize(size){
    const ptr1 = this.ptr;
    this.ptr = memory.allocate(size);
    if(this.ptr === null){
      throw new Error('No Memory');
    }
    memory.copy(this.ptr, ptr1, this.length);
    memory.free(ptr1);
    this.capacity = size;
  }

  get(index){
    if(index<0 || index>=this.length){
      throw new Error('Index error');
    }
    return memory.get(this.ptr+index);
  }

  pop(){
    if(this.length===0){
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr+this.length-1);
    this.length--;
    return value;
  }

  insert(index, value){
    if(index<0 || index>=this.length){
      throw new Error('Index error');
    }
    if(this.length >= this.capacity){
      this.resize((this.length+1)*Array.SIZE_RATIO);
    }
    memory.copy(this.ptr+index+1, this.ptr+index, this.length-index);
    memory.set(this.ptr+index, value);
    this.length++;
  }

  remove(index){
    if(index<0 || index>=this.length){
      throw new Error('Index error');
    }
    memory.copy(this.ptr+index, this.ptr+index+1, this.length - index - 1);
    this.length--;
  }

}
Array.SIZE_RATIO = 3;

module.exports = Array;