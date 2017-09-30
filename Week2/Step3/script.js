//Button that says "You clicked me"

let firstDiv = document.createElement('div');
firstDiv.setAttribute("id", "first");
document.body.appendChild(firstDiv);

let button01 = document.createElement('button');
button01.innerHTML = 'Click me Senpai!';
firstDiv.appendChild(button01);

button01.onclick = function() {
    alert('You clicked me Senpai!');
}

////Button for getting the weather in Amsterdam
//
////Create container div
//let secondDiv = document.createElement("div");
//secondDiv.setAttribute("id", "second");
//document.body.appendChild(secondDiv);
//
////Create button
//let weatherButton = document.createElement("button");
//weatherButton.setAttribute("id", "amsterdam weather");
//weatherButton.innerHTML = "Click me for the weather <br /> in Amsterdam!";
//secondDiv.appendChild(weatherButton);
//
////Get data from the API
//let weather = new XMLHttpRequest();
//weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=fb70e114c3982ecf844f3a6daf843fa3&units=metric", false);
//weather.send(null);
//let data = JSON.parse(weather.response);
//
////Define city and temperature variables
//let city = data.name;
//let temp = data.main.temp;
//
////Create div that 
//let div = document.createElement("div");
//div.setAttribute("id", "weatherContainer");
//
////Assign inner HTML
//div.innerHTML = "The weather in " + city + " is " + temp;
//
////Triggering function that shows the temperature when clicked
//weatherButton.onclick = function () {
//    document.body.appendChild(div);
//}

//Getting the weather after typing in the city name in the input field

let thirdDiv = document.createElement("div");
thirdDiv.setAttribute("id", "third");
document.body.appendChild(thirdDiv);

let containerDiv = document.createElement("div");
containerDiv.setAttribute("id", "container");
containerDiv.innerHTML = "City:";
thirdDiv.appendChild(containerDiv);

let inputField = document.createElement("input");
inputField.setAttribute("id", "cityInput");
inputField.setAttribute("value", "");
inputField.innerHTML = "Type city name here";
containerDiv.appendChild(inputField);

let submitButton = document.createElement("button");
submitButton.setAttribute("id", "submit");
submitButton.innerHTML = "Submit";
document.body.appendChild(submitButton);

let resultDiv = document.createElement("div");
resultDiv.setAttribute("id", "resultDiv");
document.body.appendChild(resultDiv);

const urlQuery = "https://api.openweathermap.org/data/2.5/weather?q="
const urlAPIKey = "&appid=fb70e114c3982ecf844f3a6daf843fa3&units=metric";
let url = urlQuery + inputField.value + urlAPIKey 

function getWeather() {
    let url = urlQuery + inputField.value + urlAPIKey; 
    let weather = new XMLHttpRequest();
    weather.open("GET", url, false);
    weather.send(null);
    let data = JSON.parse(weather.response);
    let temp = Math.round(data.main.temp);
    resultDiv.innerHTML = "The weather in " + inputField.value + " is " + temp + "°C.";
}

submitButton.addEventListener("click", getWeather);
