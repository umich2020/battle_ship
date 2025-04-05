// ship.test.js
const ship = require('./ship');

test('increase hit 1x', () => {
    const boat = ship();
    boat.hit();

    expect(boat.get_times_hit()).toBe(1); // Use as function, not property
});

test('increase hit 2x', () => {
    const boat = ship();
    boat.hit();
    boat.hit();

    expect(boat.get_times_hit()).toBe(2); // Use as function, not property
});

test('sunk if 3 hits with len 3', () => {
    const boat = ship(3);
    boat.hit();
    boat.hit();
    boat.hit();
    expect(boat.isSunk()).toBe(true);
});

test('sunk if 3 hits with len 5', () => {
    const boat = ship(5);
    boat.hit();
    boat.hit();
    boat.hit();
    expect(boat.isSunk()).toBe(false);
});

test('return array of 3,2', () => {
    const boat = ship(5, 3, 2, true);
    expect(boat.getStartLocation()).toEqual([3, 2]);
});

test('return array of 8,2 with horizontal being true', () => {
    const boat = ship(5, 3, 2, true);
    expect(boat.getEndLocation()).toEqual([8, 2]); 
});
test('return array of 3,2 with horizontal being false', () => {
    const boat = ship(5, 3, 2, false);
    expect(boat.getEndLocation()).toEqual([3, 7]); 
});