let apikey= "f0c81e2787ad630b98c470df61165ef3";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity=document.getElementById("userText");
let temperature=document.getElementById("temp");
let ct=document.getElementById("city");
let humidity=document.getElementById("humditiy-info");
let windInfo=document.getElementById("wind-info");

async function getWeatherData(){
    if(userCity.value=="")
    {
        alert("ENTER A CITY NAME");
    }
    else{
        city =userCity.value ;
        console.log(city);
        let response=await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        );
        let data=await response.json();
        console.log(data);
        ct.innerHTML=data.name;
        temperature.innerHTML=Math.round(data.main.temp -273.15)+"°C";
        humidity.innerHTML=data.main.humidity + "%" ;
        windInfo.innerHTML=data.wind.speed + "km/h";
        userCity.value="";
        
        if(data.weather[0].main=="clear")
        {
             weatherImage.src="" ;
        }
        else if(data.weather[0].main=="Snow"){
            weatherImage.src="https://i.pinimg.com/originals/a2/8e/14/a28e14831f3257f9e3477e7ca9f34543.gif";
        }else if(data.weather[0].main=="clouds"){
            weatherImage.src="https://i.makeagif.com/media/5-27-2017/2f3f5M.gif" ;
        }else if(data.weather[0].main=="Drizzle"){
            weatherImage.src="https://cdn.dribbble.com/users/1951927/screenshots/5777363/media/3ea9128badeba02ad7f5f1e344d9214a.gif " ;
        }else if(data.weather[0].main=="Mist"){
            weatherImage.src="https://cdnl.iconscout.com/lottie/premium/thumb/sunny-cloudy-rain-5520370-4629329.gif" ;
        }else if(data.weather[0].main=="Rain"){
            weatherImage.src="https://media4.giphy.com/media/2ECDUulqTYBK1ESxXW/giphy-preview.gif" ;
        }
        console.log(data);

    }

}