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

//arr[0]+arr[1]
//arr[0]+arr[1]+arr[2]

function maxSum(arr){
  let maxSum = 0;
  let sum=0;
  for(let i=0; i<arr.length;i++){
    sum = 0;  
    sum = arr[i];
    for(let j=i+1; j<arr.length;j++){
      sum += arr[j];
      if(sum>maxSum){
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

const answer = maxSum([4,6,-3,5,-2,1]);
console.log(answer);
//answer = 12
//O(n^2)

function mergeArrays(arr1,arr2){
  let output=[];
  let index1 = 0;
  let index2 = 0;
  let current = 0;
  while(current<(arr1.length+arr2.length)){
    
    let depleted1 = (index1>=arr1.length);
    let depleted2 = (index2>=arr2.length);

    //if next item comes from arr1
    if(!depleted1 && (depleted2 || (arr1[index1]<arr2[index2]))){
      output.push(arr1[index1]);
      index1++;
    //if next item comes from arr2
    } else {
      output.push(arr2[index2]);
      index2++;
    }
    current++;
  }

  return output;
}

const answer2 = mergeArrays([1,3,6],[2,4,5]);
console.log(answer2);
//answer2 = [1,2,3,4,5,6]
//O(n)


// function removeCharacters(string, chars) {
//   let output = '';
//   for (let i = 0; i < string.length; i++) {
//     for (let j = 0; j < chars.length; j++) {
//       if (string[i] !== chars[j]) {
//         output += string[i];
//       }
//     }
//   }
//   return output;
// }

function removeCharacters(string, chars) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    let contained = true;
    for (let j = 0; j < chars.length; j++) {
      if (string[i] === chars[j]) {
        contained = false;
      }
    }
    if (contained) {
      output += string[i];
    }
  }
return output;
}


console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'
// Complexity: O (n^2)