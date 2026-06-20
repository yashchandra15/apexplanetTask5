async function getWeather(){

const city=document.getElementById("cityInput").value;

const url=
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json();

document.getElementById("weatherResult").innerHTML=
`
<h4>${data.name}</h4>
<p>${data.main.temp}°C</p>
<p>${data.weather[0].description}</p>
`;

}
catch(error){

document.getElementById("weatherResult").innerHTML=
"City not found";

}

}