
function startDrag(ev){
    bgDefault_Event_Listener()

    // console.log(ev.target.getAttribute("data-temp"))//allows me to get custom attributes
    let obj = {id:ev.target.id, x:ev.target.getAttribute("data-x"),
        y:ev.target.getAttribute("data-y")
    }
    ev.dataTransfer.setData("text/plain", JSON.stringify(obj))
  
    const parent_elem = ev.target.parentNode.tagName
    const y=parseInt(ev.target.parentNode.id[1])
    const x=parseInt(ev.target.parentNode.id[3])

    // console.log("parent is ")
    //     console.log(parent_elem)
    if(parent_elem === "BOX"){
       
        const length =parseInt(ev.target.getAttribute("data-size"))


                for(let i=0; i<length;i++){
    
                    if(ev.target.getAttribute("data-horizontal")==="true"){

                        let elem = document.getElementById("y"+y.toString()+"x"+
                        (parseInt(x+i).toString()))
                        elem.style.background = "#FC7A57"
                    } else {
                        let elem = document.getElementById("y"+(parseInt(y+i).toString())
                        +"x"+x.toString())
                        elem.style.background = "#FC7A57"
                    }
                    
                }



        if(ev.target.getAttribute("data-size") != "1"){
            
            
                

            
        }
        // ev.target.style.background = "#FFFFFF" 
    } else {
        console.log("do something")
        ev.target.style.top = "20px"
        ev.target.style.left = "3vw"


        //make element invisble
    }

}
function dragging(ev){
    ev.preventDefault()
    bgOrange_Event_Listener()

}
function bgOrange_Event_Listener(){
    let targets = document.querySelectorAll("box")
    targets.forEach((element)=>{
        element.addEventListener("dragover",(ev)=>{
            ev.target.style.background = "#AF1B3F"    })
    })
}
function bgDefault_Event_Listener(){
    let targets = document.querySelectorAll("box")
    targets.forEach((element)=>{
        element.addEventListener("dragleave",(ev)=>{
            ev.target.style.background = "#FC7A57"    })
    })
}

//note this 

function drop(ev){
    ev.preventDefault()
    const data = ev.dataTransfer.getData("text/plain")
    


    //we get ship info which is in attributes
    //we change attributes specifically horizontal
    //and we alert if there's an issue and deny it putting it there
    //the rest is manually given
    //we change x and y given the drop input of the ship
    //we update the dom
        //change the curret one
        //and get the additoinal arrays
        //loop through all the grids and update the ones with apprioate x and y
        //remove the previous element, no it's sitll there just minimize
        //the size and have it as an invisible element
    //then when we click button

    const elem = document.getElementById(JSON.parse(data).id)
    // console.log("elem is ")
    // console.log(elem)
    elem.style.position = "absolute"
    elem.style.background = "transparent" 

    ev.target.appendChild(elem)



    //get the name of the grid

    let elem_id = ev.target.id
    let y_grid = elem_id[1]
    let x_grid = elem_id[3]
    const boat = ev.target.firstElementChild
    // console.log("this is boat")
    // console.log(boat)
    // console.log("previous")
    boat.setAttribute("data-x",x_grid)
    boat.setAttribute("data-y",y_grid)
    if(boat.getAttribute("data-horizontal")==="true"){
        for(let i=1; i<boat.getAttribute("data-size");i++){
            let elem = document.getElementById("y"+y_grid+"x"+
                (parseInt(x_grid)+i).toString())
                elem.style.background = "#AF1B3F"
            // console.log(elem)
        }
    } else {
        for(let i=1; i<boat.getAttribute("data-size");i++){
            let elem = document.getElementById("y"+(parseInt(y_grid)+i).toString()+"x"+
                x_grid)
                elem.style.background = "#AF1B3F"
            // console.log(elem)
        }
    }
    // console.log("the change is now")
    // console.log(boat)
}
function rotate(){
    //change text on size
    //set attriubtes to true or false
}
function submit(){
    //this is submit button
    // we go through each object
    //and get the info into ship objs
    //then we move to the next page
    //passing board and ship array
}
//each object will have an id, 
//we will need to rotate a button