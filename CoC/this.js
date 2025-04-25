let details = [
    {
        brand : "Redmi",
        model : "Note 9 Pro",
        price : 14999,
        color : "Black"
    },
    {
        brand : "Samsung",
        model : "Galaxy S21 Ultra",
        price : 18999,
        color : "Blue"
    },
    {
        brand : "Apple",
        model : "iPhone 12 Pro Max",
        price : 23999,
        color : "White"
    }
]

details.forEach( (item) => {
    console.log( item.brand, '|' , item.model, '|' , item.price,  '|' ,item.color);
});

console.log(typeof parseInt("1122"));
