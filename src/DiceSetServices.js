class DiceSetServices {

    getDiceSets(){
    document.addEventListener('DOMContentLoaded', () => {
        const endPoint = 'http://localhost:3000/dice_sets';
        fetch(endPoint)
        .then(resp => resp.json())
        .then(json => {
            json.forEach(dice => {
             const diceSet = new DiceSets(dice);
              diceSet.renderDiceSet()
              //calling function from diceset.js
            })
        })
        })
    }
}