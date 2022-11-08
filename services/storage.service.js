import {homedir} from 'os'
import * as fs from 'fs'

const path = homedir() + '/weathercli/'

export const saveKeyValue = async (key, value) => {
    let data = {}

    await fs.promises.mkdir(path, {recursive: true})
    const file = await fs.promises.readFile(path + "weathercli.json")

    data = JSON.parse(file.toString())
    data[key] = value

    await fs.promises.writeFile(path + 'weathercli.json', JSON.stringify(data))
}

export const getKeyValue = async (key) => {
    let data = ''
    if (await isExist(path + 'weathercli.json')) {
        await fs.promises.readFile(path + "weathercli.json").then((file) => {
            data = JSON.parse(file.toString())[key]
        })

    }
    return data
}

const isExist = async (path) => {
    try {
        await fs.promises.stat(path)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}