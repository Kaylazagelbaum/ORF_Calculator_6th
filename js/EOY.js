window.addEventListener("load", pageSetup);


function accuracy() {
    let accuracyScore = Number(document.getElementById("accuracy").value);
    if (accuracyScore <= 85) {
        accuracyScore = 85;
    }
    const percent = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85];
    const pair = [120, 112, 104, 96, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 8, 0];
    const combinedList = percent.map((key, item) => [key, pair[item]]);
    const dataObject = Object.fromEntries(combinedList)
    const correspondingValue = dataObject[accuracyScore];

    return correspondingValue;
}

function retell() {
    let retellScore = Number(document.getElementById("retell").value);
    return retellScore * 2;
}

function maze() {
    let mazeScore = Number(document.getElementById("maze").value);
    return mazeScore * 4;
}

function pageSetup() {
    finalScore()

    document.getElementById("retell").onchange = finalScore;
    document.getElementById("maze").onchange = finalScore;
    document.getElementById("accuracy").onchange = finalScore;
    document.getElementById("wordsCorrect").onchange = finalScore;

}

function finalScore() {
    let correctWords = Number(document.getElementById("wordsCorrect").value);

    let total = correctWords + retell() + maze() + accuracy();

    document.getElementById("output").innerHTML = total;

    colorCode()
}

function colorCode() {

    // RETELL COLOR CODING
    let retellInfo = document.getElementById("retell");
    let retellScore = Number(retellInfo.value); // Get the current value NOW

    // 1. Remove all old colors so they don't stack
    retellInfo.classList.remove('red', 'orange', 'yellow', 'green');

    // 2. Add the correct color based on the current value
    if (retellScore > 0 && retellScore <= 23) {
        retellInfo.classList.add('red');
    } else if (retellScore >= 24 && retellScore <= 31) {
        retellInfo.classList.add('orange');
    } else if (retellScore >= 32 && retellScore <= 49) {
        retellInfo.classList.add('yellow');
    } else if (retellScore >= 50) {
        retellInfo.classList.add('green');
    }


    // MAZE COLOR CODING
    let mazeInfo = document.getElementById("maze");
    let mazeScore = Number(mazeInfo.value);

    mazeInfo.classList.remove('red', 'orange', 'yellow', 'green');

    if (mazeScore > 0 && mazeScore <= 14) {
        mazeInfo.classList.add('red');
    } else if (mazeScore >= 15 && mazeScore <= 20) {
        mazeInfo.classList.add('orange');
    } else if (mazeScore >= 21 && mazeScore <= 29) {
        mazeInfo.classList.add('yellow');
    } else if (mazeScore >= 30) {
        mazeInfo.classList.add('green');
    }

    // ACCURACY COLOR CODING
    let accuracyInfo = document.getElementById("accuracy");
    let accuracyScore = Number(accuracyInfo.value);

    accuracyInfo.classList.remove('red', 'orange', 'yellow', 'green');

    if (accuracyScore > 0 && accuracyScore <= 93) {
        accuracyInfo.classList.add('red');
    } else if (accuracyScore >= 94 && accuracyScore <= 96) {
        accuracyInfo.classList.add('orange');
    } else if (accuracyScore >= 97 && accuracyScore <= 98) {
        accuracyInfo.classList.add('yellow');
    } else if (accuracyScore >= 99) {
        accuracyInfo.classList.add('green');
    }

    // WORDS CORRECT COLOR CODING
    let correctInfo = document.getElementById("wordsCorrect");
    let correctScore = Number(correctInfo.value);

    correctInfo.classList.remove('red', 'orange', 'yellow', 'green');

    if (correctScore > 0 && correctScore <= 94) {
        correctInfo.classList.add('red');
    } else if (correctScore >= 95 && correctScore <= 119) {
        correctInfo.classList.add('orange');
    } else if (correctScore >= 120 && correctScore <= 150) {
        correctInfo.classList.add('yellow');
    } else if (correctScore >= 151) {
        correctInfo.classList.add('green');
    }

    // COMPOSITE SCORE COLOR CODING
    let compositeInfo = document.getElementById("output");
    let compositeScore = Number(compositeInfo.textContent);

    compositeInfo.classList.remove('red', 'orange', 'yellow', 'green');

    if (compositeScore > 0 && compositeScore <= 323) {
        compositeInfo.classList.add('red');
    } else if (compositeScore >= 324 && compositeScore <= 379) {
        compositeInfo.classList.add('orange');
    } else if (compositeScore >= 380 && compositeScore <= 477) {
        compositeInfo.classList.add('yellow');
    } else if (compositeScore >= 478) {
        compositeInfo.classList.add('green')
    }


}


function date() {
    const currentDate = new Date;
    const lastModifiedDate = new Date(document.lastModified);
    const difference = currentDate - lastModifiedDate
    const differenceDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("dateInfo").innerHTML = "Current date: " + currentDate + "<br/>" + "Last modified: " + lastModifiedDate + "<br/>" + "Difference: " + differenceDays + " day(s)"
}
date()


const infoButton = document.createElement("button");
infoButton.textContent = "Author Information";
infoButton.addEventListener("click", showInfo);


document.body.appendChild(infoButton)

function showInfo() {
    const names = "Miriam Stern, Kayla Zagelbaum";
    const className = "MCON 104- Computing Theory and Applications";
    const instructorName = "Professor Abrahamson";

    alert(`Names: ${names}\n Class: ${className}\n Instructor: ${instructorName}`);
}
