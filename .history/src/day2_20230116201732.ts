import fs from "fs/promises";

const getData = async () => {
  try {
    const data = await fs.readFile("src/data/day2.txt", { encoding: "utf8" });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const calculatePoints = (player1: string, player2: string): number => {
  let score = 0;
  let scores = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  if (player1 === player2) {
    score = 3;
  } else if (
    (player1 === "A" && player2 === "Y") ||
    (player1 === "B" && player2 === "Z") ||
    (player1 === "C" && player2 === "X")
  ) {
    score = 6;
  }
  return (score += scores[player2]);
};

const rockPaperScissors = async () => {
  const data = await getData();
  const dataArr = data.split("\n").map((val) => val.replace("\r", ""));
  const dataArrPairs = dataArr.map((val) => val.split(" "));
  let totalScore = 0;
  dataArrPairs.forEach((pair) => {
    const [player1, player2] = pair;

    const points = calculatePoints(player1, player2);
    totalScore += points;
  });
  console.log(totalScore);
};

rockPaperScissors();
