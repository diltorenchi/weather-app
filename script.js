
const container = document.querySelector('.container')
const search1 = document.querySelector('searchbox button')
const weatherbody=document.querySelector('.weather_body')
const weatherdetails = document.querySelector('.weather_details')
const weatherimage = document.querySelector(".weathericon")
const error = document.querySelector('.not_found')
const time = new Date()
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
const search = async()=>{


    let weathername = cname.value
    // console.log(weathername);

    if(weathername)
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weathername}&appid=69ee4983a6505a7639d8661aaf38dab7&units=metric`)

       const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=69ee4983a6505a7639d8661aaf38dab7&units=metric`)
       const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=69ee4983a6505a7639d8661aaf38dab7&units=metric`)
    //    console.log(response2);
        // console.log(response);
       
        response.json().then((weather)=>{
            // console.log(weather);


            if(weather.cod === "404"){
                container.style.height = '500px';
                weatherbody.style.display= 'none';
                weatherdetails.style.display = 'none';
                error.style.display = 'block';
                error.classList.add('fadeIn');
                return;
            }

            error.style.display = 'none';
            error.classList.remove('fadeIn');

           
            let name = weather.name
             console.log(name);

             //des

             let desc = weather.weather[0].description
             console.log(desc);

             //temperature

             let temp =Math.floor( weather.main.temp)
             console.log(temp);

             //feels

             let feel =Math.floor(weather.main.feels_like)

             //humidity

             let hum = weather.main.humidity
             console.log(hum);

             //speed

             

             let speed = weather.wind.speed

             console.log(speed);

             //weathericon

            

            if(weather.weather[0].main=="Clouds"){

             weatherimage.src="./images/clouds.png"

             }else if(weather.weather[0].main=="Clear")
             {
                weatherimage.src="./images/clear.png"
             }
             else if(weather.weather[0].main=="Rain")
             {
                weatherimage.src="./images/rain.png"
             }
             else if(weather.weather[0].main=="Drizzle")
             {
                weatherimage.src="./images/drizzle.png"
             }
             else if(weather.weather[0].main=="Mist")
             {
                weatherimage.src="./images/mist.png"
             }
             else if(weather.weather[0].main=="Snow")
             {
                weatherimage.src="./images/snow.png"
             }
            

        //    console.log(weatherimage);


           const date=time.getDate()
        //    const month=time.getMonth();
        const monthName = months[new Date().getMonth()];
       
        const dayOfWeek = daysOfWeek[time.getDay()];
        
           
           const year = time.getFullYear()
            const hour=time.getHours()
            const min = time.getMinutes()
            // const day= time.getDay()
                 
           

            weatherbody.style.display = '';
            weatherdetails.style.display = '';
            weatherbody.classList.add('fadeIn');
            weatherdetails.classList.add('fadeIn');
            container.style.height = '710px';


            response1.json().then((weatherdubai)=>{
            let name1 = weatherdubai.name
            console.log(name1);

            let temp1 =Math.floor( weatherdubai.main.temp)
             console.log(temp1);

             response2.json().then((weatherlondon)=>{
                let name2 = weatherlondon.name
                console.log(name2);
    
                let temp2 =Math.floor( weatherlondon.main.temp)
                 console.log(temp2);


        
             


             result.innerHTML = `
  
           
                 <div  class="weather_body">
                    
                 <p class="temperature">${temp}°C</p>
                 
                 <p class="weatherplace">${name}</p>
    
                
                 <img class="weathericon" src="images/clouds.png" alt="">
                 
                 
                 <p class="description">${desc}</p>
     
                </div>
    
                <div class="weather_details">
                 <div class="humidity">
                     <i class="fa-solid fa-water"></i>
                 </div>
                 <div class="humitext">
                     <span>${hum}%</span>
                     <p class="humtext">Humidity</p>
     
                 </div>
                 <div class="time">
                        <p id="clock">${hour}:${min}${hour>=12?'PM':'AM'}</p>
                    </div>
                    <div class="date">
                       <P id="date1">${dayOfWeek} | ${monthName} ${date}</P>
                    </div>
                 <div class="wind">
                     <i id="windlogo" class="fa-solid fa-wind"></i>
                 </div>
                 <div class="wintext">
                     <span>${speed}Km/hr</span>
                     <p class="windtext">Real Time Wind</p>
     
                 </div>
                </div>
                <div class="suggestion" >
                <h2 class="sea">Suggestion:-</h2>
               
                    <div class="grid-container">
                        <div class="card">
                            <h2>Dubai</h2>
                            <p class="temperature">${temp1}°C</p>
                                <i class="fa-solid fa-temperature-low"></i>
                                <img class="img1" src="images/clear.png" alt=""> 
                        </div>
                        <div class="card">
                            <h2>London</h2>
                <img class="" src="images/rain.png" alt="">
                <i class="fa-solid fa-temperature-low"></i>
                
                    <p class="temperature">${temp2}°C</p>
                        </div>
                      
                      </div>
    
                    
               </div>
           
           
            `


 
 
            
           
         }) }) })
    }
    else{
        alert('please enter any location')
    }
}