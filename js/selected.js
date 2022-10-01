document.getElementById("players").addEventListener("click", function (event) {
    event.stopPropagation();
    const playerList = document.getElementById("select-player-list");
    const name = document.getElementById("name").innerText;
    const li = document.createElement("li");
    li.innerText = name;
    li.classList.add("ol");
    playerList.appendChild(li);
    console.log(event, playerList, name);
})

/* document.getElementById('add-item6').addEventListener('click', function () {
    const ulContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    const name6 = document.getElementById('name6').innerText;
    li.innerText = name6;
    li.classList.add('item6');
    ulContainer.appendChild(li);

}) */