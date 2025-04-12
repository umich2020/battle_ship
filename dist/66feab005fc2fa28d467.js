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
    parent_elem.appendChild(element)


}
// const board = require("../backend/gameboard")
import {board} from "../backend/gameboard.js"
let computer_board = board(5)
console.log(computer_board.getLength())
for (let i=0; i< computer_board.getLength(); i++){
    
}
addElement("#computer_grid", "box",3,"player")
addElement("#computer_grid", "box",4,"player")
addElement("#computer_grid", "box",5,"player")
addElement("#computer_grid", "box",6,"player")
addElement("#computer_grid", "box",7,"player")
addElement("#computer_grid", "box",8,"player")
addElement("#computer_grid", "box",9,"player")
addElement("#computer_grid", "box",10,"player")


//remember this does it in reverse