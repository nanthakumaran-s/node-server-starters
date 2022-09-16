import inquirer from "inquirer";
import { directories } from "./templates.js";

const selectServerFromList = async () => {
  const res = {
    chooseTemplates: "",
    projectName: "",
    packageManager: "",
  };

  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      message: "Please enter the project name",
      default: "node-server-starters",
    },
  ]);
  res.projectName = projectName;
  
  const { chooseTemplate } = await inquirer.prompt([
    {
      type: "list",
      name: "chooseTemplate",
      message: "Please select a server template",
      choices: [...directories, new inquirer.Separator()],
    },
  ]);
  res.chooseTemplates = chooseTemplate;

  const { packageManager } = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Please select your choice",
      choices: ["npm", "yarn", new inquirer.Separator()],
    },
  ]);
  res.packageManager = packageManager;

  return res;
};

export default selectServerFromList;