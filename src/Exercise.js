class Exercise {

    static all = []

    constructor({id, name, reps, workout}) {
        this.id = id;
        this.name = name; 
        this.reps = reps; 
        this.workout = workout;

        Exercise.all.push(this)
        //remembers all of the workouts
    }

        renderExercise() {
        const exerciseList = document.getElementById('exercise-list')
        exerciseList.classList.add('exercise')
        
        const exerciseName = document.createElement('h2');
        exerciseName.innerText = this.name;
    
        exerciseList.appendChild(exerciseName)
        // workoutList.appendChild(workoutDice)

    };

    // display items by Workout
    static filterByWorkout(filteredWorkout){
            const filteredEx = Exercise.all.filter((ex) => {
                return workout.exercise_id === parseInt(filteredWorkout.id)
        })
    }


    


}

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



//     static all = []

//     constructor({id, name, dice_set}) {
//         this.id = id;
//         this.name = name; 
//         this.dice_set = dice_set;

//         //remembers all of the workouts
//         Workout.all.push(this)

//     }

//     renderWorkouts(arg){
//         const Workout = arg["data"]
//         Workouts.forEach(data => {
//         renderWorkout(data)
//         })
//     }

//     renderWorkout() {
//         const workoutList = document.getElementById('workout-list')
//         workoutList.classList.add('workout')
        
//         const workoutName = document.createElement('h2');
//         workoutName.innerText = this.name;
      
//         const workoutDice = document.createElement('h2');
//         workoutDice.innerText = this.dice_set;
    
//         workoutList.appendChild(workoutName)
//         // workoutList.appendChild(workoutDice)

//     };
