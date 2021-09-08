//add dom content loaded here to run after other JS files get read
//invoke workout and exercise

const workoutEndPoint = new WorkoutServices('http://localhost:3000/workouts');
const exerciseEndPoint = new ExerciseServices('http://localhost:3000/exercises');

//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
//without waiting for stylesheets, images, and subframes to finish loading.

document.addEventListener('DOMContentLoaded', () => {
    workoutEndPoint.getWorkouts();
    form.addEventListener('submit', exerciseEndPoint.handleSubmit);

})