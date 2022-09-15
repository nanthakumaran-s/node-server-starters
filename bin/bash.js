#!/usr/bin/env node

/*
 Node Server Starters
 15-09-2022
 Made By Nanthakumaran S
 https://github.com/nanthakumaran-s/node-server-starters
*/

import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
import ora from "ora";
import ncp from "ncp";
import path from "path";

let loader;

const err = (error) => {
    loader.fail(
      chalk.red("Some error occured. Please raise an issue at ") +
        chalk.cyan(
          "https://github.com/nanthakumaran-s/node-server-starters/issues"
        )
    );
    console.error(error);
}

const success = () => {
    loader.succeed(
        chalk.green("Completed project setup successfully\n\n") +
        chalk.whiteBright("Open the server with VS Code\n") +
        chalk.blackBright("       cd server\n") +
        chalk.blackBright("       code .\n")
    );
}

const getStarted = async () => {
    const fileName = process.argv[2] !== undefined ? process.argv[2] : "node-server-starters";
    const serverLoc = path.join(process.cwd(), fileName);
    try {
        loader = ora();
        loader.start();
        success();
    } catch (error) {
       err(error);
    }
}

await getStarted();