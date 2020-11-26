const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");


const updateUI = (data) => {
     
//const cityDets = data.cityDets;
//const weather = data.weather;
//Destructuring process for the code above, simpler syntax
 const { cityDets, weather } = data;

//Update html details
 details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <spa>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

    //update night and day images
    const iconScr =`img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconScr);
    

    let timeScr = null;
    if(weather.IsDayTime){
      timeScr = "img/day.svg"
    } else {
      timeScr = "img/night.svg"
    }
    time.setAttribute("src", timeScr);

    //remove the d-none class if present
     if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
     }

 };

const updateCity = async (city) => {
 
     const cityDets = await cityLocation(city);
     const weather = await weatherDetails(cityDets.Key);

    return{ cityDets, weather};
};

cityForm.addEventListener("submit", e => {
    //this prevents the page from reloading when we hit enter
    e.preventDefault();
    
  //this gets the city value inputted by the user
  const city = cityForm.city.value.trim();
  cityForm.reset(); 
  
  //this updates the html page with the new city inputted by the user
  updateCity(city)
       .then(data => updateUI(data))
       .catch(err => console.log(err));
});
