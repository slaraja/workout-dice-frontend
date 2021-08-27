//add dom content loaded here to run after other JS files get read
//invoke workout and exercise

const workoutEndPoint = new WorkoutServices('http://localhost:3000/workouts');
const exerciseEndPoint = new ExerciseServices('http://localhost:3000/exercises');

document.addEventListener('DOMContentLoaded', () => {
    workoutEndPoint.getWorkouts();
    exerciseEndPoint.getExercises();
})