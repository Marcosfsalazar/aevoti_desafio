const MY_API_KEY = '';

const getWeather = (city) =>{
    let url = `http://api.weatherstack.com/current?access_key=${MY_API_KEY}&query=${city}`
    let request = new XMLHttpRequest();

    request.open('GET',url);
    request.onreadystatechange = ()=>{
        if(request.readyState == 4 && request.status == 200){
            let txtJson = request.responseText;
            let objJson = JSON.parse(txtJson);

            //vars
            let temp = objJson.current.temperature;
            let time = objJson.location.localtime.split(" ");
            let data = time[0].split('-')
            console.log(data)

            document.getElementById('city-name').value = objJson.location.name;
            document.getElementById('city-temp').value = `${temp}C°`;
            document.getElementById('city-weather').value = objJson.current.weather_descriptions[0];
            document.getElementById('city-time').value = time[1];
            document.getElementById('city-day').value = `${data[2]}/${data[1]}/${data[0]}`;    

            console.log(objJson);
            console.log(objJson.current.temperature)
        }else if(request.readyState == 4 && request.status == 400){

        }
    }
    request.send();
}

let getSubmit = () => {
    let city = document.getElementById('cityname').value;
    
    if(city != ''){
        getWeather(city);
    }else{
        
    }
}


