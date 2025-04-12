 function ship(len,x,y, horizontal=true,name="null"){
    let length = len
    let times_hit =0
    let sunk=false
    let start_location = [x,y]
    let end_location = find_end_location()
    function find_end_location(){
        if(horizontal === true){
            return [x + length-1, y]
        } else {
            return [x , y+length-1]
        }
    }

    //getter functions
    function hit() {
        times_hit++;
    }
    function isSunk() {
        return times_hit >= length;
    }
    function get_times_hit() {
        return times_hit;
    }
    function getStartLocation() {
        return start_location;
    }
    function getEndLocation() {
        return end_location;
    }
    function get_Name(){
        return name
    }
    return {length,get_Name,get_times_hit,isSunk,getStartLocation,getEndLocation,hit,horizontal,x,y}
}
module.exports = ship
// let boat = ship(5,3,2)
// console.log(boat.end_location)