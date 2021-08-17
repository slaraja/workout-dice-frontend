
document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/dice_sets';
    fetch(endPoint)
    .then(resp => resp.json())
    .then(json => console.log(json));

    diceSets.forEach[dice => {
    const newDice = new DiceSet(dice)
    newDice.renderDiceSet()
    };