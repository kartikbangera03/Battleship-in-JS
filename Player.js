// Players can take turns playing the game by attacking the enemy Gameboard.
// game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, 
// but it should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice).
import GameBoard from "./Gameboard.js";
import Ship from "./Ship.js";

export default class Player{
    constructor(name){
        this.name = name;
        this.gameBoard = new GameBoard();

        const carrier = new Ship("Carrier",5);
        const battleship = new Ship("Battleship",4);
        const cruiser = new Ship("Cruiser",3);
        const submarine = new Ship("Submarine",3);
        const destroyer = new Ship("Destroyer",2);

        this.fleet = [];
        this.fleet.push(carrier);
        this.fleet.push(battleship);
        this.fleet.push(cruiser);
        this.fleet.push(submarine);
        this.fleet.push(destroyer);

    }    
    

    getBoard(){
        return this.gameBoard.getBoard();
    }


    receiveAttack(xcord,ycord){
       return this.gameBoard.receiveAttack(xcord,ycord);
    }


    checkShipsSunk(){
        return this.gameBoard.allShipsSunk();
    }


    getShipInput(){

        this.fleet.forEach(eachShip=>{
            
            let flag = true;
            while(flag){
                let cordinates = prompt("Enter Cordinates for "+eachShip.name+ " "+eachShip.length+" squares. 1 for Horizontal and 2 for Vertical");
                const cordinateValues  = cordinates.split(" ");
                cordinateValues[2] = cordinateValues[2]==1 ? "horizontal" : "vertical";
                console.log(cordinateValues);
                let xcord = parseInt(cordinateValues[0]);
                let ycord = parseInt(cordinateValues[1]);
                if(this.gameBoard.placeShipOnGameBoard(eachShip,xcord,ycord,cordinateValues[2])) {
                    flag = false;
                }
            }
            
        });
    }

    getRandomShipInput(){
        this.fleet.forEach(eachShip=>{
            
            let flag = true;
            while(flag){

                let xcord = Math.floor((Math.random() * 10)+1);
                let ycord = Math.floor((Math.random() * 10)+1);
                console.log([xcord,ycord]);
                let orientation = Math.floor(Math.random() * 2);
                orientation = orientation==1 ? "horizontal" : "vertical";

                // let cordinates = prompt("Enter Cordinates for "+eachShip.name+ " "+eachShip.length+" squares. 1 for Horizontal and 2 for Vertical");
                // const cordinateValues  = cordinates.split(" ");
                // cordinateValues[2] = cordinateValues[2]==1 ? "horizontal" : "vertical";
                if(this.gameBoard.placeShipOnGameBoard(eachShip, xcord, ycord, orientation)) flag = false;
            }
            
        });
    }



    placeShips(){
        if(this.name!=="Computer"){
            this.getShipInput();
        }else{
            console.log("Placing Ships for Computer");
            this.getRandomShipInput()
        }
        

    }

    printBoard(){
        this.gameBoard.printBoard();
    }
}       