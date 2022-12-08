const fs = require("fs");

fs.readFile("listOfCalories.js", "utf-8", function (err, data) {
  const rawList = data.split("\n");
  for (i in rawList) {
    if (rawList[i] === "") {
      rawList[i] = 0;
    }
  }

  const combinedCalories = [];
  const convertedToNumbers = [];
  const topThreeNumbers = [];

  rawList.map((element) => {
    convertedToNumbers.push(parseInt(element));
  });

  let sum = 0;

  convertedToNumbers.filter((element) => {
    if (element !== 0) {
      sum += element;
    } else {
      combinedCalories.push({ answer: sum });
      sum = 0;
    }
  });

  const orderedNumbers = combinedCalories.sort(function (a, b) {
    return b.answer - a.answer;
  });

  for (let i = 0; i < 3; i++) {
    topThreeNumbers.push(orderedNumbers[i]);
  }

  const largestNumber = combinedCalories.shift();

  const combinedTopThree = topThreeNumbers.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.answer;
    },
    0
  );

  console.log(largestNumber);
  console.log(combinedTopThree);
  console.log(topThreeNumbers);
});
