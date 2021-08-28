class ExerciseServices {

    constructor(baseURL) {
    this.baseURL = baseURL;
   };

    getExercises(){
            fetch(this.baseURL)
            .then(resp => resp.json())
            .then(json => {
                json.forEach(exercise => {
                 const exercises = new Exercise(exercise);
                  exercises.renderExerciseReps()
                })
            })
        }

    createExercise(){
         const exerciseDetails = {
             name: this.name.value,
             reps: this.reps.value,
            workout: this.id.value
         }
        
    }

}

//    constructor(baseURL) {
//        this.baseURL = baseURL;
//    };

//     getWorkouts(){
//             fetch(this.baseURL)
//             .then(resp => resp.json())
//             .then(json => {
//                 json.forEach(workout => {
//                  const workouts = new Workout(workout);
//                   workouts.renderWorkout()
//                 })
//             })
//         }