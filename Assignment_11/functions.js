
function even(...arr){
let even = arr.filter (x => x % 2 == 0);
return even;
}


// Array.prototype.myevenFunction = function(...arr){

//     return arr.filter(x=> x%2==0);
// }


function odd(...arr){
    let odd = arr.filter(x => x % 2 != 0);
return odd;
}


[1,2,3,4,5,6].myevenFunction(); // return 2,4,6
module.exports = {even, odd};
