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
        this.printBoard();
    }

    
    // allShipsSunk(){
    //     let allShipsSunkStatus = true;
    //     this.shipsOnBoard.forEach(eachShip=>{
    //         if(eachShip.isSunk()===false){
    //             allShipsSunkStatus = false;
    //         }
    //     });

    //     return allShipsSunkStatus;
    // }


    // getShipsOnBoard(){
    //     return this.shipsOnBoard;
    // }

    getCordinate(xcord,ycord){
        return this.gameBoard[xcord][ycord];
    }

    setBoard(){
        for(let i=0;i<=10;i++){
            this.gameBoard[i] = [];
            for(let j = 0 ; j <= 10;j++){
                this.gameBoard[i][j] = {
                    hasShip: false,
                    attacked: false,
                    ship: null
                };
            }
            // this.gameBoard.push(Array(10).fill({
            //     hasShip: false,
            //     attacked: false,
            //     ship: null
            // }));
        }
    }


    getBoard(){
        // console.log(this.gameBoard);
        return this.gameBoard;
        
    }


    printBoard(){
        this.gameBoard;

        for(let i=1;i<this.gameBoard.length;i++){
            let currentRowArray = "";
            let currentRow  = this.gameBoard[i];
            for(let j = 1; j < currentRow.length ; j++){
                let val = currentRow[j].hasShip ? currentRow[j].ship.name : " . ";
                currentRowArray += val + "  ";
            }
            console.table(currentRowArray);

        }
    }


    placeShipOnGameBoard(shipObj, xcord, ycord, orientation){
        let result = false;

        
        // console.log("CHECK PLACEMENT");
        if(this.checkFit(shipObj.length , xcord, ycord, orientation)){
            const shipCordinates = this.getCordinatesForShip(shipObj.length , xcord, ycord, orientation);
            console.log(shipCordinates);
            // console.log("SHIP FIT CHECKED");
            if(shipCordinates.length!=0 && this.cordinatesEmpty(shipCordinates)){
                // console.log("SHIP CORDINATES EMPTY");
                
                // this.shipsOnBoard.push(shipObj);
                shipCordinates.forEach(cord=>{
                    // console.log(cord);
                    const xCord = cord[0];
                    const yCord = cord[1];
                    const square = this.gameBoard[xCord][yCord];
                    // console.log(square);
                    square.hasShip = true;
                    square.ship = shipObj;
                    // console.log(square);
                });
                // console.log("CORDINATES SET");
                result = true;
                
            }
        }
        // this.printBoard();
        return result;
        // this.getBoard();
    }


    checkFit(shipLength, xcord, ycord, orientation){
            let result = false;
            if(orientation =="horizontal"){
                if((ycord-1) + shipLength >9){
                    result = false;
                }else{   
                    result = true;
                }
            }else if(orientation =="vertical"){
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
        if(orientation =="horizontal"){
            for(let i=0;i<shipLength;i++){
                const cords = [xcord, ycord+i];
                cordinates.push(cords);
            } 
        }else if(orientation == "vertical" ){
            for(let i=0;i<shipLength;i++){
                const cords = [xcord+i, ycord];
                cordinates.push(cords);
            } 
        }
        // console.log(cordinates)
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


    receiveAttack(xcord, ycord){

        // Determines whether or not the attack hit a ship 
        // and then sends the hit function to the correct ship
        // OR records the cordinates of the missed shot
        // const xcord = cord[0];
        // const ycord = cord[1];
        let attackStatus = false;
        let message = "MISS";

        if(this.gameBoard[xcord][ycord].attacked == false){
            attackStatus = true;
            console.log("*****************");
            if(this.gameBoard[xcord][ycord].hasShip == true ){
                this.gameBoard[xcord][ycord].ship.hit();
            }else{
                console.log(message);
            }
            console.log("*****************");
            this.gameBoard[xcord][ycord].attacked = true;
        }
        
        return attackStatus;
    }
}