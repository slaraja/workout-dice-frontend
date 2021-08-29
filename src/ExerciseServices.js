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

        fetch('http://localhost:3000/exercises', configObj)
        .then(r => r.json())
        .then(json => {
            const newExercise = new Exercise(json)
            // check workout-list - does not exist
            const workoutList = document.getElementById('workout-list')
            // new line
            const appendedExercise = newExercise.renderExercises()
            workoutList.appendChild(appendedExercise)


            // const workout = document.getElementById("workout_id")
            // // debugger

            // workout.appendChild(appendedExercise)
            // event.target()
            form.reset()
            event.preventDefault()

        })
     
    }

    
//     deleteExercise(event) {
    
//         const configObj = {
//             method: 'DELETE',
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             }
//         }
        
//         fetch(`http://localhost:3000/exercises/${id}`, configObj)
//             .then(r => r.json())
//             .then(json => alert(json.message))

//     //removes from DOM
//         fetch(`${baseUrl}/${id}`, configObj)
//         event.remove();
//     }
}

    // form.addEventListener( 'submit', function( ev ) {
    //     var text = field.value;
    //     if ( text !== '' ) {
    //       todo.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">Delete</button> </li>';
    //       field.value = '';
    //       //field.focus();
    //     }
    //     ev.preventDefault();
    //   }, false);
    

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