const things = [
    {
      name: 'racecar',
      cool: true,
    },
    {
      name: 'ram radar',
      cool: true,
    },
    {
      name: 'rat',
      cool: false,
    },
];
  
// with nested loops

// const howManySubstrings = (arr, str) => {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let obj = arr[i];
//         let superStr = obj.name;
//         let position = superStr.indexOf(str);

//         for (let j = 0; position !== -1; j++) {
//             count++;
//             position = superStr.indexOf(str, position + 1);
//         }
//     }

//     return count;
// };


// with a forEach and then using indexOf

const howManySubstrings = (arr, str) => {
    let count = 0;

    arr.forEach(obj => {
        let superStr = obj.name;
        let position = superStr.indexOf(str);

        for (let i = 0; position !== -1; i++) {
            count++;
            position = superStr.indexOf(str, position + 1);
        }
    })

    return count;
}

// with a forEach and then using indexOf and slice

// const howManySubstrings = (arr, str) => {
//     let count = 0;

//     arr.forEach(obj => {
//         let superStr = obj.name;
        
//         for (let i = 0; i < superStr.length; i++) {
//             if (superStr.indexOf(str) > -1) {
//                 let position = superStr.indexOf(str);
//                 count++;
//                 superStr = superStr.slice(position + 1)
//             }
//         }
//     })

//     return count;
// }


// Eliot's solution

// const howManySubstrings = (arr, searchString) => {
//     let count = 0;

//     arr.forEach(potentiallyCoolThings => {
//         Object.values(potentiallyCoolThings); // => ['racecar', true]
//         Object.values(potentiallyCoolThings).forEach(objValue => {
//             if (typeof objValue === 'string') {
//                 for (let i = 0; i < objValue.length; i++) {
//                     const subString = objValue.slice(i, i + searchString.length); // will grab a substring of the length of the the string i am looking for
//                     if (subString === searchString) {
//                         count++;
//                     }
//                 }
//             }
//         })
//     })

//     return count;
// }
  
howManySubstrings(things, 'r'); // => 6
howManySubstrings(things, 'ra'); // => 4
howManySubstrings(things, 'z'); // => 0