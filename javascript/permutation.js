// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

// Given a list of integers, write a function to return all possible permutations.
// E.g., given the list [1,2,3], the function should return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// [1,2,3], [1,3,2] 

// E.g., given the list [1,2,2], the function should return [[1,2,2],[2,1,2],[2,2,1]].

function permutation(array){
    let tempArray = [];
    
    function permute(array, array2){
        if(!array2){
            array2 = [];
        }
        if(array.length === 0){
            tempArray.push(array2);
        } else {
            let holder = [];
            for(let i = 0; i < array.length; i++) {
                let current = array.slice();
                if(holder.indexOf(current[i]) == -1){
                    holder.push(current[i]);
                    let next = current.splice(i, 1);
                    permute(current.slice(), array2.concat(next));
                }
            }
        }
    }
    
    permute(array);
    return tempArray;
}

console.log(permutation([1,2,2]));

//console.log(permutation([1,2,3,4]));