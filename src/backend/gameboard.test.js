const board = require("./gameboard")
const ship = require("./ship")
/*
tests we need
create either a gameboard or long list ofr node like list, it was called an adjancency list
    i think we shoukld do board a matrix -done
    empty = nuill, aka a board of 0, with length of 100(or side * side)
    -c=computer. p=player. XXX=hit. b#=boat, because each player has a board
    -no hit would be x
    -the best thing would to get the obj name
    -and we would have to add this property
        -or we chea this 

place attack function
    -we can cheat this by having the starting position and ending position be a unique identifier
    - and i would assume the ships would be in an array
-functio(not coupled) to figured out if all ships have been sunk
*/
// import {ship} from "./ship.js"

test("create 2x2 gameboard",() =>{
    let boards = board(2)
    let twoByTwo = [
        [0,0],[0,0]
    ]
    expect(boards.getBoard()).toEqual(twoByTwo)
})
test("create 3x3 gameboard",() =>{
    let boards = board(3)
    let threeByThree = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    expect(boards.getBoard()).toEqual(threeByThree)
})
test("2x2 create 1 dot in bottom left",()=>{
        let boards = board(2)
let boat1 = ship(1,1,0,false,"b1")
let ship_board = [
[0,"b1"],
[0,0]
]
boards.place(boat1)
expect(boards.getBoard()).toEqual(ship_board)
})
test("place boat at 3,2 and 0,0 for 5x5 length 2 vertical and horizontal",()=>{
    let boards = board(5)
let boat1 = ship(2,3,2,false,"b1")
let boat2 = ship(2,0,0,true,"b2")
let boat3 = ship(4,1,4,true,"b3")
let ship_board = [
    ["b2","b2",0,0,0],
    [0,0,0,0,0],
    [0,0,0,"b1",0],
    [0,0,0,"b1",0],
    [0,"b3","b3","b3","b3"]

]
boards.place(boat1)
boards.place(boat2)
boards.place(boat3)
expect(boards.getBoard()).toEqual(ship_board)

})
test(`create 3x3 one boat and increase ship count,
    then board shows missed shots`,()=>{
        let boards = board(3)
        let b1 = ship(2,1,0,false,"b1")
        let ships = [b1]
        boards.place(b1)
        boards.recieveAttack([1,0],ships)
        boards.recieveAttack([1,1],ships)
        boards.recieveAttack([2,2],ships)
        expect(b1.get_times_hit()).toBe(2)
        expect(boards.getBoard()[2][2]).toBe("x")
    })
test(`create 3x3 one boat and increase ship count,
    then but don't sink ship`,()=>{
        let boards = board(3)
        let b1 = ship(2,1,0,false,"b1")
        let ships = [b1]
        boards.place(b1)
        boards.recieveAttack([1,1],ships)
        expect(b1.get_times_hit()).toBe(1)
    })
test("checks in 3x3 if all ships has been sunk, assumes ships have been placed",()=>{
    let boards = board(3)
    let b1 = ship(2,1,0,false,"b1")
    let b2 = ship(1,2,2,false,"b2")

    let ships = [b1,b2]
    boards.place(b1)
    boards.place(b2)
    boards.recieveAttack([1,1],ships)
    expect(boards.sunk()).toBe(false)
    boards.recieveAttack([1,0],ships)
    boards.recieveAttack([2,2],ships)
    expect(boards.sunk()).toBe(true)


})