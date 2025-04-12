let size = 0;
function updateBoardVerticalBug(ev){
    const boats = document.querySelectorAll(".boats")
    let listCords = []

    boats.forEach((boat)=>{
        if(boat.getAttribute("data-x")!= "null"){
            let x_grid = parseInt(ev.target.getAttribute("data-x"))
            let y_grid = parseInt(ev.target.getAttribute("data-y"))
            console.log("y_grid is "+y_grid)
            console.log("x_grid is "+x_grid)
            if(ev.target.getAttribute("data-horizontal") != "true"){
                for(let i=x_grid;i<x_grid+size;i++){
                    listCords.push(["y"+y_grid,"x"+(i)])
                }
            
            } else {
                for(let i=y_grid;i<y_grid+size;i++){
                    listCords.push(["y"+(i),"x"+x_grid])
                }
            }
        console.log(listCords)    
        }
            
        })
    for(i=0; i<listCords.length;i++){
        console.log(listCords[i][0]+listCords[i][0])
        const highlighted = document.getElementById(listCords[i][0]+listCords[i][1])
        console.log(highlighted)
        highlighted.style.background = "#FC7A57"
    }
}
function startDrag(ev) {
  bgDefault_Event_Listener();
  size = parseInt(ev.target.getAttribute("data-size"));
  let obj = {
    id: ev.target.id,
    x: ev.target.getAttribute("data-x"),
    y: ev.target.getAttribute("data-y"),
  };
  updateBoardVerticalBug(ev)
  ev.dataTransfer.setData("text/plain", JSON.stringify(obj));

  const parent_elem = ev.target.parentNode.tagName;
  const y = parseInt(ev.target.parentNode.id[1]);
  const x = parseInt(ev.target.parentNode.id[3]);

  if (parent_elem === "BOX") {
    const length = parseInt(ev.target.getAttribute("data-size"));

    for (let i = 0; i < length; i++) {
      if (ev.target.getAttribute("data-horizontal") === "true") {
        let elem = document.getElementById(
          "y" + y.toString() + "x" + parseInt(x + i).toString()
        );
        elem.style.background = "#FC7A57";
      } else {
        let elem = document.getElementById(
          "y" + parseInt(y + i).toString() + "x" + x.toString()
        );
        elem.style.background = "#FC7A57";
      }
    }

    if (ev.target.getAttribute("data-size") != "1") {
    }
  } else {
    console.log("do something");
    ev.target.style.top = "20px";
    ev.target.style.left = "3vw";
  }
}
function dragging(ev) {
  const horizontal = document
    .getElementById("horizontal_text")
    .getAttribute("class");

  let elem_id = ev.target.id;

  let y_grid = parseInt(elem_id[1]);
  let x_grid = parseInt(elem_id[3]);

  let out_of_bounds = false;
  if (horizontal === "true") {
    if (x_grid + size > 5) {
      out_of_bounds = true;
    }
  } else {
    if (y_grid + size > 5) {
      out_of_bounds = true;
    }
  }

  if (out_of_bounds === false) {
    const submit = document.querySelector("#submit");
    submit.textContent = "Submit!";
    ev.preventDefault();
    bgOrange_Event_Listener();
  } else {
    console.log("selection in out of bounds drag again");
    const submit = document.querySelector("#submit");
    submit.textContent = "invalid move, try again";
  }
}
function bgOrange_Event_Listener() {
  let targets = document.querySelectorAll("box");
  targets.forEach((element) => {
    element.addEventListener("dragover", (ev) => {
      ev.target.style.background = "#AF1B3F";
    });
  });
}
function bgDefault_Event_Listener() {
  let targets = document.querySelectorAll("box");
  targets.forEach((element) => {
    element.addEventListener("dragleave", (ev) => {
      ev.target.style.background = "#FC7A57";
    });
  });
}

//note this

function drop(ev) {
  // ev.preventDefault()
  const data = ev.dataTransfer.getData("text/plain");

  const elem = document.getElementById(JSON.parse(data).id);
  // console.log("elem is ")
  // console.log(elem)
  elem.style.position = "absolute";
  elem.style.background = "transparent";

  ev.target.appendChild(elem);

  //get the name of the grid

  let elem_id = ev.target.id;
  let y_grid = elem_id[1];
  let x_grid = elem_id[3];
  const boat = ev.target.firstElementChild;
  // console.log("this is boat")
  // console.log(boat)
  // console.log("previous")
  boat.setAttribute("data-x", x_grid);
  boat.setAttribute("data-y", y_grid);
  if (boat.getAttribute("data-horizontal") === "true") {
    for (let i = 1; i < boat.getAttribute("data-size"); i++) {
      let elem = document.getElementById(
        "y" + y_grid + "x" + (parseInt(x_grid) + i).toString()
      );
      elem.style.background = "#AF1B3F";
    }
  } else {
    for (let i = 1; i < boat.getAttribute("data-size"); i++) {
      let elem = document.getElementById(
        "y" + (parseInt(y_grid) + i).toString() + "x" + x_grid
      );
      elem.style.background = "#AF1B3F";
    }
  }
  // console.log("the change is now")
  // console.log(boat)
}

function submit() {
  //this is submit button
  // we go through each object
  //and get the info into ship objs
  //then we move to the next page
  //passing board and ship array
}
//each object will have an id,
//we will need to rotate a button
