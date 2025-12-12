const apiKey="09facee84b1c05d38a55bbac550ef2b1";
const toggleThemeBtn = document.getElementById("toggle-theme");
const card = document.querySelector(".card");


async function cheakWeather() {
   const city=document.getElementById("city").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
    const res = await fetch(url);
    var data= await res.json();
    console.log(data);

            if (data.cod === "404") {
            document.querySelector("#m").src=""
            document.querySelector(".city").innerHTML = "Ville introuvable ";
            document.querySelector(".temp").innerHTML = "";
            document.querySelector(".humidity").innerHTML = "";
            document.querySelector(".country").innerHTML = "";
            document.getElementById("weather-icon").src="";
            document.querySelector(".wind").innerHTML = "";
            document.querySelector(".desc").innerHTML = "";
          
            document.querySelectorAll(".icon").forEach(el => {
                el.style.display = 'none';
                });
            document.querySelectorAll(".p").forEach(el => {
                el.style.display = 'none';
                });
            return;
        }
    document.querySelectorAll(".icon").forEach(el => el.style.display = 'inline');
    document.querySelectorAll(".p").forEach(el => el.style.display = 'block');
    document.querySelector(".city").innerHTML = data.name;
    document.getElementById("m").src="";
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".temp").innerHTML = `${data.main.temp} °C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} m/s`;
    document.querySelector(".desc").innerHTML = `${data.weather[0].description}`;
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
}catch(error){
    console.error("Erreur Réseau:",error);
        document.querySelector(".city").innerHTML="";
                document.querySelector(".temp").innerHTML = "";
            document.querySelector(".humidity").innerHTML = "";
            document.querySelector(".country").innerHTML = "";
            document.getElementById("weather-icon").src="";
            document.querySelector(".wind").innerHTML = "";
            document.querySelector(".desc").innerHTML = "";
            
}
}

btn.addEventListener("click",cheakWeather);
toggleThemeBtn.addEventListener("click", () => {
    card.classList.toggle("night-theme");
    if (card.classList.contains("night-theme")) {
        toggleThemeBtn.textContent = "Mode Jour";
        //document.getElementById("m").src="images/moon.png";
    } else {
        toggleThemeBtn.textContent = "Mode Nuit"
        //document.getElementById("m").src="images/4571485.png";
    }
});
