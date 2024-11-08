let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#comp-score")
const gencomchoice = () => {
    let option = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return option[random];
}

const draw = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin,userID,comChoice) => {
    if (userWin) {
        userScore++;
        userScores.innerText = userScore;
        msg.innerText = `You win Your ${userID} beats Comp ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScores.innerText = compScore;
        msg.innerText = `You lose Comp ${comChoice} beats You ${userID}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userID) => {

    console.log("user choice =", userID)
    //Genrerate computer choice
    const comChoice = gencomchoice();
    console.log("comp choice =", comChoice)

    if (userID === comChoice) {
        draw();
    } else {
        let userWin = true;
        if (userID === "rock") {
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userID === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin,userID,comChoice);
    }

}
choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userID = choise.getAttribute("id");
        playGame(userID);
    })
})