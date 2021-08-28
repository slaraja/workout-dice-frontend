class ExerciseServices {

    constructor(baseURL) {
    this.baseURL = baseURL;
   };


//handle submit gets an event obj arg automatically
    handleSubmit(event){
        // event.preventDefault() //otherwise will send a post request
        const nameInputField = event.target.querySelector('#name-input')
        const repsInputField = event.target.querySelector('#reps-input')
        const workoutInputField = event.target.querySelector('#workout-dropdown')

    //grab the value of what the user types into the field
        const inputs = {
            name: nameInputField.value,
            reps: repsInputField.value,
            workout_id: workoutInputField.value,
        }

    //creates a p tag
        const exercisePTag = document.createElement('p')
        const exercisePTagReps = document.createElement('p')

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(inputs)
        }

        fetch("http://localhost:3000/exercises", configObj)
        .then(r => r.json())
        .then(json => {
            const newExercise = new Exercise(json)
            newExercise.renderExercise()
            event.target()
     //     event.target.reset()
            event.preventDefault() //otherwise will send a post request


        })
     
    }
}

    // getExercises(){
    //         fetch(this.baseURL)
    //         .then(resp => resp.json())
    //         .then(json => {
    //             json.forEach(exercise => {
    //              const exercises = new Exercise(exercise);
    //               exercises.renderExerciseReps()
    //             })
    //         })
    //     }




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