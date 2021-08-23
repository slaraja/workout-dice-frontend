//add dom content loaded here to run after other JS files get read
//invoke dice set and workout

const diceEndPoint = new DiceSetServices('http://localhost:3000/dice_sets');
const workEndPoint = new WorkoutServices('http://localhost:3000/workouts');

document.addEventListener('DOMContentLoaded', () => {
    diceEndPoint.getDiceSets();
    workEndPoint.getWorkouts();
})

form.addEventListener('submit', handleSubmit)

