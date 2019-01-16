// Parents are higher, children are lower

// 1   2   4
//  \ /   / \
//   3   5   8
//    \ / \   \
//     6   7   9

// Sample input and output:
// parentChildPairs, 3, 8 => false
// parentChildPairs, 5, 8 => true
// parentChildPairs, 6, 8 => true


// [ parent, child ]
var parentChildPairs =
    [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
     [4, 5], [4, 8], [8, 9]];

// Your function here
function getParents(child){
  var parents = [];
  parentChildPairs.forEach(function(pair){
    if(pair[1] == child){
      parents.push(pair[0]); 
    }
  })
  
  if(parents.length == 0){
    return parents;
  } else {
    parents.forEach(function(parent){
      return parents.concat(getParents(parent));
    })
  }
}

function matchingAncestors(child1, child2){
    var hasAncestors = false;
  
    var parentsChild1 = getParents(child1);
    var parentsChild2 = getParents(child2);
  
    if(parentsChild1){
      parentsChild1.forEach(function(parent){
        if(parentsChild2.includes(parent)){
          hasAncestors = true;
        }
      })
    }
  
    return hasAncestors;
}

console.log(matchingAncestors(3,8));
console.log(matchingAncestors(5,8));
console.log(matchingAncestors(6,8));