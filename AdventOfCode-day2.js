const fs = require("fs");

fs.readFile("RPSstrategyGuide.js", "utf-8", function (err, data) {
  const savedData = data.split("\n");

  const sum = [];

  for (let i = 0; i < savedData.length; i++) {
    const winLossDraw = [{ win: 6, draw: 3, loss: 0 }];

    const responseMoveSet = [{ X: 1, Y: 2, Z: 3 }];

    switch (savedData[i]) {
      case "A X":
        sum.push((responseMoveSet[0].Z += winLossDraw[0].loss));
        break;
      case "B X":
        sum.push((responseMoveSet[0].X += winLossDraw[0].loss));
        break;
      case "C X":
        sum.push((responseMoveSet[0].Y += winLossDraw[0].loss));
        break;
      case "A Y":
        sum.push((responseMoveSet[0].X += winLossDraw[0].draw));
        break;
      case "B Y":
        sum.push((responseMoveSet[0].Y += winLossDraw[0].draw));
        break;
      case "C Y":
        sum.push((responseMoveSet[0].Z += winLossDraw[0].draw));
        break;
      case "A Z":
        sum.push((responseMoveSet[0].Y += winLossDraw[0].win));
        break;
      case "B Z":
        sum.push((responseMoveSet[0].Z += winLossDraw[0].win));
        break;
      case "C Z":
        sum.push((responseMoveSet[0].X += winLossDraw[0].win));
        break;
      default:
        console.log("something went wrong");
        break;
    }
  }
  console.log(
    sum.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  );
});
