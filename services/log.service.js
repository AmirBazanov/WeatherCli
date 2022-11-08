import chalk from "chalk";


export const printHelp = () => {
    console.log(chalk.green('-s') + " for searching city." + " " + chalk.yellow("Example: -s moscow"))
    console.log(chalk.green('-h') + ' prints this')
    console.log(chalk.green("-save") + ' for save city.' + ' ' + chalk.yellow("Example: -save moscow"))
}