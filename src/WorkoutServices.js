class WorkoutServices {

    getWorkouts(){
        document.addEventListener('DOMContentLoaded', () => {
            const endPoint = 'http://localhost:3000/workouts';
            fetch(endPoint)
            .then(resp => resp.json())
            .then(json => {
                json.forEach(workout => {
                 const workouts = new Workout(workout);
                  workouts.renderWorkout()
                })
            })
            })
        }

}