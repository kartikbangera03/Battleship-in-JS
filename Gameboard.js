// Gameboards should keep track of missed attacks so they can display them properly 
// Gameboards should be able to report whether or not all of their ships have been sunk


// INITIALLY populate each Gameboard with predetermined coordinates. 
// Later implement a system for allowing players to place their ships later.
// user click on a coordinate in the enemy Gameboard.
export default class Gameboard{
    constructor(name){
        this.gameBoard = [];
        this.shipsOnBoard = [];
        this.setBoard();
    }


    getShipsOnBoard(){
        return this.shipsOnBoard;
    }

    setBoard(){
        for(let i=1;i<=10;i++){
            this.gameBoard.push(Array(10).fill({
                hasShip: false,
                attacked: false,
                ship: null
            }));
        }
    }


    getBoard(){
        // console.log(this.gameBoard);
        return this.gameBoard;
        
    }


    placeShipOnGameBoard(shipObj, xcord, ycord, orientation){
        if(this.checkFit(shipObj.length , xcord, ycord, orientation)){
            const shipCordinates = this.getCordinatesForShip();
            // console.log("SETTING VALUES 1");
            if(this.cordinatesEmpty(shipCordinates)){
                // console.log("SETTING VALUES 2");
                this.shipsOnBoard.push(shipObj);
                shipCordinates.forEach(cord=>{
                    console.log("SETTING VALUES  3");
                    this.gameBoard[cord[0]][cord[1]].hasShip = true;
                    this.gameBoard[cord[0]][cord[1]].ship = shipObj;
                    // console.log(this.gameBoard[cord[0]][cord[1]]);
                })
                
            }
        }

        // this.getBoard();
    }


    checkFit(shipLength, xcord, ycord, orientation){
            let result = false;
            if(orientation=="horizontal"){
                if((ycord-1) + shipLength >9){
                    result = false;
                }else{   
                    result = true;
                }
            }else if(orientation=="vertical"){
                if((xcord-1) + shipLength >9){
                    result = false;
                }else{
                    result = true;
                }
            }
            return result;
        
    }


    getCordinatesForShip(shipLength, xcord, ycord, orientation){
        let cordinates = [];
        // this.shipPlaced = true;
        if(orientation=="horizontal"){
            for(let i=0;i<shipLength;i++){
                const cords = [xcord-1, ycord+i-1];
                cordinates.push(cords);
            } 
        }else if(orientation=="vertical" ){
            for(let i=0;i<shipLength;i++){
                const cords = [xcord + i-1, ycord-1];
                cordinates.push(cords);
            } 
        }

        return cordinates;
    }


    cordinatesEmpty(shipCordinates){
        let isEmpty = true;
        shipCordinates.forEach((cord) => {
            // console.log("Checking "+this.gameBoard[cord[0]][cord[1]]);
            if(this.gameBoard[cord[0]][cord[1]].hasShip === true){
                
                // console.log("Checking if square "+cord[0]+" "+cord[1]+" is Empty or not" );
                isEmpty = false;
            }    
        });
        return isEmpty;
    }


    receiveAttack(cord){

        // Determines whether or not the attack hit a ship 
        // and then sends the hit function to the correct ship
        // OR records the cordinates of the missed shot
        const xcord = cord[0];
        const ycord = cord[1];
        let attackStatus = false;
        const attackedSquare = this.gameBoard[xcord][ycord];
        if( this.gameBoard[xcord][ycord].attacked == false 
            && this.gameBoard[xcord][ycord].hasShip == true ){
                this.gameBoard[xcord][ycord].ship.hit();
            attackStatus = true;
        }


        this.gameBoard[xcord][ycord].attacked = true;
        return attackStatus;
    }
}