// When the page loads, check if there's a stored value in localStorage.
let item = parseInt(localStorage.getItem('item')) || 10; // Default to 10 if nothing is stored
document.querySelector('#item').textContent = item;

export function count(){
    return item;
}

// This script doesn't need to alter the value here; it's handled in p2.js
