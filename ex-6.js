let height = undefined;
let result;

var isNullishCoalescing = function(height) {    // declare function
    return height ?? "Height is not defined";
}

result = isNullishCoalescing(height);   //หา result
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

