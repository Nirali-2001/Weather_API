const apikey ="5711629b78dcd09db3b901bb1091b0ca"

async function fetchweatherData(city){
    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
 );
console.log(response);
let data = await response.json();
console.log(data);
updateweatherUI(data)
}

let cityElement = document.querySelector(".city");
let temperature = document.querySelector(".temp");
let windspeed = document.querySelector(".wind_speed");
let humidity = document.querySelector(".humidity");
let visibility = document.querySelector(".visibility_label");
let description = document.querySelector(".description_text") ;
let date = document.querySelector(".date");

function updateweatherUI(value){
    console.log(value);
    cityElement.textContent = value.name;
    temperature.textContent = `${Math.round(value.main.temp)}°`;
    windspeed.textContent = `${value.wind.speed}KM/H`;
    humidity.textContent = `${value.main.humidity}%`;
    visibility.textContent = `${value.visibility/1000}KM`;
    description.textContent = value.weather[0].description;

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
}

const formelement = document.querySelector(".search_form")
const inputelement = document.querySelector(".city_input")
formelement.addEventListener("submit",(event)=>{
    event.preventDefault();
    let city = inputelement.value;
    if (city != "") {
        fetchweatherData(city);
        inputelement.value = "";
}})