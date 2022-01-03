// time toggle buttons
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

// previous time displays
const previousOutputs = document.querySelectorAll("#time__previous");

// current time displays 
const currentOutputs = document.querySelectorAll("#time__current");

//click listeners
daily.addEventListener("click", updateUI);
weekly.addEventListener("click", updateUI);
monthly.addEventListener("click", updateUI);

// declare globals variables
let data = [];
let previousTimes = [];
let currentTimes = [];

// async func to fetch json data
async function loadData() {
    const response = await fetch('./data.json');
    const fetchedData = await response.json();
    data = fetchedData;
}

function selectText(selector) {

}

function updateUI(event) {

    // reset arrays if not empty 
    if (previousTimes || currentTimes) {
        previousTimes = [], currentTimes = [];
    }

    // selector for daily/weekly/monthly
    const selector = event.target.id;

    // Select apporopriate text.. tried callBackFn but could not get it to work. Fix later!
    let previousText = "";
    if (selector === "daily") {
        previousText = "Yesterday"
    } else if (selector === "weekly") {
        previousText = "Last week"
    } else {
        previousText = "Last month"
    }

    // write new values to array
    for (let i = 0; i < data.length; i++) {
        currentTimes.push(data[i].timeframes[selector].current);
        previousTimes.push(data[i].timeframes[selector].previous);
    }

    for (let i = 0; i < previousOutputs.length; i++) {
        previousOutputs[i].innerText = `${previousText} - ${previousTimes[i]}hrs`;
    }

    for (let i = 0; i < currentOutputs.length; i++) {
        currentOutputs[i].innerText = `${currentTimes[i]}hrs`;
    }
}


// load data on page load
loadData();
