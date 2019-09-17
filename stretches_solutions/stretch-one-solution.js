const treasureMap = [
    ['', '', ''],
    ['', '', 'X'],
    ['', '', ''],
];
  
const findTheTreasure = (map, trasure) => {
// YOUR CODE
    for (let i = 0; i < map.length; i++) {
        let treasures = map[i];

        for (let j = 0; j < treasures.length; j++) {
            let treasure = treasures[j];
            if (trasure === treasure) {
                return `[${j}, ${i}]; (this is [x, y] - 0 indexed)`
            }
        }
    }
    return 'No treasure!'
};

// alt

// const findTheTreasure = (map, trasure) => {
//     // YOUR CODE
//     let result = 'No treasure!' // .forEach does not return a value; so we use result
//     map.forEach((row, y) => {
//         row.forEach(cell, x) => {
//             if (cell === treasure) {
//                 result = [x, (map.length - y) - 1]
//             }
//         }
//     })
// 
//      return result
// };
  
//   findTheTreasure(treasureMap, 'X'); // => [2, 1]; (this is [x, y] - 0 indexed);
//   findTheTreasure(treasureMap, 'o'); // => 'No treasure!';