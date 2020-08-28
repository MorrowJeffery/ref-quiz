
const createRandom = function(arr, namestate) {
let myArr = [...arr];
let randomizedArr = [];
while (myArr.length > 0) {
  var randomIndex = Math.floor(Math.random() * myArr.length);
  randomizedArr.push(myArr[randomIndex]);
  myArr.splice(randomIndex, 1);
}
return randomizedArr;
}

export default createRandom;
