const apiKey="abb68644518ab8a126ecf0b3e424772a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputfield=document.querySelector(".placeinput input");
const Btn=document.querySelector(".placeinput button");
const WeatherIcon=document.querySelector("body");

async function Weather(place){

    const response=await fetch(apiUrl + place + `&appid=${apiKey}`);
           
     if(response.status==404){
        document.querySelector(".error").style.display="block";
     }
   else{
    var info=await response.json();
     console.log(info);
      
    document.querySelector(".place").innerHTML=info.name;
    document.querySelector(".temperature").innerHTML=info.main.temp + "°C";
    document.querySelector(".condition").innerHTML=info.weather[0].main;
    document.querySelector(".tempmaxmin").innerHTML=(info.main.temp_max )+ "°C / " + (info.main.temp_min) + "°C";
 
    
    document.querySelector(".error").style.display="none";
    if(info.weather[0].main=="Clouds"){
      document.querySelector(".currweather").style.background="linear-gradient(to right,rgb(141, 141, 142),rgb(49, 49, 49))";
      document.querySelector("body").style.background="url('CloudyWeather.jpg')";
      document.querySelector(".placeinput").style.background="linear-gradient(to right,rgb(141, 141, 142),rgb(49, 49, 49))";
      document.querySelector(".placeinput button").style.background="grey";
   }
      else if(info.weather[0].main=="Clear"){
         document.querySelector(".currweather").style.background="linear-gradient(to right,rgb(127, 194, 241),rgb(6, 76, 114))";
      document.querySelector("body").style.background="url('backgrd.jpg')";
      document.querySelector(".placeinput").style.background="linear-gradient(to right,rgb(127, 194, 241),rgb(6, 76, 114))";
      document.querySelector(".placeinput button").style.background="rgb(68, 119, 155)";
   }
   }
    
}
   Btn.addEventListener("click", ()=>{
    Weather(inputfield.value);
   })


