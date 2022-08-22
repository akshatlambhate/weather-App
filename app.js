 
 //selectors
 const temperature = document.querySelector('.tempvalue');
 const locationCurrent = document.querySelector('.locationbutton');
 const cityName = document.querySelector('.Cityname');
 const Maxtemp = document.querySelector('.maxtempvalue');
 const Mintemp = document.querySelector('.mintempvalue');
 const Longitude = document.querySelector('.longvalue');
 const Latitude = document.querySelector('.latvalue');
 const Humidity = document.querySelector('.humidityvalue');
 const Pressure = document.querySelector('.pressurevalue');
 const windspeed = document.querySelector('.windspeedvalue')
 const Submitbtn = document.querySelector('.submitbtn');
  let citywisename = document.getElementById('abc');
  let Search = citywisename.value; 

 
 //eventlistners
  locationCurrent.addEventListener("click",FetchLocation);
  Submitbtn.addEventListener("click",cityWiseWeather);

  
//functions
function FetchLocation(){
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long= position.coords.longitude;
           lat = position.coords.latitude;
        //    const proxy = "cors-anywhere.herokuapp.com";
           const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ad2fc56762da080d3640800dd13a8114`;
    
           fetch(api)
           .then( response => {
            return response.json();
           })
           .then (data => {
            console.log(data);
            const {temp ,temp_max ,temp_min,humidity,pressure} = data.main;
            // Set Api value to DOM elements
            temperature.textContent =Math.floor(temp-271.15);
            Maxtemp.textContent =Math.floor(temp_max-271.15);
            Mintemp.textContent =Math.floor(temp_min-271.15);;
            Humidity.textContent = humidity;
            Pressure.textContent =pressure;
            cityName.textContent = data.name;
             Longitude.textContent = long;
             Latitude.textContent = lat;
             windspeed.textContent=data.wind.speed;

           })
        })
    
    }
    else{
        h1.textContent = "it does ot work";
    }

}
//omBhatnagar
function cityWiseWeather(event){
    event.preventDefault();
    console.log(Search,"hello");
 
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=ad2fc56762da080d3640800dd13a8114`;
      console.log("hi")
    console.log(api)
    fetch(api)
    .then(response=>{
        return response.json();
    })
    .then(data => {
        console.log(data);

    })
}


// function apicall(){
//     const api = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=ad2fc56762da080d3640800dd13a8114`;
//     fetch(api)
//      console.log(api)
//     // .then(response=>{
//     //     return response.json();
//     // })
//     // .then(data => {
//     //     console.log(data);
//     // })

// }