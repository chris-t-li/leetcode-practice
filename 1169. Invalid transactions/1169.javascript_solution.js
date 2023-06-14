// on each iteraction, need to check if it has the same name, diff city, arr[0] exists in tObj
// diff city: arr[3] not in tObj[arr[0]]
// need to check arr[1] not within +/- 60 of tObj[arr[0]].keys (where keys is not arr[3])
// tObj[arr[0]] is an array of transactions [index, time, amount]
// need to check if time is 
// shape of tObj:
/*
const obj = {
    "alice": {
        "mtv": [
            [i, time, amt],
            [t, time, amt],
        ],
        "beijing": [
            [i, time, amt],
            [i, time, amt],
            [i, time, amt],
        ]
    },
    "bob": {
        "sydney": []
    }
}
*/

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
    const invalid = new Set();
    const tObj = {};

    for (let i = 0; i < transactions.length; i++) {
        const [name, time, amt, city] = transactions[i].split(",");
        if (amt > 1000) {
            invalid.add(i);
        }
        // name does not exist in tObj
        if (!tObj[name]) {
            tObj[name] = {
                [city]: [[i, time, amt]]
            }
        } else {
            // place does not exist (diff city)
            if (!tObj[name][city]) {
                tObj[name][city] = [[i, time, amt]];
            } else {
                // place does exist
                tObj[name][city].push([i, time, amt]);
            }
        }
        // check if same name, diff city, within 60 mins:
        // get keys where city is diff, find all transactions. Test if time is +/- 60 of arr[1]
        const otherPlaces = Object.keys(tObj[name]).filter(place => place !== city); // ["mtv"]
        otherPlaces.forEach(city => {
            tObj[name][city].forEach(t => {
                if (parseInt(t[1]) - 60 <= time && time <= parseInt(t[1]) + 60) {
                    invalid.add(i);
                    invalid.add(t[0]);
                }
            })
        })
    }
    return transactions.filter((t, i) => {
        if (invalid.has(i)) {
            return t;
        }
    })
};


