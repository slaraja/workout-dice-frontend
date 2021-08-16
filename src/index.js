
document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/dice_sets';
    fetch(endPoint)
    .then(resp => resp.json())
    .then(json => console.log(json));

    diceSets.forEach[dice => {
    const newDice = new DiceSet(dice)
    newDice.renderDiceSet()
    }
    





// document.addEventListener('DOMContentLoaded', () => {
//     const endPoint = 'http://localhost:3000/dice_sets';
//     fetch(endPoint)
//     .then(resp => resp.json())
//     .then(json => console.log(json));
//     json.forEach(dice_set => {
//         const workout = `
//         <li>
//           <h3>${dice_set.name}
//             <button>Add</button>
//           </h3>
//         </li>`;

//         document.querySelector('#dice_set-list').innerHTML += markup;
// });
