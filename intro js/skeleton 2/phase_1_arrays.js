Array.prototype.uniq = function()  {
  let uniqueArray = [];
  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.includes(this[i])) {
      continue;
    }
    else {
      uniqueArray.push(this[i]);
    }
  }
  return uniqueArray;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function() {
  let sumArray = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumArray.push([i, j]);
      }
    }
  }
  return sumArray;
};

console.log([1, 0, -1, 0].twoSum());


Array.prototype.transpose = function() {
  // debugger
  let transposeArray = [];
  for (let k = 0; k < this[0].length; k++) {
    transposeArray.push([]);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      transposeArray[j].push(this[i][j]);
    }
  }
  return transposeArray;
};

console.log([[1,2,3],[4,5,6],[7,8,8]].transpose());
