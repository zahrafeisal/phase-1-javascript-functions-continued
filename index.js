// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());


function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());


function wrapAdjective(string = '*') {
    return function(adjective = 'special') {
        return `You are ${string}${adjective}${string}!`
    }
}
console.log(wrapAdjective()());


const array = (function (thingToAdd) {
    const base = 3;
    return [
      function () {
        return base + thingToAdd;
      },
      function () {
        return base;
      },
    ];
  })(2);

  console.log(array[0]());
  console.log(array[1]());
