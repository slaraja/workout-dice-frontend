class ExerciseServices {

    handleSubmit(event){
        event.preventDefault() 
        const nameInputField = document.getElementById('name-input')
        const repsInputField = document.getElementById('reps-input')
        const workoutInputField = document.getElementById('workout-dropdown')
        const form = document.getElementById('form');

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
        .then(json => {
            const newExercise = new Exercise(json)
            const workoutList = document.getElementById(`workout-${newExercise.workout_id}`)
            const appendedExercise = newExercise.renderExercise()
            workoutList.appendChild(appendedExercise)
            })

            form.reset()
     
    }

}

  