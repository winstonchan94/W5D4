Array.prototype.bubbleSort = function() {
  let moved = true;
  let higher = 0;
  let lower = 0;
  do {
    moved = false;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        higher = this[i];
        lower = this[i + 1];
        this[i + 1] = higher;
        this[i] = lower;
        moved = true;
      }
    }
  }
  while (moved === true);
  return this;
};

console.log([9,8,7,6,5,4,3,2,1].bubbleSort());

String.prototype.substrings = function() {
  let strArr = [];
  let substring = "";
  for (let i = 0; i < this.length - 1; i++) {
    substring = this.charAt(i);
    for (let j = i + 1; j < this.length; j++) {
      strArr.push(substring += this.charAt(j));
    }
  }
  return strArr;
};

console.log(`hello`.substrings());
