const board = require("../backend/gameboard")

function populate_boat(board,boat,comp=true){
// console.log("this is the boat")
// console.log(boat)
    board.place(boat)

    let cords= getXandY(boat.getStartLocation(),boat.getEndLocation(),boat.horizontal)
    // console.log("end location is ")
    // console.log(boat.getEndLocation())
    // console.log("start location is ")
    // console.log(boat.getStartLocation())
    // console.log("cords is")
    // console.log(cords)
    DOM_boat(cords,comp)
    console.log(    board.getBoard())

}

function getXandY(start_location,end_location,horizontal){
    
    let cord_list = []
    if (horizontal === true || horizontal ==="true"){
        for (let i=start_location[0]; i<=end_location[0];i++){
            cord_list.push([i,start_location[1]])
        }
    } else{
        for (let i=start_location[1]; i<=end_location[1];i++){
            cord_list.push([start_location[0],i])
        }
    }

    return cord_list
}
function DOM_boat(arr,comp){
    let board_type = null
    if(comp===true){
        board_type =".computer"
    } else {
        board_type = ".player"
        console.log("player class is operating")
    }
    const grid = document.querySelectorAll(board_type)
    grid.forEach((element) => {
        const x = element.id[2]
        const y = element.id[4]
        arr.forEach((coord) => {
            if(coord[0] == parseInt(y) && coord[1] ==parseInt(x)){
                if(comp!= true){
                    element.style.background = "#03712D"

                }


            }
        })

    });
}
module.exports = populate_boat
