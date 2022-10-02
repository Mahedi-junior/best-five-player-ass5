let playerCount;

function playerList(playerName) {
    // console.log(playerName);
    if (playerName == " ") {
        alert('Already added');
        return;
    }

    const playerContainer = document.getElementById("select-player-list");
    const li = document.createElement("li");
    li.innerText = "" + playerName;
    li.classList.add("singlePlayer");

    playerContainer.appendChild(li);

    const player = document.querySelectorAll(".singlePlayer");
    console.log(player.length);
    playerCount = player.length;
    // console.log(playerCount)

    if (playerCount > 5) {
        alert("You added maximum Players");
        playerContainer.removeChild(li);
        return 5;
    }
    return playerCount;
}



document.getElementById("players").addEventListener("click", function (event) {
    const playerName = event.target.parentNode.childNodes[1].innerText;

    event.target.setAttribute("disabled", true);
    //
    // const player = playerList(playerName);
    // console.log(player);
    // 
    playerList(playerName);

})


// Calculation
document.getElementById("player-btn").addEventListener("click", function () {
    const playerBudget = document.getElementById("player-budget");
    const playerBudgetString = playerBudget.value;
    const previousBudget = parseFloat(playerBudgetString);

    const player = playerList()
    console.log(playerCount);
    const total = player * previousBudget;
    // console.log(total);

})

