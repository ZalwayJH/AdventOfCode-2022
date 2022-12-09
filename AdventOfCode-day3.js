const fs = require("fs");

fs.readFile("rucksackTypeList.js", "utf-8", function (err, data) {
  const savedData = data.split("\n");
  const firstCompartment = [];
  const secondCompartment = [];
  const matchingLowerCaseLetters = [];
  const matchingUpperCaseLetters = [];

  let sumTotal = 0;
  //Split the strings in half and assigning each part to an array
  savedData.map((element) => {
    return (
      firstCompartment.push(element.slice(0, element.length / 2)),
      secondCompartment.push(element.slice(element.length / 2, element.length))
    );
  });

  //sorting function that finds each letter that matches in each compartment including case sensitivity and pushes them to the appropriate array
  const sortFunction = (first, second) => {
    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < first[i].length; j++) {
        if (second[i].indexOf(first[i][j]) !== -1) {
          if (second[i].includes(first[i][j])) {
            if (first[i].lastIndexOf(first[i][j]) === j) {
              if (first[i][j] === first[i][j].toUpperCase()) {
                matchingUpperCaseLetters.push(first[i][j]);
              } else {
                matchingLowerCaseLetters.push(first[i][j]);
              }
            }
          }
        }
      }
    }
  };

  sortFunction(firstCompartment, secondCompartment);

  //converts the letter into a numeric value and adds it to the sum variable
  matchingLowerCaseLetters.forEach((letter) => {
    return (sumTotal += parseInt(letter, 36) - 9);
  });
  matchingUpperCaseLetters.forEach((letter) => {
    return (sumTotal += parseInt(letter, 36) + 17);
  });

  console.log(sumTotal);
});
