import {getKey} from './apiKey.mjs';
const MY_API_KEY = getKey();

const getWeather = (city) =>{
    let url = `http://api.weatherstack.com/current?access_key=${MY_API_KEY}&query=${city}`
    let request = XMLHttpRequest();

    request.open('GET',url);
}