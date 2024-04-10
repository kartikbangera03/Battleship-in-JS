import ship from "./Ship.js";
const ship1 = new ship("Destroyer", 3);

test('Ship Test Name', ()=>{
    expect(ship1.name).toBe("Destroyer");
});

test('Ship Test Length', ()=>{
    expect(ship1.length).toBe(3);
});

test('Ship Test Hits', ()=>{
    expect(ship1.hits).toBe(0);
});

test('Ship Test Sunk Status', ()=>{
    expect(ship1.sunkStatus).toBe(false);
});

test('Ship Test Hits Method', ()=>{
    expect(ship1.hit()).toBe(1);
});

test('Ship Test Hits Method', ()=>{
    expect(ship1.hit()).toBe(2);
});

test('Ship Test Hits Method', ()=>{
    expect(ship1.hit()).toBe(3);
});

test('Ship Test isSunk Method', ()=>{
    expect(ship1.isSunk()).toBe(true);
});

test('Ship Test Hits Method', ()=>{
    expect(ship1.hit()).toBe(4);
});


test('Ship Test isSunk Method', ()=>{
    expect(ship1.isSunk()).toBe(true);
});


// test('Ship Test placeShip Method', ()=>{
//     expect(ship1.placeShip(1,1,"horizontal")).toBe(true);
//     expect(ship1.placeShip(1,9,"horizontal")).toBe(false);
//     expect(ship1.placeShip(1,1,"vertical")).toBe(false);
//     expect(ship1.placeShip(9,1,"vertical")).toBe(false);
// });


// test('Ship Test : Set Cordinates Method', ()=>{
//     expect(ship1.getCordinates()).toStrictEqual([[0,1], [0,2],[0,3]])
// });


// test('GameBoard Test 1',()=>{
//     expect(gameBoard1.getBoard()).toHaveLength(10);
//     expect(gameBoard1.placeShipOnGameBoard(ship1, 1,1,"horizontal")).toBe("false")
// });

// Test Gameboard 
import GameBoard from "./Gameboard.js";
// import Gameboard from "./Gameboard.js";
const gameBoard1 = new GameBoard();

test('GameBoard : CheckFit Method',()=>{
    expect(gameBoard1.checkFit(3,1,1,"horizontal")).toBe(true);
    expect(gameBoard1.checkFit(3,1,9,"horizontal")).toBe(false);
    expect(gameBoard1.checkFit(3,1,1,"vertical")).toBe(true);
    expect(gameBoard1.checkFit(3,9,1,"vertical")).toBe(false);
});


test('GameBoard: GetCordinatesForShip Method', ()=>{
    expect(gameBoard1.getCordinatesForShip(3,1,1,"horizontal")).toStrictEqual([[0,0], [0,1],[0,2]]);
    expect(gameBoard1.getCordinatesForShip(3,1,1,"vertical")).toStrictEqual([[0,0], [1,0],[2,0]]);
});

// const ship2 = new ship("Destroyer", 3);


test('GameBoard: CordinatesEmpty Method',()=>{ 
    expect(gameBoard1.cordinatesEmpty([[0,0], [0,1],[0,2]])).toBe(true);
    gameBoard1.gameBoard[0][1].hasShip = true;
    expect(gameBoard1.cordinatesEmpty([[0,0], [0,1],[0,2]])).toBe(false);

});

test('GameBoard: ReceiveAttack Method',()=>{ 
    // console.log(gameBoard1.gameBoard[0][7]);
    const gameBoard2 = new GameBoard();

    expect(gameBoard2.receiveAttack([0,7])).toBe(false);
    gameBoard2.gameBoard[1][1].hasShip = true;
    gameBoard2.gameBoard[1][1].ship = ship1;
    expect(gameBoard2.receiveAttack([1,1])).toBe(true);
    // gameBoard1.gameBoard[0][2].hasShip = true;
    // expect(gameBoard1.receiveAttack([0,2])).toBe(true);

});

