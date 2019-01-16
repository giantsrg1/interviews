// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.
// Example: 'abcd' and 'dacb' - true
// xyzz and xyz - false
// zadz and zzda - true

//asdf and qwer -false

function compare(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    var tempStr1 = Array.from(str1).sort();
    var tempStr2 = Array.from(str2).sort();
    
    for(var i = 0; i < tempStr1.length; i++){
        if (tempStr1[i] !== tempStr2[i]){
           return false;
       }
    }
    
    return true;
    
    //return tempStr1.compare(tempStr2);
}


function compareUsingMap(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    
    var map = new Map();
    
    //map.has(key)
    //map.get(key)
    //map.set(K,V)
    
    for(var i = 0; i < str1.length; i++){
        var key = str1[i];
        if(map.has(key)){
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    };

    for(var i = 0; i < str2.length; i++){    
        var key = str2[i];
        if(!map.has(key)){
            return false;
        } else {
            if(map.get(key) == 0){
                return false;
            } else {
                map.set(key, map.get(key) - 1);
            }
        }
    }
    
    return true;
}

console.log(compareUsingMap('abcd', 'dacb'));

console.log(compareUsingMap('xyzz', 'xyz'));

console.log(compareUsingMap('zadz', 'zzda'));

console.log(compareUsingMap('asdf', 'qwer'));
