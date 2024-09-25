const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const apiKey = "ba57f6378d8fce0b256c8adf2c8b6b39";

const input =  document.querySelector('.search_class input');
console.log(input)
const searchBtn = document.querySelector('.search');

async function checkWeather(city) {
    const response = await fetch(url + city +`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.temprature').innerHTML = data.main.temp;
    document.querySelector('#humidity').innerHTML = data.main.humidity;


}
searchBtn.addEventListener('click',()=>{
    checkWeather(input.value);
})
// checkWeather();