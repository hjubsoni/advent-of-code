import fs from "fs/promises";

const getData = async () => {
  try {
    const data = await fs.readFile("src/data/day2.txt", { encoding: "utf8" });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const calculatePoints = (
  player1: string,
  player2: string,
  outcome: number
): number => {
  let score = 0;
  let scores = {
    A: 1,
    B: 2,
    C: 3,
  };

  if (player1 === player2) {
    outcome = 3;
  } else if (
    (player1.trim() === "A" && player2.trim() === "Y") ||
    (player1.trim() === "B" && player2.trim() === "Z") ||
    (player1.trim() === "C" && player2.trim() === "X")
  ) {
    outcome = 6;
  }
  return (score += scores[player2] + outcome);
};

const rockPaperScissors = async () => {
  const data = await getData();
  const dataArr = data.split("\n").map((val) => val.replace("\r", ""));
  const dataArrPairs = dataArr.map((val) => val.split(" "));
  let totalScore = 0;
  dataArrPairs.forEach((pair) => {
    const [player1, player2] = pair;
    let outcome = 0;
    const points = calculatePoints(player1, player2, outcome);
    totalScore += points;
  });
  console.log(totalScore);
};

rockPaperScissors();
