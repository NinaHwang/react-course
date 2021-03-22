const isAdult = (age) => age >= 19;
const canDrink = (age) => age >= 18;

const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };