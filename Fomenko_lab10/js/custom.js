const secret = {
    "!": [17],
    " ": [5,10],
    "e": [1,15],
    "o": [4,8],
    "h": [0],
    "l": [2,3,13,14,16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
}


var keys = Object.keys(secret);
var values = Object.values(secret);
// console.log('keys-->', keys);
// console.log('values-->', values);


// var count = 0;
for(var i = 0; i < values.length; i++){
    // console.log('keys[i]-->', keys[i]);
    for(j = 0; j < keys.length; j++){
            // var result = [];
            // result = result.push(values[j]);
            // console.log('values[j]-->', values[j]);
        var count = 0;
        if(values[i][j] === j){
            console.log('keys[i]-->', keys[i]);
        }
        count++;
    }
}

// const secret = {
//     "!": [17],
//     " ": [5,10],
//     "e": [1,15],
//     "o": [4,8],
//     "h": [0],
//     "l": [2,3,13,14,16],
//     "f": [6],
//     "r": [7],
//     "m": [9],
//     "H": [11],
//     "i": [12],
// }

// function getKey(obj) {
//     let keyArr = [];
//     for (let keys in obj) {
//         let j = obj[keys];
//         if (j.length > 1) {
//             for (let i = 0; i < j.length; i++) {
//                 keyArr[j[i]] = keys;
//             }
//         } else {
//             keyArr[j] = keys;
//         }
//     }
//     return keyArr.join('');
// }

// console.log(getKey(secret));