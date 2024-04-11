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

let gameFlag = true;
let playerTurn = 0;
while(gameFlag){
    console.log(players[playerTurn].name+"'s TURN");
    const opponent = playerTurn==1 ? 0 : 1;
    let inputCordinatesCorrect = true;
    do{
        const [xcord , ycord] = getInput(players[playerTurn].name);
        inputCordinatesCorrect = players[opponent].receiveAttack(xcord, ycord);
    }while(!inputCordinatesCorrect);
    
    if(players[opponent].checkShipsSunk()===true){
        gameFlag = false;
        console.log(players[playerTurn].name+" Wins");
    }

    showBoards();

    playerTurn = playerTurn==1 ? 0 : 1;
}

function showBoards(){
    console.log(players[0].name + "'s Board ===============================");
    console.log(players[0].printBoard());
    console.log(players[1].name + "'s Board ===============================");
    console.log(players[1].printBoard());
}

function getInput(playerName){
    let xcord,ycord;
    if(playerName ==="Computer"){
        xcord  =  Math.floor((Math.random() * 10)+1);
        ycord  =  Math.floor((Math.random() * 10)+1);
        console.log("Computers Guess "+xcord+" "+ycord);

    }else{
        xcord  =  prompt("Enter X cordinate");
        ycord  =  prompt("Enter Y cordinate");

    }
    
    return [xcord,ycord];
}