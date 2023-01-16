import fs from "fs/promises";

const getData = async () => {
  try {
    const data = await fs.readFile("src/data/day1.txt", { encoding: "utf8" });
    return data;
  } catch (error) {
    console.log(error);
  }
};

getData();

const calculateKcal = async () => {
  const data = await getData();

  const dataArr: number[] = data
    .split("\n")
    .map((x) => (x === "" ? 0 : Number(x)));

  let winner = 0;
  let sum = 0;
  dataArr.forEach((num) => {
    if (num === 0) return;
    sum += num;
    if (sum > winner) winner = sum;
  });
  console.log(winner);
};

calculateKcal();
