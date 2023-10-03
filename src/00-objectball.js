
const game = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      },
      // Add other players' data here
    }
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      // Add players' data here
    }
  }
};

// Function to get points scored by a player
function numPointsScored(playerName) {
  return game.home.players[playerName] ? game.home.players[playerName].points : game.away.players[playerName].points;
}

// Function to get shoe size of a player
function shoeSize(playerName) {
  return game.home.players[playerName] ? game.home.players[playerName].shoe : game.away.players[playerName].shoe;
}

// Function to get team colors based on team name
function teamColors(teamName) {
  return teamName === game.home.teamName ? game.home.colors : game.away.colors;
}

// Function to get team names
function teamNames() {
  return [game.home.teamName, game.away.teamName];
}

// Function to get player numbers for a specific team
function playerNumbers(teamName) {
  const players = teamName === game.home.teamName ? game.home.players : game.away.players;
  return Object.values(players).map(player => player.number);
}

// Function to get player stats based on player name
function playerStats(playerName) {
  return game.home.players[playerName] || game.away.players[playerName];
}

// Function to get rebounds of the player with the largest shoe size
function bigShoeRebounds() {
  let playerWithLargestShoe = null;
  let largestShoeSize = 0;

  for (const playerName in game.home.players) {
    const player = game.home.players[playerName];
    if (player.shoe > largestShoeSize) {
      largestShoeSize = player.shoe;
      playerWithLargestShoe = player;
    }
  }

  for (const playerName in game.away.players) {
    const player = game.away.players[playerName];
    if (player.shoe > largestShoeSize) {
      largestShoeSize = player.shoe;
      playerWithLargestShoe = player;
    }
  }

  return playerWithLargestShoe.rebounds;
}

// Function to find player with the most points
function mostPointsScored() {
  let mostPoints = 0;
  let playerWithMostPoints = null;

  for (const playerName in game.home.players) {
    const player = game.home.players[playerName];
    if (player.points > mostPoints) {
      mostPoints = player.points;
      playerWithMostPoints = playerName;
    }
  }

  for (const playerName in game.away.players) {
    const player = game.away.players[playerName];
    if (player.points > mostPoints) {
      mostPoints = player.points;
      playerWithMostPoints = playerName;
    }
  }

  return playerWithMostPoints;
}

// Function to find team with the most points
function winningTeam() {
  const homePoints = Object.values(game.home.players).reduce((total, player) => total + player.points, 0);
  const awayPoints = Object.values(game.away.players).reduce((total, player) => total + player.points, 0);

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Function to find player with the longest name
function playerWithLongestName() {
  let longestName = '';
  let playerWithLongestName = null;

  for (const playerName in game.home.players) {
    if (playerName.length > longestName.length) {
      longestName = playerName;
      playerWithLongestName = playerName;
    }
  }

  for (const playerName in game.away.players) {
    if (playerName.length > longestName.length) {
      longestName = playerName;
      playerWithLongestName = playerName;
    }
  }

  return playerWithLongestName;
}

// Function to check if the player with the longest name had the most steals
function doesLongNameStealATon() {
  const playerWithLongestName = playerWithLongestName();
  const mostStealsPlayer = mostStealsScored();

  return playerWithLongestName === mostStealsPlayer;
}

// Function to find player with the most steals
function mostStealsScored() {
  let mostSteals = 0;
  let playerWithMostSteals = null;

  for (const playerName in game.home.players) {
    const player = game.home.players[playerName];
    if (player.steals > mostSteals) {
      mostSteals = player.steals;
      playerWithMostSteals = playerName;
    }
  }

  for (const playerName in game.away.players) {
    const player = game.away.players[playerName];
    if (player.steals > mostSteals) {
      mostSteals = player.steals;
      playerWithMostSteals = playerName;
    }
  }

  return playerWithMostSteals;
}
