Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function double(num) {
  return (num* 2);
}

console.log([1, 2, 3, 4].myEach(double));

Array.prototype.myMap = function(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

console.log([1, 2, 3, 4].myMap(double));

Array.prototype.myReduce = function(callback, initialValue) {
  let i = 0;
  if (!initialValue) {
    initialValue = this[0];
    i = 1;
  }
  while (i < this.length) {
    initialValue = callback(initialValue, this[i]);
    i++;
  }
  return initialValue;
};

function sum(acc, el) {
  return acc + el;
}

console.log([1, 2, 3, 4].myReduce(sum));
console.log([1, 2, 3, 4].myReduce(sum, 1));
