const ship = require("./ship")

function gameboard(length){
    let arr =[]
for (let i=0; i< length; i++){
    arr[i] = []
    for (let j=0; j<length; j++){
        arr[i][j]=0
    }
}
function place(ship){
    let arr = getBoard()
    let startArr = ship.getStartLocation()
    let endArr = ship.getEndLocation()
    for (let i=startArr[1];i<=endArr[1];i++){
        for(let j=startArr[0];j<=endArr[0];j++){
            arr[i][j] = ship.get_Name()
            //where i is x starting at top
            //where j is y starting at left
            //shit no i is y, because it's row and j is actually x so we just swap them
        }
    }
    // console.log(arr)

}
function recieveAttack(cord, ships){
    let board = getBoard()
    let arr_ships = ships
    let [x,y] = cord
    // console.log("double checking if")
    // console.log(board[y][x])
    if(board[y][x] === "XXX"||board[y][x] ==="x")
    {
        console.log("player already hit")
        return null
    }
    // console.log("proceed to attack")
    // console.log("this is runnign still?")
    //XXX means a ship has been hit. x is a miss. and 0 means nothing has happened
    //board[y][x] != "XXX"&&
    if(board[y][x] != "x"&&board[y][x] != "0"){
        //the above function checks for valid attacks
        let hit = null
        arr_ships.forEach((ship)=>{


            if(board[y][x]===ship.get_Name()){
                board[y][x] = "XXX"
                ship.hit()
                console.log('ship hit')
                hit=true
                return "hit!"
                
            }
        })
        return "hit!"

    } else {
        board[y][x] = "x"
        console.log('ship missed')
        //this returns the cord, should we just return a cord? or add it to a list of missed
        //or this just upadtes board in the arr
        return false
    }
    console.log("why would this run")
    // console.log(board)
}
function sunk(){
    let arr = ["x",0,"XXX"]
    let board = getBoard()
    console.log(board)
    let board_len = board.length
    for(let i=0; i< board_len;i++){
        for(let j=0; j< board_len;j++){
            let value = board[i][j]
            if (arr.includes(value) === false){
                return false
            }
        }
    }
    return true
}
//getters
function getBoard(){
    return arr
}
function getLength(){
    return length
}
return {getBoard,place,recieveAttack,getLength,sunk}
}


module.exports = gameboard
