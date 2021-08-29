class Exercise {

    // static all = []

    constructor({id, name, reps, workout_id}) {
        this.id = id;
        this.name = name; 
        this.reps = reps; 
        this.workout_id = workout_id;

        // Exercise.all.push(this)
        //remembers all of the workouts
    }

        //renders all of the exercises
        renderExercise() {
            const workoutList = document.getElementById('exercise-list')
            exerciseList.classList.add(`exercise-${this.id}`)
           
            const exerciseName = document.createElement('div');
            exerciseNameinnerText = this.name;
            exerciseName.classList.add(`${this.id}`)

            exerciseRepsinnerText = this.reps;
            exerciseReps.classList.add(`${this.id}`)
    
            exerciseList.appendChild(exerciseName)
    
            const workoutUL = this.renderWorkout() //returns the ul
            workoutName.appendChild(workoutUL)
    
        };

        // renderExercise() {
        //     const exerciseList = document.createElement('div')
        //     exerciseList.classList.add(`exercise-${this.id}`)
        //     exerciseList.innerHTML = `
        //         <p>${this.name}</p>  
        //         <p>${this.reps}</p> 
        //         `
                
        //     const renderedWorkouts = document.getElementById(`h1-${this.workout_id}`)
        //     renderedWorkouts.appendChild(exerciseList)
    
        // };

}
    // renderExercise() {
    //     const exerciseList = document.getElementById('exercise-list')
    //     exerciseList.classList.add('exercise')
        
    //     const exerciseReps = document.createElement('h2');
    //     exerciseReps.innerText = this.reps;
    
    //     exerciseList.appendChild(exerciseReps)

    //     const workoutUL = this.renderWorkouts() //returns the ul
    //     exerciseReps.appendChild(workoutUL)

    // };

    // renderWorkouts(arg){
    //     const workout = this.workout
    //     const ul = document.createElement('ul');
    //     workout.forEach(w => {
    //         console.log(w)
    //         const li = document.createElement('li')
    //         li.innerText = w.id

    //         ul.appendChild(li)

    //     })
    //     return ul
    // }

    // display items by Workout
    // static filterByWorkout(filteredWorkout){
    //         const filteredEx = Exercise.all.filter((ex) => {
    //             return workout.exercise_id === parseInt(filteredWorkout.id)
    //     })
    // }

        // renderExercise() {
        // const li = document.createElement('li')
        // li.dataset["id"] = exercise.id
        // li.id = 'exercise-${exercise.id}'
        // li.innerHTML = `
        // <div data-id="${exercise.id}">
        // <span class="name">${exercise.name}</strong>:
        // </div>
        // `

        // list.appendChild(li)
        // }


    // renderExercises(arg){
    //     const Exercise = arg["data"]
    //     Exercises.forEach(data => {
    //     renderExercise(data)
    //     })
    // }


