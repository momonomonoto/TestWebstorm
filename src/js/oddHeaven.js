
function isOddHeavy(arr){
    let notOddVal = arr
        .filter(elem=>elem%2 !== 0)
        .reduce((acc, current)=>acc>current? acc:current);

    return arr.every(val=>Math.sign(val)!==-1&&(val<notOddVal&&notOddVal%2===0||notOddVal%2 !==0));
}

let rightArr = [11,4,9,2,8,13,19,21,29,66];
let wrongArr =  [1,-2,-1,2];
console.log(isOddHeavy(rightArr));
