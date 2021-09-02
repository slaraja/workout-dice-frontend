class ExerciseServices {

    constructor(baseURL) {
    this.baseURL = baseURL;
   };


//handle submit gets an event obj arg automatically
    handleSubmit(event){
        event.preventDefault() //otherwise will send a post request
        const nameInputField = event.target.querySelector('#name-input')
        const repsInputField = event.target.querySelector('#reps-input')
        const workoutInputField = event.target.querySelector('#workout-dropdown')

        // const nameInputField = document.getElementById('name-input')
        // const repsInputField = document.getElementById('reps-input')
        // const workoutInputField = document.getElementById('workout-dropdown')
        const form = document.getElementById('form');


    //grab the value of what the user types into the field
        const inputs = {
            name: nameInputField.value,
            reps: repsInputField.value,
            workout_id: workoutInputField.value,
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(inputs)
        }
        console.log("configObj", configObj)
        fetch('http://localhost:3000/exercises', configObj)
        .then(r => r.json())
        .then(json => {
            const newExercise = new Exercise(json)
            const workoutList = document.getElementById('workout-list')
            // const appendedExercise = newExercise.renderExercises()
            const appendedExercise = newExercise.renderExercise()

            //create renderExercise and call it here
            workoutList.appendChild(appendedExercise)

            // const workout = document.getElementById("workout_id")
            // // debugger

            // workout.appendChild(appendedExercise)
            // event.target()
            form.reset()

        })
     
    }

}

   