import Player from "./Player.js";
import renderBothBoards from "./domManip.js";

const playerOne = new Player("Kartik");
const playerTwo = new Player("Computer");

console.log("BattleShip - Milton Bradley Version");

const players = [];
players[0] = playerOne;
players[1] = playerTwo;

console.log("Ships Placed for " + playerOne.name);
players[0].placeShips();

console.log("Ships Placed for " + playerTwo.name);
players[1].placeShips();

let playerTurn = 0;
setInterval(function(){
    // console.log("Checking ");
    if(players[0].turn === false &&  players[1].turn === false){
        console.log("Both Turns False");
        // players[playerTurn].turn = true;
        renderBothBoards(players[0], players[1], playerTurn);
        
        playerTurn = playerTurn==1 ? 0 : 1 ;
        console.log(playerTurn);
    }
},200)

// console.log(playerOne);
// console.log(playerTwo);

// let gameFlag = true;
// let playerTurn = 0;
// while(gameFlag){
//     console.log(players[playerTurn].name+"'s TURN");
//     const opponent = playerTurn==1 ? 0 : 1;
//     let inputCordinatesCorrect = true;
//     do{
//         const [xcord , ycord] = getInput(players[playerTurn].name);
//         inputCordinatesCorrect = players[opponent].receiveAttack(xcord, ycord);
//     }while(!inputCordinatesCorrect);
    
//     if(players[opponent].checkShipsSunk()===true){
//         gameFlag = false;
//         console.log(players[playerTurn].name+" Wins");
//     }

//     showBoards();

//     playerTurn = playerTurn==1 ? 0 : 1;
// }

// function showBoards(){
//     console.log(players[0].name + "'s Board =====");
//     console.log(players[0].printBoard());
//     console.log(players[1].name + "'s Board =====");
//     console.log(players[1].printBoard());
// }

