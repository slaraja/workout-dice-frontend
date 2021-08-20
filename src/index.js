//add dom content loaded here to run after other JS files get read
//invoke dice set and workout

const workoutEndPoint = new WorkoutServices('http://localhost:3000/workouts');
const diceSetEndPoint = new DiceSetServices('http://localhost:3000/dicesets');

document.addEventListener('DOMContentLoaded', () => {
    workoutEndPoint.fetch
    diceSetEndPoint.fetch
}