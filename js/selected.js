function playerList(playerName) {
    const playerContainer = document.getElementById("select-player-list");
    const li = document.createElement("li");
    li.innerText = playerName;
    playerContainer.appendChild(li);
    console.log(playerName);
}


document.getElementById("players").addEventListener("click", function (event) {
    const playerName = event.target.parentNode.childNodes[1].innerText;
    playerList(playerName);

})

