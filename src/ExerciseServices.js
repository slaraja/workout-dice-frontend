class ExerciseServices {

//handle submit gets an event obj arg automatically
    handleSubmit(event){
        event.preventDefault() //otherwise will send a post request
        const nameInputField = document.getElementById('name-input')
        const repsInputField = document.getElementById('reps-input')
        const workoutInputField = document.getElementById('workout-dropdown')
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
        .then(resp => resp.json())
        //parses JSON into a JS object. It returns a promise.
        .then(json => {
            
            const newExercise = new Exercise(json)
            const workoutList = document.getElementById(`workout-${newExercise.workout_id}`)
            //find a specific workout instead of a list
            const appendedExercise = newExercise.renderExercise()
            // debugger

            workoutList.appendChild(appendedExercise)

            })
            form.reset()

        // })
     
    }


}

  