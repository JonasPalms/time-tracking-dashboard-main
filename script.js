// time toggle buttons
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");


// current time displays
const currentWork = document.getElementById("work-current");
const currentPlay = document.getElementById("play-current");
const currentStudy = document.getElementById("study-current");
const currentExercise = document.getElementById("exercise-current");
const currentSocial = document.getElementById("social-current");
const currentSelfCare = document.getElementById("self-care-current");

// previous time displays
const previousWork = document.getElementById("work-previous");
const previousPlay = document.getElementById("play-previous");
const previousStudy = document.getElementById("study-previous");
const previousExercise = document.getElementById("exercise-previous");
const previousSocial = document.getElementById("social-previous");
const previousSelfCare = document.getElementById("self-care-previous");

// nu jeg tænker over det kunne jeg også bare have lavet et array af alle elementerne


//event listeners
daily.addEventListener("click", getData);
weekly.addEventListener("click", getData);
monthly.addEventListener("click", getData);

// pass the time selector to the function
// select all relevant data points in the json file using the selector?
// update the UI (new numbers and words)
// use literal strings



function getData(event) {

    let previousTimes = [];
    let currentTimes = [];
    const selector = event.target.id;


    console.log(selector);
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < 6; i++) {
                currentTimes.push(data[i].timeframes[selector].current);
                previousTimes.push(data[i].timeframes[selector].previous)
            }
            console.log(previousTimes, currentTimes);
        });

    updateIU(selector, previousTimes, currentTimes);
}

function updateIU(selector, previous, current) {

    if (selector === "daily") {

    }
}