import { count } from "./p1.js";
let value = count(); 

document.querySelector('#inc').addEventListener('click', () => {
    value++;
    localStorage.setItem('item', value); 
});

document.querySelector('#dec').addEventListener('click', () => {
    value--;
    localStorage.setItem('item', value); // Save the updated value to localStorage
});

export function alteritem(){
    return value;
}
