'use strict';



function urlifyString(string) {
    string = string.trim()
    let output = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            output += '%20';
        } else {
            output += string[i];
        }
    }
    return output;
}

console.log(urlifyString('  tauhida parveen'))

// input: tauhida parveen

// Output: tauhida%20parveen

// input: www.thinkful.com /tauh ida parv een

// output: www.thinkful.com%20/tauh%20ida%20parv%20een

// complexity: O (n)

function myFilter(arr, filter = 5) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= filter) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8]))

// input : [1, 2, 3, 4, 5, 6, 7, 8]

// output : [5, 6, 7, 8]

// complexity: O (n)

