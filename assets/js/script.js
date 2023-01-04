let players = [];

document.addEventListener("DOMContentLoaded", function() {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', addPlayer);

    let createTeams = document.getElementById('create-teams');
    createTeams.addEventListener('click', createNextTeams);

    let submitScore = document.getElementById('submit-score');
    submitScore.addEventListener('click', updatePlayerPoints);
});

/**
 * Functions adds user inputted player name to player object array.
 */
function addPlayer() {
    let newPlayer = document.getElementById('enter-name').value;

    for (player of players) {
        let nameToCheck = player.playerName;
        if (newPlayer === nameToCheck) {
            alert('Player name already exists! Please enter alternative name');
            throw 'Name already exists!';
        }
    }

    let playerObject = {
        playerName: newPlayer,
        points: 0
    };

    players.push(playerObject);

    console.log(players);
}

function createNextTeams() {

    let firstSort1 = [];
    let firstSort2 = [];

    for (let i=0; i < players.length; i++) {

        if (i === 0) {
            let add = players[0].playerName;
            firstSort1.push(add);
        } else if (i % 2 === 0) {
            let add = players[i].playerName;
            firstSort1.push(add);
        } else {
            let add = players[i].playerName;
            firstSort2.push(add);
        }
    }

    console.log(firstSort1);
    console.log(firstSort2);
}

function updatePlayerPoints() {

}


