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
  let winner = 0;
  const dataArr = data.split("\n").map((x) => (x === "" ? x : Number(x)));
  dataArr.forEach((num) => {
    let sum = 0;
    if (num === 0) return;
    sum += num;
  });
};

calculateKcal();
