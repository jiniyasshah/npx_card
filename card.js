#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:jiniyasshahts@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
        value: () => {
          open("https://calendly.com/jiniyasshah/30min");
          console.log("\n See you at the meeting \n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("                     Jiniyas Shah"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("jiniyasshah01"),
  github: chalk.gray("https://github.com/") + chalk.green("jiniyasshah"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("jiniyas-shah-20267225b"),
  web: chalk.cyan("https://jiniyasshah.com.np"),
  npx: chalk.red("npx") + " " + chalk.white("jiniyas"),

  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("     I am currently looking for new opportunities,")}`,
    `${chalk.italic("     my inbox is always open. Whether you have a")}`,
    `${chalk.italic("     question or just want to say hi, I will try ")}`,
    `${chalk.italic("     my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
