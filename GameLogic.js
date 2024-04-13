import Player from "./Player.js";
import renderBothBoards from "./domManip.js";

let playerOne;
let playerTwo;
let players = [];
let playerTurn;

startNewGame();

setInterval(function(){
    if(players[0].turn === false &&  players[1].turn === false){
        let opponent = playerTurn==1 ? 0 : 1;
        if(players[opponent].checkShipsSunk()===true){
            // const shipInfoSpan = document.querySelector("#squareInfo");
            // shipInfoSpan.textContent = players[playerTurn].name+" WINS !!!!";

            window.alert(players[playerTurn].name+ "  WINS !!!!!");
            startNewGame();
        }else{
            renderBothBoards(players[0], players[1], playerTurn);
            playerTurn = playerTurn==1 ? 0 : 1 ;
        }   
    }
},100)


function startNewGame(){
    playerOne = new Player("Kartik");
    playerTwo = new Player("Computer");
    players[0] = playerOne;
    players[1] = playerTwo;
    players[0].placeShips();
    players[1].placeShips();
    playerTurn = 0;
}


