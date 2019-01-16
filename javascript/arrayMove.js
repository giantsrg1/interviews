var expect = require('chai').expect;

function move_column(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
}

//console.log(move_column(['a','b','c','d'], 3, 1));
expect(move_column(['a','b','c','d'], 3, 1)).to.deep.equal(['a','d','b','c']);
console.log('<---CODE WORKS--->');