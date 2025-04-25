function showTime(){
    let time = new Date();
    console.log(time.toLocaleTimeString());
}


setInterval( ()=>{showTime()}, 1000);

let time = new Date();

console.log(time.getFullYear())