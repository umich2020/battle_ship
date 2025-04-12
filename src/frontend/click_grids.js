// const board = require("../backend/gameboard")
const computer_attack = require("./computer_attack.js")
// import { computer_attack } from "./computer_attack.js"
function grid_attack(board, ship_arr,p_ships,p_board){
    let grids=document.querySelectorAll(".computer")//this makes it all computer
    grids.forEach((grid)=>{
        grid.addEventListener("click",()=>{
            let win_cond = false
            //makes everything unclickable if win condition happens
            if(board.sunk()=== true || p_board.sunk()===true){
                win_cond =true
            }
            if(win_cond === false){
                const x=parseInt(grid.id[4])
                const y=parseInt(grid.id[2])
                const cord = [x,y]
                // console.log(cord)
                const hit_or_miss = board.recieveAttack(cord,ship_arr)
                // console.log(hit_or_miss)
                // console.log(board.getBoard())
                // if(hit_or_miss === true){
                //     grid.style.background = "#AF1B3F"
                //     grid.textContent = "HIT!"
                // } else if(hit_or_miss === false){
                //     grid.style.background = "#3DBAEE"
                //     grid.textContent = "miss"
                // } else{
                //     alert(hit_or_miss)
                //     alert("already attacked here")
                // }
                console.log("hit or miss is ")
                console.log(hit_or_miss)
                if(hit_or_miss ===null){
                    // alert(hit_or_miss)
                    // alert("already attacked here")
                }
                else if(hit_or_miss === "hit!"){
                    grid.style.background = "#AF1B3F"
                    grid.textContent = "HIT!"
                } else{
                    grid.style.background = "#3DBAEE"
                    grid.textContent = "miss"
                } 
                if(hit_or_miss != null){
                    computer_attack(p_board,p_ships)

                }

  
                
            }
            //displays winner message bsaed on who won
            if(board.sunk()=== true || p_board.sunk()===true){
                if(p_board.sunk() === true){
                    alert("the computer has won the game")
                } else{
                    alert("you have won the game")
                }

            }

            
        })
    })
    
}
function eventListenerFn(grid){
    
}
module.exports = grid_attack