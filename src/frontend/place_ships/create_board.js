import "./place_ships.css"
import { allButtons } from "../buttons/entry"
import { submitting } from "../buttons/submit"
submitting()
allButtons()
const board  = require("../../backend/gameboard")


function addElement(parent,elem,text=null,clas,id=null){
    const parent_elem = document.querySelector(parent.toString())
    const element = document.createElement(elem.toString())
    element.classList.add(clas.toString())
    if(id != null){
        element.id = id.toString()
    }
    if(text!=null)
    {
        element.textContent = text
    }
    element.setAttribute("ondragstart","startDrag(event)")
    // element.setAttribute("ondragover","dragging(event)")
    element.setAttribute("ondragover","dragging(event)")


    element.setAttribute("ondrop","drop(event)")

    parent_elem.appendChild(element)


}


//this is the board the player is going to intereact with
let player_board_drag = board(5)

// module.exports = player_board
for (let y=0; y< player_board_drag.getLength(); y++){
    for (let x=0; x<player_board_drag.getLength(); x++ )
    {
        addElement("#player_board", "box","y"+y+" x"+x,"player","y"+y+"x"+x)

    }
}