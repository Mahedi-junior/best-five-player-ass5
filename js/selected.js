function playerList(playerName) {
    if (playerName == '') {
        alert('Already Added');
        return
    }
    const listContainer = document.getElementById('select-player-list');
    const li = document.createElement('li');
    li.innerText = " " + playerName;
    li.classList.add('singlePlayer')
    listContainer.appendChild(li)
    const player = document.querySelectorAll('.singlePlayer');
    const playerCount = player.length;
    if (playerCount > 5) {
        alert('you added maximum players')
        listContainer.removeChild(li)
        return 5
    }
    return playerCount
}

//getInputValueById
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString)
    if (isNaN(inputValue)) {
        alert('Input Field Should not be string or Blank')
        return 0
    }
    return inputValue
}
// Common Function for All Total Set
function setTotalTextById(elementId, total) {
    const TotalTextElement = document.getElementById(elementId);

    TotalTextElement.innerText = total;
}
let playerCount;
let playerExpense;

// player select handler
document.getElementById('players').addEventListener('click', function (e) {
    const playerName = e.target.parentNode.childNodes[1].innerText;
    console.log(playerName);
    e.target.setAttribute('disabled', true);
    playerCount = playerList(playerName)
})

// EventListener for calculate Player Expense
document.getElementById('player-btn').addEventListener('click', function (e) {
    const perPlayerBudget = getInputValueById('player-budget')
    playerExpense = perPlayerBudget * playerCount;
    if (isNaN(playerExpense)) {
        return 0
    }
    setTotalTextById('player-expense', playerExpense)
})


// EventListener For Total Calculation
document.getElementById('total-calculate').addEventListener('click', function (e) {
    const managerBudget = getInputValueById('manager-field');
    const coachBudget = getInputValueById('coach-field');
    const totalExpense = playerExpense + managerBudget + coachBudget;
    if (isNaN(totalExpense)) {
        return 0
    }
    setTotalTextById('totalExpense', totalExpense)
})