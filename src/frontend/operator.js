import "./styles.css"
const board = require("../backend/gameboard")
const populate_boat = require("./build_place_ships.js")
const ship = require('../backend/ship.js');
const grid_attack = require("./click_grids.js")

// Get saved boats data from localStorage
function getSavedBoats() {
    console.log("Checking localStorage for savedBoatList");
    const savedData = localStorage.getItem('savedBoatList');
    console.log("Raw saved data:", savedData);
    
    if (!savedData) {
        console.log("No saved boat data found");
        return [];
    }
    
    try {
        return JSON.parse(savedData);
    } catch (e) {
        console.error("Error parsing saved boat data:", e);
        return [];
    }
}

// Add DOM elements function
function addElement(parent, elem, text=null, clas, id=null) {
    const parent_elem = document.querySelector(parent.toString())
    const element = document.createElement(elem.toString())
    element.classList.add(clas.toString())
    if(id != null) {
        element.id = id.toString()
    }
    if(text!=null) {
        element.textContent = text
    }
    parent_elem.appendChild(element)
}

// Set up boards
let computer_board = board(5);
let player_board = board(5);

// Create grids
for (let y=0; y< computer_board.getLength(); y++) {
    for (let x=0; x<computer_board.getLength(); x++) {
        addElement("#computer_grid", "box", "Cy"+y+" Cx"+x, "computer", "c"+"y"+y+"x"+x);
    }
}

for (let y=0; y< player_board.getLength(); y++) {
    for (let x=0; x<player_board.getLength(); x++) {
        addElement("#player_board", "box", "Py"+y+" Px"+x, "player", "p"+"y"+y+"x"+x);
    }
}

// Set up computer ships
const c_boat1 = ship(3,Math.floor(Math.random()*4),Math.floor(Math.random()*4),true,"2boat");
const c_boat2 = ship(2,Math.floor(Math.random()*4),Math.floor(Math.random()*4),true,"2boat");
const c_boat3 = ship(1,Math.floor(Math.random()*4),Math.floor(Math.random()*4),true,"2boat");
populate_boat(computer_board, c_boat1);
populate_boat(computer_board, c_boat2);
populate_boat(computer_board, c_boat3);

let c_ships = [c_boat1,c_boat2,c_boat3];

// Load and set up player ships
document.addEventListener('DOMContentLoaded', () => {
    // Get saved ship data
    const savedShips = getSavedBoats();
    console.log("Retrieved saved ships:", savedShips);
    
    let local_ships = [];
    let count = 0;
    

    if (savedShips && savedShips.length > 0) {
        savedShips.forEach(element => {
            // Make sure you're using the correct property names from your saved data
            // Adjust these property names to match what you actually saved
            const ship1 = ship(
                element.size || element.length, 
                element.x, 
                element.y, 
                element.horizontal, 
                "boat" + count.toString()
            );

            count++;
            console.log("Created ship object:", ship1);
            local_ships.push(ship1);
        });
    } else {
        console.log("No ships found in localStorage, using defaults");
        // Add default ships if none are found
        const defaultShip = ship(2, 1, 1, true, "defaultBoat");
        local_ships.push(defaultShip);
    }
    
    console.log("Final player ships:", local_ships);
    
    // Populate player ships on board
    for (let i=0; i<local_ships.length; i++) {
        console.log("Populating ship:", local_ships[i]);
        populate_boat(player_board, local_ships[i], false);
    }
    
    // Set up clickable events
    grid_attack(computer_board, c_ships, local_ships, player_board);
});

export { player_board };