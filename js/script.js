const MY_API_KEY = 'sua key aqui';

const getWeather = (city) =>{
    let url = `http://api.weatherstack.com/current?access_key=${MY_API_KEY}&query=${city}`
    let request = XMLHttpRequest();

    request.open('GET',url);
}

console.log('teste')