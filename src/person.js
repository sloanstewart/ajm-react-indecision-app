export const isAdult = (age) => {
    if (age >= 18) {
        return console.log('is adult');
    }
    console.log('not adult');
}

export const canDrink = (age) => {
    if (age >= 21) {
        return console.log('can drink');
    }
    console.log('cannot drink');
}