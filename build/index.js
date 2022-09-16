#!/usr/bin/env node
"use strict";
/*
 Node Server Starters
 15-09-2022
 Made By Nanthakumaran S
 https://github.com/nanthakumaran-s/node-server-starters
*/
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("util");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
const getStarted = async () => {
    // let loader;
    // try {
    //     loader = ora();
    //     const res = await selectServerFromList();
    //     const serverLoc = path.join(process.cwd(), res.projectName);
    //     console.log("[ 1 / 3 ] 🔍  copying project...");
    //     await copyProjectFiles(serverLoc, res.chooseTemplates);
    //     console.log("[ 2 / 3 ] 🚚  fetching node_modules...");
    //     await updatePackageJson(serverLoc);
    //     console.log("[ 3 / 3 ] 🔗  linking node_modules...");
    //     console.log(
    //         "\u001b[2m──────────────────────────────────────────\u001b[22m"
    //     );
    //     loader.start();
    //     await installNodeModules(serverLoc);
    //     success();
    // } catch (error) {
    //    err(error);
    // }
    console.log("hi");
};
// const updatePackageJson = async (destination) => {
//   const file = editJsonFile(`${destination}/package.json`, { autosave: true });
//   file.set("name", path.basename(destination));
// };
// const installNodeModules = async (destination) => {
//   loader.text = "Install node_modules...\n";
//   await execAsync("npm install --legacy-peer-deps", { cwd: destination });
// };
// const createGitignore = async (destination, spinner) => {
//   spinner.text = "Create .gitignore...";
//   const file = createWriteStream(path.join(destination, ".gitignore"), {
//     flags: "a",
//   });
//   return writeGitignore({
//     type: "Node",
//     file: file,
//   });
// };
// const initGit = async (destination) => {
//   await asyncExec("git init", { cwd: destination });
// };
// const getTemplateDir = async () => {
//   const read = promisify(readdir);
//   const contents = await read('./lib', { withFileTypes: true });
//   const directories = contents
//     .filter((p) => p.isDirectory())
//     .map((p) => p.name);
//   return directories;
// };
// const selectServerFromList = async () => {
//     const directories = await getTemplateDir();
//     const res = {
//         chooseTemplates: '',
//         projectName: '',
//     };
//     const { chooseTemplate } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "chooseTemplate",
//         message: "Please select a server template",
//         choices: [...directories, new inquirer.Separator()],
//       },
//     ]);
//     res.chooseTemplates = chooseTemplate;
//     const { projectName } = await inquirer.prompt([
//       {
//         name: "projectName",
//         message: "Please enter the project name",
//         default: "node-server-starters"
//       },
//     ]);
//     res.projectName = projectName
//     return res;
// }
// const success = () => {
//   loader.succeed(
//     chalk.green("Completed project setup successfully\n\n") +
//       chalk.whiteBright("Open the server with VS Code\n") +
//       chalk.blackBright("       cd server\n") +
//       chalk.blackBright("       code .\n")
//   );
// };
// const err = (error) => {
//   loader.fail(
//     chalk.red("Some error occured. Please raise an issue at ") +
//       chalk.cyan(
//         "https://github.com/nanthakumaran-s/node-server-starters/issues"
//       )
//   );
//   console.error(error);
// };
// await getStarted();
