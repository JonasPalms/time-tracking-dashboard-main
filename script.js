// time toggle buttons
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");


// current time displays


// previous time displays
const previousWork = document.getElementById("work-previous");
const previousPlay = document.getElementById("play-previous");
const previousStudy = document.getElementById("study-previous");
const previousExercise = document.getElementById("exercise-previous");
const previousSocial = document.getElementById("social-previous");
const previousSelfCare = document.getElementById("self-care-previous");

// nu jeg tænker over det kunne jeg også bare have lavet et array af alle elementerne

const currentOutputs = document.querySelectorAll("#time__current");
console.log(currentOutputs);

//event listeners
daily.addEventListener("click", getData);
weekly.addEventListener("click", getData);
monthly.addEventListener("click", getData);

// pass the time selector to the function
// select all relevant data points in the json file using the selector?
// update the UI (new numbers and words)
// use literal strings


let previousTimes = [];
let currentTimes = [];

function getData(event) {

    const selector = event.target.id;

    if (previousTimes || currentTimes) {
        previousTimes = [], currentTimes = [];
    }

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < 6; i++) {
                currentTimes.push(data[i].timeframes[selector].current);
                previousTimes.push(data[i].timeframes[selector].previous);
            }

        })
        .catch(error => console.log(error));


    updateIU(previousTimes, currentTimes);
}

function updateIU(previousTimes, currentTimes) {

    console.log(previousTimes, currentTimes);

    currentOutputs.forEach(output => {
        output.innerText = `${currentTimes[0]}hrs`;
    })
}

