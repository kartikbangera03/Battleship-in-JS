// Gameboards should keep track of missed attacks so they can display them properly 
// Gameboards should be able to report whether or not all of their ships have been sunk


// INITIALLY populate each Gameboard with predetermined coordinates. 
// Later implement a system for allowing players to place their ships later.
// user click on a coordinate in the enemy Gameboard.
export default class Gameboard{
    constructor(name){
        this.gameBoard = [];
        for(let i=1;i<=10;i++){
            this.gameBoard.push(Array(10).fill("X"));
        }
        // console.log(gameBoard);
    }

    getBoard(){
        // console.log(this.gameBoard);
        return this.gameBoard;
        
    }

    placeShip(){
        
    }

    receiveAttack(xcord,ycord){        
        // Determines whether or not the attack hit a ship and then sends the hit function to the correct ship
        // OR records the cordinates of the missed shot
    }
}