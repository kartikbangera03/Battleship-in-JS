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
