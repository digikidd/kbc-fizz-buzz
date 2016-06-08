/**
 * Created by kellycarmichael on 6/5/16.
 */
// var add = function(a, b) {
//     return a + b;
// }
// function multiplyByFive (num) {
//     return num * 5;
// }
// var addVal = add(2, 3)
// console.log(multiplyByFive(addVal));


var names = ['Bob', 'Billy', 'Mary', 'Beth'];
var compliment = ' is great!!';


// function compGiver(arr, phrase) {
//     var thatIsNice = [];
//     for(var i = 0; i < arr.length; ++i ) {
//         thatIsNice.push(arr[i] + phrase)
//     }
//     return thatIsNice;
// }
//
// console.log(compGiver(names,compliment));

// names.forEach(function (names) {
//     console.log(names, compliment);
// });

var count = 0;

function counter() {
    return count += 1;
}

console.log(counter());
console.log(counter());

