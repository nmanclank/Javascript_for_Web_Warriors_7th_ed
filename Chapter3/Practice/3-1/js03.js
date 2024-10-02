

// Days of the week

let weekDays = ["Sunday", "Monday", "Tuesday", "WednesDay",
"Thursday", "Friday", "Saturday"];

//Event listener

window.addEventListener("load", addWeekDays);

// Function to add weekday names to calendar

function addWeekDays() {
    // initial value
    let i = 0;
    //target the collection of heading cells 
    let headingCells = document.getElementsByTagName("th");
    //write each of the seven days into the heading cells
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        // increase counter by 1
        i++;
    }
}

//Event listener
window.addEventListener("load", showGames);

// Function to write game information into the calendar
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        //Open the paragraph and  assign style class that will color the game based on outcome.
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }

        //Display the game location
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        //including the opponent
        gameInfo += gameOpponents[i] + "<br>";

        // including the results and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] +
        " - " + runsAllowed[i] + ")";
        // Display innings played for suspended, shortened, or extrainning games
        if (gameInnings[i] < 5 ) {
            gameInfo += " [" + gameInnings[i]+"]***";

        } else if (gameInnings[i] < 9 ) {
            gameInfo += " [" + gameInnings[i]+"]*";

        } else if (gameInnings[i] > 9 ) {
            gameInfo += " [" + gameInnings[i]+ "]";

        }
        //close the paragraph
        gameInfo += "</p>";

        //Write info into cell table

        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}






