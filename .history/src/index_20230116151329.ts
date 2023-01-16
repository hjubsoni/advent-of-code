import { fs } from "fs";

const data = async () => {
  try {
    const data = await fs.readFile("/data/day1.txt", "utf-8");
    return data;
  } catch (error) {
    console.log(error);
  }
};
