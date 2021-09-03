//add dom content loaded here to run after other JS files get read
//invoke workout and exercise

const workoutEndPoint = new WorkoutServices('http://localhost:3000/workouts');
const exerciseEndPoint = new ExerciseServices('http://localhost:3000/exercises');
const deleteButton = document.createElement('button')



document.addEventListener('DOMContentLoaded', () => {
    workoutEndPoint.getWorkouts();
    form.addEventListener('submit', exerciseEndPoint.handleSubmit);

})






//    fetch("http://localhost:3000/exercises", configObj)
//     .then(r => r.json())
//     .then(json => renderItem(json.data))