class A{
    constructor(){
        console.log("Bankai");
    }
}

class B extends A{
    constructor(){
        super();
        console.log("Senbonozakura kageyoshi");
    }
}

let bleach = new B();