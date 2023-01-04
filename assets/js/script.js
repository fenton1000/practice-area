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
 * Function addPlayer adds user inputted player name to player object array.
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
}

/**
 * function createNextTeams creates two team selections from the players array
 * based on array index. Returns TeamA, TeamB array.
 */
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

    let teamA = [];
    let teamAPart2 = [];
    let teamB = [];
    let teamBPart2 = [];

    for (let i=0; i < firstSort1.length; i++) {

        if (i === 0) {
            let add = firstSort1[0];
            teamA.push(add);
        } else if (i % 2 === 0) {
            let add = firstSort1[i];
            teamA.push(add);
        } else {
            let add = firstSort1[i];
            teamBPart2.push(add);
        }
    }

    for (let i=0; i < firstSort2.length; i++) {

        if (i === 0) {
            let add = firstSort2[0];
            teamB.push(add);
        } else if (i % 2 === 0) {
            let add = firstSort2[i];
            teamB.push(add);
        } else {
            let add = firstSort2[i];
            teamAPart2.push(add);
        }
    }

    for (player of teamAPart2) {
        teamA.push(player);
    }

    for (player of teamBPart2) {
        teamB.push(player);
    }

    console.log(teamA);
    console.log(teamB);

    return [teamA, teamB];

    

}

/**
 * Function updatePlayerPoints takes match results inputted by the user
 * and updates player points in the player array accordingly.
 */
function updatePlayerPoints() {

/* NB NB NB temporary solution to bring in teams. This might not work depending on if and how we add a feature to prevent repeat teams.
The teams will be sent to the screen via html elements in the real version and the current team can be recovered from there. NB NB NB */
    
let teams = createNextTeams();

    let teamA = teams[0];
    let teamB = teams[1];

    let teamAScore = document.getElementById('team-a-score').value;
    let teamBScore = document.getElementById('team-b-score').value;

    console.log(teamAScore);
    console.log(teamBScore);

    let pointsAwarded; 

    if (teamBScore > teamAScore) {
        pointsAwarded = teamBScore - teamAScore;
    } else {
        pointsAwarded = teamAScore - teamBScore;
    }

    console.log(pointsAwarded);

    if (teamAScore > teamBScore) {
        for (player of teamA) {
            for (let i = 0; i < players.length; i++) {
                if (player === players[i].playerName) {
                    players[i].points = players[i].points + pointsAwarded
                }
            } 
        }
    } else {
        for (player of teamB) {
            for (let i = 0; i < players.length; i++) {
                if (player === players[i].playerName) {
                    players[i].points = players[i].points + pointsAwarded
                }
            } 
        }
    }

    // Re-orders the player array based on latest points from highest to lowest
    players.sort( function(a,b) {return b.points - a.points});

    console.log(players);
}


