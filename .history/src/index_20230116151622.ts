import fs from "fs/promises";

const getData = async () => {
  try {
    const data = await fs.readFile("src/data/day1.txt", { encoding: "utf8" });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
