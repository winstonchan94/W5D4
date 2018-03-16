function range(start, end) {
  // let rangeArr = [];
  if (start === end) {
    return [end];
  }
  let subProblem = range(start + 1, end);
  subProblem.unshift(start);
  return subProblem;
  // range(start + 1, end) += start;
}

console.log(range(1,10));

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return sumRec(arr.slice(1, arr.length)) + arr[0];
}

console.log(sumRec([1, 2, 3, 4, 5]));

function exp1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return exp1(base, exp - 1) * base;
}

function exp2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  // debugger
  if (exp % 2 === 0) {
    return Math.pow(exp2(base, exp / 2), 2);
  } else {
    return Math.pow(exp2(base, (exp - 1) / 2), 2) * base;
  }
}

console.log(exp1(2, 3));
console.log(exp2(2, 4));

function fibbonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }
  let subFib = fibbonacci(n - 1);
  subFib.push(subFib[subFib.length - 1] + subFib[subFib.length - 2]);
  return subFib;
}

console.log(fibbonacci(3));

var getType = function (elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
};

function deepDup(arr) {
  if (getType(arr) != 'Array') {
    return arr;
  }
  let dupedArray = arr.map(el => {
    return deepDup(el);
  });
  return dupedArray;
}

console.log(deepDup([1, 2, 3, [4]]));
