/*
test if they get their own gameboard
*/
const board = require("./gameboard")
const ship = require("./ship")
const player =require("./player")
test("check if player has a gameboard",()=>{
    let p1 = player()
    let arr = [
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0
        ]
      ]
    
    expect(p1.returnBoard()).toEqual(arr)
})
// const grid = Array(10).fill().map(() => Array(10).fill(0));
// console.log(grid)