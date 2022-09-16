#!/usr/bin/env node

/*
 Node Server Starters
 15-09-2022
 Made By Nanthakumaran S
 https://github.com/nanthakumaran-s/node-server-starters
*/

import chalk from "chalk";
import ora from "ora";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import copyProjectFiles from "./copyFiles.js";
import selectServerFromList from "./selectServerTemplete.js"
import installModules from "./installNodeModules.js";

const asyncExec = promisify(exec);
let loader;

const getStarted = async () => {
    try {
        loader = ora();
        const res = await selectServerFromList();
        const serverLoc = path.join(process.cwd(), res.projectName);
        console.log("[ 1 / 2 ] 🔍  copying project...");
        await copyProjectFiles(serverLoc, res.chooseTemplates);
        console.log("[ 2 / 2 ] 🚚  fetching node_modules...");
        console.log(
            "\u001b[2m──────────────────────────────────────────\u001b[22m"
        );
        loader.start();
        await installModules(serverLoc, res.packageManager, loader, asyncExec);
        asyncExec("git init", { cwd: serverLoc });
        asyncExec("git branch -M main", {cwd: serverLoc});
        success();
    } catch (error) {
       err(error);
    }
}

const success = () => {
  loader.succeed(
    chalk.green("Completed project setup successfully\n\n") +
    chalk.whiteBright("Open the server with VS Code\n") +
    chalk.blackBright("       cd server\n") +
    chalk.blackBright("       code .\n")
  );
};

const err = (error) => {
  loader.fail(
    chalk.red("Some error occured. Please raise an issue at ") +
    chalk.cyan("https://github.com/nanthakumaran-s/node-server-starters/issues")
  );
  console.error(error);
};

await getStarted();