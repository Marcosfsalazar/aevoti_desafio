const MY_API_KEY = '4672216151ad9a4c58f7ba56d78140d5';

const getWeather = (city) =>{
    let url = `http://api.weatherstack.com/current?access_key=${MY_API_KEY}&query=${city}`
    let request = new XMLHttpRequest();

    request.open('GET',url);
    request.onreadystatechange = ()=>{
        if(request.readyState == 4 && request.status == 200){
            let txtJson = request.responseText;
            let objJson = JSON.parse(txtJson);

            if(objJson.success != null){
                document.getElementById('city-weather').value = 'Cidade não encontrada!'
            }
            //vars
            let temp = objJson.current.temperature;
            let time = objJson.location.localtime.split(" ");
            let data = time[0].split('-')

            document.getElementById('city-name').value = objJson.location.name +'/'+objJson.location.country;
            document.getElementById('city-temp').value = `${temp}C°`;
            document.getElementById('city-weather').value = objJson.current.weather_descriptions[0];
            document.getElementById('city-time').value = time[1];
            document.getElementById('city-day').value = `${data[2]}/${data[1]}/${data[0]}`; 
            document.getElementById('span-alert').innerHTML = ''   

        }
    }
    request.send();
}

let getSubmit = () => {
    let city = document.getElementById('cityname').value;
    
    if(city != ''){
        getWeather(city);
    }else{
        document.getElementById('span-alert').innerHTML = 'Insira um valor!';
        document.getElementById('span-alert').className = 'alert';
    }
}


