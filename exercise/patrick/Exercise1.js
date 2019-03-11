function map(array, callback) {
  if(array == null) {
    throw "Argument is not an array"
  }
  else if(!array instanceof Array){
    throw "Argument is not an array"
  }
  else if(typeof(callback) !== 'function'){
    throw "Argument is not a function"
  }
  else {
    if(array.length == 0) return [];
    const arr2 = [];

    for(let i = 0; i < array.length; i++){
      arr2.push(callback.call(this, array[i], i, array));
    }
    
    return arr2;
  }
}


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = map(arr1, function cubed(val, index, arr) {
  return val ** 3;
});

console.log(arr2);


let Stack = {
  arr: [],
  get: function(){
    return this.arr;
  },
  push: function(element){
  	console.log("PUSHING");
		this.arr.push(element);
  },
  pop: function(element){
  	console.log("POPPING");
    return this.arr.pop();
  }
}

let stack = Object.create(Stack);
stack.get();
stack.push(1);
console.log(stack.get());
stack.push(2);
console.log(stack.get());
console.log(stack.pop());
console.log(stack.get());
console.log(stack.pop());
console.log(stack.get());

let Queue = {
	arr: [],
  get: function() {
  	return this.arr;
  },
  enqueue: function(element){
  	console.log("ENQUEUEING");
		this.arr.push(element);  	
  },
  dequeue: function(){
  	console.log("DEQUEUEING");
  	return this.arr.shift();
  }
}

let queue = Object.create(Queue);
queue.get();
queue.enqueue(1);
console.log(queue.get());
queue.enqueue(2);
console.log(queue.get());
console.log(queue.dequeue());
console.log(queue.get());
console.log(queue.dequeue());
console.log(queue.get());
