function getclr(){
    n1 = Math.ceil(0 + Math.random()*(255));
    n2 = Math.ceil(0 + Math.random()*(255));
    n3 = Math.ceil(0 + Math.random()*(255));
    return `rgb(${n1}, ${n2}, ${n3})`;
}

document.querySelector(".container").style.backgroundColor=getclr();

document.querySelectorAll(".box").forEach(e=>{
    e.style.color=getclr();
    e.style.backgroundColor=getclr();
})


// let b = document.getElementsByClassName("box");
// document.querySelector(".container").style.backgroundColor=getclr();
// for( i=0;i<=4;i++)
// {
//     b[i].style.backgroundColor = getclr();
//     b[i].style.color = getclr();

// }

// b[0].style.backgroundColor = getclr();
// b[0].style.color = getclr();
// b[1].style.backgroundColor = getclr();
// b[1].style.color = getclr();
// b[2].style.backgroundColor = getclr();
// b[2].style.color = getclr();
// b[3].style.backgroundColor = getclr();
// b[3].style.color = getclr();
// b[4].style.backgroundColor = getclr();
// b[4].style.color = getclr();

document.querySelectorAll(".title").forEach(e=>{
    e.style.color=getclr();
})