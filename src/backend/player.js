const board = require("./gameboard")

function player(){
    let p_board = board(10).getBoard()
    function returnBoard(){
        return p_board
    }
    return {returnBoard}
}
module.exports = player
