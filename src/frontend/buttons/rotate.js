export function addButtonEventListener(){
    let rotate_button = document.querySelector("#rotate_button")
    rotate_button.addEventListener("click",()=>{
        clicked()
    })
}

function clicked(){
    let elem_text =document.querySelector("#horizontal_text")
    if (elem_text.getAttribute("class")==="true"){
        elem_text.textContent = "Vertical"
        let attr= "false"
        elem_text.setAttribute("class","attr")
        getBoats(attr)
    } else {
        elem_text.textContent = "Horizontal"
        let attr= "true"
        elem_text.setAttribute("class",attr)
        getBoats(attr)
    }
}
function getBoats(attr){
    let boats = document.querySelectorAll(".boats")
    boats.forEach((boat)=>{
        boat.setAttribute("data-horizontal",attr)
    })
}