const aynRand = {
    faith: false,
    religion: false,
    reason: true,
    objectivism: true,
};

const galileoGalilei = {
    faith: true,
    religion: true,
    reason: true,
    gravity: true,
};

// my solution


// const tellMeAboutIt = someObject => {
//     someObject.tellMeAboutIt = function () {
//         let beliefs = []
//         for (k in someObject) {
//             if (someObject[k] === true) {
//                 beliefs.push(k);
//             }
//         }
//         beliefsStr = beliefs.join(', ');
    
//         return `I believe in: ${beliefsStr}`;
//     }

//     return someObject;
// };


// FSA Solution

const tellMeAboutIt = obj => {
    return {
        tellMeAboutIt: () => {
            const values = [];
            Object.keys(obj).forEach(key => {
                if (obj[key]) {
                    values.push(key);
                }
            })
            return `I believe in: ${values.join(', ')}`;
        }
    }
};

// this problem is about closure
// they use a for each loop
// just create a new object that has the information from the submitted object
// and the function in that object (tellMeAboutIt) remembers the information from when it was created
// big takeaway: 1) important to be able to pull out values and keys from an object
// 2) become comfortable with functions that return other functions
// 3) become comfortable with closure - that we pass the object in and that object is available to use with the function that is returned

const talkativeAynRand = tellMeAboutIt(aynRand);
const talkativeGalileoGalilei = tellMeAboutIt(galileoGalilei);

talkativeAynRand.tellMeAboutIt(); // => "I believe in: reason, objectivism"
talkativeGalileoGalilei.tellMeAboutIt(); // => "I believe in: faith, religion, reason, gravity"