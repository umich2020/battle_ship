// import { player_board } from "./operator.js";
//computer attack is random based on board
function computer_attack(player_board,ship_arr){
    let randX = Math.floor(Math.random()*player_board.getLength())
    let randy = Math.floor(Math.random()*player_board.getLength())
    let cnt =0
    while (player_board.getBoard()[randy][randX]=== "XXX" || player_board.getBoard()[randy][randX] === "x" 
    && cnt<player_board.getLength()*player_board.getLength()){
        // console.log(" computer this has been repeated")
        randX = Math.floor(Math.random()*player_board.getLength())
        randy = Math.floor(Math.random()*player_board.getLength())
        cnt++
    }
    let cord = [randX,randy]
    const hit_or_miss = player_board.recieveAttack(cord,ship_arr)
            
    // console.log(player_board.getBoard())
    const target_grid=document.getElementById("py"+randy.toString()+"x"+randX.toString())
    // console.log("target is "+target_grid)

    if(hit_or_miss === "hit!"){
        target_grid.style.background = "#AF1B3F"
        target_grid.textContent = "HIT!"
    } else {
        target_grid.style.background = "#3DBAEE"
        target_grid.textContent = "miss"
    } 


}
module.exports = computer_attack