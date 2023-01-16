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
  const dataArr = Array.from(data.split(/\r?\ /));
  console.log(dataArr);
};

calculateKcal();
