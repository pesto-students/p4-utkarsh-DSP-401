let findDup = new Map();
function toFidDuplicate() {
    let array = [1,2,1,2,8,7,8,1];
    let to = {};

    let returnToReult = false;
    for (let i = 0; i < array.length; i++) {
        console.log('start =>',to);
        if(to[array[i]]) {
            findDup.set("last index is : " + i, array[i]);
        }

        to[array[i]] = true;
    }

    console.log('end 12=>', );
    
    return {result: (findDup.size > 0) ? true : false , duplicateItems: findDup};
}

console.log(toFidDuplicate());