const ship = require('../../backend/ship.js');
export let boat_list = {list: ["failed"]};

function submitting() {
    let submit_button = document.getElementById("submit");

    submit_button.addEventListener("click", () => {
        let ready = true;
        const boats = document.querySelectorAll(".boats");
        boats.forEach((boat) => {
            if(boat.getAttribute("data-x") === "null") {
                ready = false;
            }
        });
        
        if(ready === false) {
            alert("please put all boats onto board");
            localStorage.setItem('savedBoatList', JSON.stringify(boat_list.list));
            gotoPage();
        } else {
            submitEvents();
            // Save boat_list to localStorage before navigating
            localStorage.setItem('savedBoatList', JSON.stringify(boat_list.list));
            gotoPage();
        }
    });
}

function submitEvents() {
    alert("you have submitted!");
    const boats = document.querySelectorAll(".boats");
    boat_list.list = []; // Clear the list to start fresh
    
    boats.forEach((boat_elem) => {
        let boat = ship(
            parseInt(boat_elem.getAttribute("data-size")),
            parseInt(boat_elem.getAttribute("data-x")),
            parseInt(boat_elem.getAttribute("data-y")),
            boat_elem.getAttribute("data-horizontal"),
            boat_elem.getAttribute("id")
        );
        boat_list.list.push(boat);
    });
    
    console.log("boat list is");
    console.log(boat_list.list);
}

function gotoPage() {
    console.log("going to index");
    let site = "../../play.html";
    location.assign(site);
}

export { submitting };