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
};

function getSecret(obj){
    let keyArr = [];
    for (let keys in obj) {
        let j = obj[keys];
        if(j.length > 1){
            for (let i = 0; i < j.length; i++) {
                keyArr[j[i]] = keys;
            }
        } else {
            keyArr[j] = keys;
        }
    };
    return keyArr.join('');
};

console.log(getSecret(secret));