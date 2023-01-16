import fs from "fs/promises";

const getData = async () => {
  try {
    const data = await fs.readFile("src/data/day2.txt", { encoding: "utf8" });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const calculatePoints = () => {};

const rockPaperScissors = async () => {
  const data = await getData();
  const dataArr = data.split("\n");
  console.log(dataArr);
};

rockPaperScissors();
