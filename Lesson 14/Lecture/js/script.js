fetch('https://api.openweathermap.org/data/2.5/weather?q=Bishkek,kg&appid=5c32ce994c3668d65bb55ab967a0bf2c&units=metric')
    .then(function(resp) { return resp.json() }) // Получает от fetch строку и преобразует в массив
    .then(function (data){
        console.log(data);
        document.querySelector('.forecast_city-name').textContent = data.name;
        document.querySelector('.forecast_tempreture').innerHTML = data.main.temp + `&deg;`;
        document.querySelector('.forecast_weather').innerHTML = data.weather[0].description;
        document.querySelector('.forecast_features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function (){
        // catch any errors
    }) 