import {getArgs} from "./helpers/agrs.js"
import chalk from "chalk";
import {printHelp} from "./services/log.service.js";
import {getKeyValue, saveKeyValue} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const initCLI = async () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.t) {
        await saveKeyValue('token', args.t).then(() => {
            console.log(chalk.green("Token Saved"))
        })

    }
    if (args.save) {
        await saveKeyValue('city', args.save).then(() => {
            console.log(chalk.green("City Saved"))
        })
    }

    await getWeather('kokand')
}

await initCLI()