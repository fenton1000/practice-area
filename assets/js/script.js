let players = [];

document.addEventListener("DOMContentLoaded", function() {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', addPlayer);
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


