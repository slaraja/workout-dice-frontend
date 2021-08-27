class Exercise {

    static all = []

    constructor({id, name, workout}) {
        this.id = id;
        this.name = name; 
        this.rep = rep; 
        this.workout = workout;

        Exercise.all.push(this)
        //remembers all of the workouts
    }

    static filterByWorkout(filteredWorkout) {
        if(filteredWorkout){
            Exercise.all.filter(workout) => {
                return this.workout.category_id === filteredWorkout.id
        }
    }


}

//         renderExercise() {
//         const li = document.createElement('li')
//         li.dataset["id"] = exercise.id
//         li.id = 'exercise-${exercise.id}'
//         li.innerHTML = `
//         <div data-id="${item.id}">
//         $<span class="price">${item.attributes.price}</span>
//         <strong class="name">${item.attributes.name}</strong>:
//         <span class="description">${item.attributes.description}</span> 
//         </div>
//         `

//         list.appendChild(li)

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
