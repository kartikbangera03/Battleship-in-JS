// Players can take turns playing the game by attacking the enemy Gameboard.
// game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, 
// but it should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice).
import GameBoard from "./Gameboard.js";

class Player{
    constructor(name){
        this.name = name;
        this.gameBoard = new GameBoard();
    }
}       