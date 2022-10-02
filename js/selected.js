function playerList(playerName) {
    if (playerName == '') {
        alert('Already added');
        return;
    }

    const playerContainer = document.getElementById("select-player-list");
    const li = document.createElement("li");
    li.innerText = "" + playerName;
    li.classList.add("singlePlayer");
    playerContainer.appendChild(li);

    const player = document.querySelectorAll(".singlePlayer");
    const playerCount = player.length;

    if (playerCount > 5) {
        alert("You added maximum Players");
        playerContainer.removeChild(li);
        return;
    }
    return playerCount;


}


document.getElementById("players").addEventListener("click", function (event) {
    const playerName = event.target.parentNode.childNodes[1].innerText;
    console.log(event.target);
    event.target.setAttribute("disabled", true);
    // console.log(event.target.parentNode.childNodes);
    playerList(playerName);

})

