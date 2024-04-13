import Player from "./Player.js";
import renderBothBoards from "./domManip.js";

let playerOne;
let playerTwo;
let players = [];
let playerTurn;
const shipInfoSpan = document.querySelector("#squareInfo");
const resultSpan = document.querySelector("#winnerInfo");

startNewGame();

setInterval(function(){
    if(players[0].turn === false &&  players[1].turn === false){
        let opponent = playerTurn==1 ? 0 : 1;
        if(playerTurn==0)shipInfoSpan.innerHTML="Your Turn &#x279C;";
            else shipInfoSpan.innerHTML="";
        
        if(players[opponent].checkShipsSunk()===true){
            shipInfoSpan.textContent = players[playerTurn].name +" WINS !!!!";
            if(confirm(players[playerTurn].name +" WINS !!!!" + "\nPlay New Game")){
                startNewGame();
            }    
            
        }else{
            renderBothBoards(players[0], players[1], playerTurn);
            playerTurn = playerTurn==1 ? 0 : 1 ;
            
        }   
    }
},100)


setTimeout( ()=>{
    let playerOneName = prompt("Enter Your Name");
    if(playerOneName.length!=0){
        playerOne.name = playerOneName;
    }
},200)

function startNewGame(){
    playerOne = new Player("PLAYER 1");
    playerTwo = new Player("Computer");
    players[0] = playerOne;
    players[1] = playerTwo;
    players[0].placeShips();
    players[1].placeShips();

    playerTurn = 0;

    shipInfoSpan.textContent = "";
    resultSpan.textContent = "";
}







