const fetchData = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if(success) {
                resolve('I am vengeance.........');
            } else {
                reject('I am Batman.......');
            }

        }, 2000);
    });
};

let result = fetchData(true);
result.then((data)=>console.log(data)).catch((error)=>console.log(error))
let result2 = fetchData(false);
result2.then((data)=>console.log(data)).catch((error)=>console.log(error))
