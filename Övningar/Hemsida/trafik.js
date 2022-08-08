
let input = document.querySelector(".input");
let button = document.querySelector(".btn")


const API_KEY = '466283c7-c370-4230-930d-c6487a7ec33f';


fetch('https://api.resrobot.se/v2.1/location.name?input=Göteborg&format=json&accessId=466283c7-c370-4230-930d-c6487a7ec33f')
.then(response => response.json())
.then(data => console.log(data));

function findTrain (city) {
  let searchURL = getCurrentTrainTime  
}