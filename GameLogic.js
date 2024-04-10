import Player from "./Player.js";

const playerOne = new Player("Kartik");
const playerTwo = new Player("Computer");

console.log("BattleShip - Milton Bradley Version");
// console.log(playerOne);
// console.log(playerTwo);

const players = [];
players[0] = playerOne;
players[1] = playerTwo;


console.log("Place Ships for " + playerOne.name);
players[0].placeShips();

console.log(players[0].printBoard());


console.log("Place Ships for " + playerTwo.name);
players[1].placeShips();
console.log(players[1].printBoard());


// // console.log(playerOne);
// // console.log(playerTwo);

// let gameFlag = true;
// let playerTurn = 0;
// while(gameFlag){
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
//     console.table(players[0].getBoard());
//     console.table(players[1].getBoard());
// }

// function getInput(playerName){
//     if(playerName ==="Computer"){
//         let xcord  =  Math.floor(Math.random()*10);
//         let ycord  =  Math.floor(Math.random()*10);

//     }else{
//         let xcord  =  prompt("{Enter X cordinate");
//         let ycord  =  prompt("{Enter Y cordinate");

//     }
    
//     return [xcord,ycord];
// }