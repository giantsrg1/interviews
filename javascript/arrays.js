var expect = require('chai').expect;

//sort the items so the evens are sorted first desc and odds are sorted last asc
//show for loop then forEach
function specialSort(array) {
    var odds = [];
    var evens = [];

    // for (var i = 0; i < array.length; i++) {
    // 	var item = array[i];
    // 	if (item % 2) {
    //         odds.push(item);
    //     } else {
    //         evens.push(item);
    //     }
    // };

    array.forEach(function(item) {
        if (item % 2) {
            odds.push(item);
        } else {
            evens.push(item);
        }
    });
    function asc(a, b) {
        return a - b;
    }

    function desc(a, b) {
        return b - a;
    }
    return evens.sort(desc).concat(odds.sort(asc));
}

expect(specialSort([2, 4, 3, 7, 10, 1])).to.deep.equal([ 10, 4, 2, 1, 3, 7 ]);
expect(specialSort([-13, -36, -41, -43, 20, -4, -21, -6, -14, 25])).to.deep.equal([ 20, -4, -6, -14, -36, -43, -41, -21, -13, 25 ]);
expect(specialSort([41, -34, -30, -18, -3, 24, -19, -21, -45, -20])).to.deep.equal([ 24, -18, -20, -30, -34, -45, -21, -19, -3, 41 ]);
expect(specialSort([7, -40, -47, 8, 13, -32, -16, -6, -39, 44])).to.deep.equal([ 44, 8, -6, -16, -32, -40, -47, -39, 7, 13 ]);
expect(specialSort([2, -28, 48, 8, 13, -41, 16, -30, 24, 26])).to.deep.equal([ 48, 26, 24, 16, 8, 2, -28, -30, -41, 13 ]);

console.log('<---CODE WORKS--->');