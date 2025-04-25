const me = {
    first : 'Vishal',
    middle : 'Singh' ,


    greet(caste){
        console.log(`Hello ${this.first} ${this.middle} ${caste}`);
    },

    graat(jati){
        console.log(`${jati}`)
    }
}

// me.greet('Jhajhria');

const you = {
    first : 'Vikas',
    middle : 'Singh'
}

//call
me.greet.call(you,'Jaat')
me.graat.call(you,'Jhajhria')

//bind
me.greet.bind(you,['Jaat'])
me.graat.bind(you,['Jhajhria'])

//bind
const you2 = me.bind