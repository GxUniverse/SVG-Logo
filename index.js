// Import file system, fs, shapes, and modules.
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");
const { writeFile } = require("fs").promises;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for your logo text.",
    },
    {
      type: "input",
      name: "text_color",
      message:
        "Enter text color preference. (Only color keyword or hexidecimals will render properly)",
    },
    {
      type: "list",
      name: "shape",
      message: "Select logo shape.",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "shape_color",
      message:
        "Enter shape color preference. (Only color keyword or hexidecimals will render properly)",
    },
  ]);
};

