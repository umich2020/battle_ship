import "./styles.css"
const board = require("../backend/gameboard")
// import { populate_boat } from "./build_place_ships.js"
const populate_boat = require("./build_place_ships.js")
const ship = require('../backend/ship.js');
const grid_attack = require("./click_grids.js")

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
let computer_board = board(5)
for (let y=0; y< computer_board.getLength(); y++){
    for (let x=0; x<computer_board.getLength(); x++ )
    {
        addElement("#computer_grid", "box","Cy"+y+" Cx"+x,"computer","c"+"y"+y+"x"+x)
        

    }
}

// let player_board = board(5)
export let player_board = board(5)

// module.exports = player_board
for (let y=0; y< player_board.getLength(); y++){
    for (let x=0; x<player_board.getLength(); x++ )
    {
        addElement("#player_board", "box","Py"+y+" Px"+x,"player","p"+"y"+y+"x"+x)

    }
}
function eachBlock (){
    console.log("do something based on input")
    //add when click
}
const c_boat1 = ship(3,2,1,true,"2boat")
const c_boat2 =ship(4,0,1,false,"3boat")
const c_boat3 = ship(1,2,3,true,"1x1")

populate_boat(computer_board, c_boat1)
populate_boat(computer_board,c_boat2)
populate_boat(computer_board,c_boat3)
let c_ships = [c_boat1,c_boat2,c_boat3]


//player populate 
const p_boat1 = ship(2,1,1,true,"2boat")
const p_boat2 =ship(2,0,2,false,"3boat")
let p_ships = [p_boat1,p_boat2]
for (let i=0;i<p_ships.length;i++){
    console.log("this is running")
    populate_boat(player_board,p_ships[i],false)
}
//set up clickable events

grid_attack(computer_board,c_ships,p_ships,player_board)
