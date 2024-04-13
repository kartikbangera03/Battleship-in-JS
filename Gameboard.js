export default class Gameboard {
    constructor(name) {
        this.gameBoard = [];
        this.shipsOnBoard = [];
        this.setBoard();
        this.printBoard();
    }


    getCordinate(xcord, ycord) {
        return this.gameBoard[xcord][ycord];
    }


    setBoard() {
        for (let i = 0; i <= 10; i++) {
            this.gameBoard[i] = [];
            for (let j = 0; j <= 10; j++) {
                this.gameBoard[i][j] = {
                    hasShip: false,
                    attacked: false,
                    ship: null,
                    symbol : ""
                };
            }
        }
    }


    getBoard() {
        return this.gameBoard;

    }


    printBoard() {
        this.gameBoard;
        for (let i = 1; i < this.gameBoard.length; i++) {
            let currentRowArray = "";
            let currentRow = this.gameBoard[i];
            for (let j = 1; j < currentRow.length; j++) {
                let val = currentRow[j].hasShip ? currentRow[j].ship.name : " . ";
                currentRowArray += val + "  ";
            }
        }
    }


    placeShipOnGameBoard(shipObj, xcord, ycord, orientation) {
        let result = false;
        if (this.checkFit(shipObj.length, xcord, ycord, orientation)) {
            const shipCordinates = this.getCordinatesForShip(shipObj.length, xcord, ycord, orientation);
            if (shipCordinates.length != 0 && this.cordinatesEmpty(shipCordinates)) {
                shipCordinates.forEach(cord => {
                    const xCord = cord[0];
                    const yCord = cord[1];
                    const square = this.gameBoard[xCord][yCord];
                    square.hasShip = true;
                    square.ship = shipObj;
                });
                result = true;

            }
        }
        return result;
    }


    checkFit(shipLength, xcord, ycord, orientation) {
        let result = false;
        if (orientation == "horizontal") {
            if ((ycord - 1) + shipLength > 9) {
                result = false;
            } else {
                result = true;
            }
        } else if (orientation == "vertical") {
            if ((xcord - 1) + shipLength > 9) {
                result = false;
            } else {
                result = true;
            }
        }
        return result;
    }


    getCordinatesForShip(shipLength, xcord, ycord, orientation) {
        let cordinates = [];
        if (orientation == "horizontal") {
            for (let i = 0; i < shipLength; i++) {
                const cords = [xcord, ycord + i];
                cordinates.push(cords);
            }
        } else if (orientation == "vertical") {
            for (let i = 0; i < shipLength; i++) {
                const cords = [xcord + i, ycord];
                cordinates.push(cords);
            }
        }
        return cordinates;
    }


    cordinatesEmpty(shipCordinates) {
        let isEmpty = true;
        shipCordinates.forEach((cord) => {
            if (this.gameBoard[cord[0]][cord[1]].hasShip === true) {
                isEmpty = false;
            }
        });
        return isEmpty;
    }


    receiveAttack(xcord, ycord) {
        let attackStatus = false;
        let message = "MISS";

        if (this.gameBoard[xcord][ycord].attacked == false) {
            attackStatus = true;

            if (this.gameBoard[xcord][ycord].hasShip == true) {
                message = this.gameBoard[xcord][ycord].ship.hit();
                // this.gameBoard[xcord][ycord].symbol = "&#x2715;" ; 
                this.gameBoard[xcord][ycord].attacked = true;
            }else{
                // this.gameBoard[xcord][ycord].symbol = "&#x2299;" ;
                this.gameBoard[xcord][ycord].attacked = true;
            }

            
            // return true;
        }

        console.log(message);
        return message;
    }

    
}