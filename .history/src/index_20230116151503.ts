import fs from "fs/promises";

const data = async () => {
  try {
    const data = await fs.readFile("/data/day1.txt", { encoding: "utf8" });
    return data;
  } catch (error) {
    console.log(error);
  }
};
