const isAdult = (age) => {
    if (age >= 18) {
        return console.log('is adult');
    }
    console.log('not adult');
}

const canDrink = (age) => {
    if (age >= 21) {
        return console.log('can drink');
    }
    console.log('cannot drink');
}

const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior };