import axios from 'axios'
import {getKeyValue} from "./storage.service.js";

export const getWeather = async (city) => {
    const token = await getKeyValue('token')
    if (!token) {
        throw new Error('No token, create via -t [API_KEY]')
    }
    const {data, res} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'

        }
    })
    return data
}