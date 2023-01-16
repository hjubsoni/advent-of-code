const getPuzzle = async () => {
  const data = await window.fetch("https://adventofcode.com/2022/day/1/input");
  const response = await data.text();
  console.log(response);
};

getPuzzle();
