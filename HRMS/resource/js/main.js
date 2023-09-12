function GetInfo(){
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = newName.value;

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=f7a73e44abd4a13f52a3831dd01d2d67')
.then(response => response.json())
.then(data =>{
        document.getElementById("temp").innerHTML = "Temp: "+Number(data.list[0].main.temp-273.15).toFixed(2)+"°C";
        document.getElementById("humidity").innerHTML = "Humidity: "+data.list[0].main.humidity+" %";
        document.getElementById("img1").src="https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
        document.getElementById("img2").src="https://openweathermap.org/img/wn/"+data.list[1].weather[0].icon+"@2x.png";
        document.getElementById("img3").src="https://openweathermap.org/img/wn/"+data.list[2].weather[0].icon+"@2x.png";
        document.getElementById("img4").src="https://openweathermap.org/img/wn/"+data.list[3].weather[0].icon+"@2x.png";
        document.getElementById("img5").src="https://openweathermap.org/img/wn/"+data.list[4].weather[0].icon+"@2x.png";
        for(i=0;i<5;i++){
            document.getElementById("day"+(i+1)+"Min").innerHTML = "Min-temp: "+Number(data.list[i].main.temp_min-273.15).toFixed(2)+"°C";
        }
        for(i=0;i<5;i++){
            document.getElementById("day"+(i+1)+"Max").innerHTML = "Max-temp: "+Number(data.list[i].main.temp_max-273.15).toFixed(2)+"°C";
        }
})
    console.log(data)

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Aurangabad";
    GetInfo();
}
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
