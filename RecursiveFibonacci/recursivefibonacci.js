/*=======================================================================
// This function will perform a fibonacci sequence for n length using
// recursion.
=======================================================================*/
function recursiveFibonacci(num) {
    if (num === 1) return [0, 1];
    else {
        let tempNum = recursiveFibonacci(num - 1);
        tempNum.push(tempNum[tempNum.length - 1] + tempNum[tempNum.length - 2]);
        return tempNum;
    } 
};

 console.log(recursiveFibonacci(8));