// arr.reduce(callback[, initialValue])
// initial value is optional


var g = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
console.log("g", g);

//             previousValue currentValue index array           return
// first call  0              1           1     [0, 1, 2, 3, 4] 1
// second call 1              2           2     [0, 1, 2, 3, 4] 3
// third call  3              3           3     [0, 1, 2, 3, 4] 6
// fourth call 6              4           4     [0, 1, 2, 3, 4] 10

console.log('What we want', {'11': 20, '20': 89, '89': 1131, '1131': 11}); 
var arr = [11, 20, 89, 1131];

var o = arr.reduce(function(obj, num, index, array) {
  obj[num] = array[index + 1] || array[0];
  return obj;
}, {});

console.log("o", o);

var arr = [1, 2, 3, 4];

var a = arr.reduce(function(prev, current) {return prev + current;});
// > 10
var b = arr.reduce(function(prev, current) {return prev * current;});
// > 24
var c = arr.reduce(function(prev, current) {return prev + current / arr.length;});
// > 3.25
var d = arr.reduce(function(prev, current) {return prev + current;}) / arr.length;
// > 2.5
var e = arr.reduce(function(prev, current) {return prev + current;}, 10);
// > 20
var f = arr.reduce(function(prev, current) {prev[current] = 1; return prev;}, {});
// > { '1': 1, '2': 1, '3': 1, '4': 1 }

console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("d", d);
console.log("e", e);
console.log("f", f);


var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6


// Flatten an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);

//             previousValue currentValue  index array           return value
// first call  10            0             0     [0, 1, 2, 3, 4] 10
// second call 10            1             1     [0, 1, 2, 3, 4] 11
// third call  11            2             2     [0, 1, 2, 3, 4] 13
// fourth call 13            3             3     [0, 1, 2, 3, 4] 16
// fifth call  16            4             4     [0, 1, 2, 3, 4] 20

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce