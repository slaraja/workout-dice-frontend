class Workout {

    static all = [];

    constructor({id, name, exercises}) {
        this.id = id;
        this.name = name;
        this.exercises = exercises;

    Workout.all.push(this)
    }

    renderWorkout() {
        const workoutList = document.getElementById('workout-list')
        workoutList.classList.add('workout')
        
        const workoutName = document.createElement('h1');
        workoutName.innerText = this.name;

        workoutList.appendChild(workoutName)

        const exerciseUL = this.renderExercises() //returns the ul
        workoutName.appendChild(exerciseUL)
    };

    renderExercises(arg){
        const exercises = this.exercises
        const ul = document.createElement('ul');
        //make sure each one is an instance of the exercise class, like in workout
        exercises.forEach(exercise => {
            console.log(exercise)

            const nameLi = document.createElement('li')
            nameLi.innerText = exercise.name

            const repsP = document.createElement('p')
            repsP.innerText = exercise.reps


            ul.appendChild(nameLi)
            ul.appendChild(repsP)

        })
        return ul
    }

    addDropDown(){
        option.value = this.id
        option.innerText = this.name
        this.addDropDown.append(chooseWorkout)
    }

}

    // renderExercises(arg){
    //     const exercises = this.exercises
    //     const ul = document.createElement('ul');
    //     //make sure each one is an instance of the exercise class, like in workout
    //     exercises.forEach(exercise => {
    //         console.log(exercise)
    //         const li = document.createElement('li')
    //         li.innerText = exercise.name

    //         ul.appendChild(li)

    //     })
    //     return ul
    // }

 

//     setExercisesByWorkout = (e) => {
//         let filteredWorkout
//         Workout.all.forEach(ex => {
//             if(ex.element === ex.element && !this.workout){
//             ex.element.classList.add('filtered')
//             ex.active = true
//             filteredWorkout = ex
//         }else{
//             ex.element.classList.remove('filtered')
//             ex.active = false
//         }
            
//         Exercise.filterByWorkout(filteredByWorkout)
//         })

// }


    // constructor({id, name, side, workouts}) {
    //     this.id = id;
    //     this.name = name;
    //     this.side = side;
    //     this.workouts = workouts;
    // }

    // // renderDiceSets(arg){
    // //     const diceSet = arg["dice"]
    // //     diceSets.forEach(dice => {
    // //     renderDiceSet(dice)
    // //     })
    // // }

    // // renderDiceSet() {
    // //     const diceSetList = document.getElementById('dice-list')
    // //     diceSetList.classList.add('dice')
        
    // //     const diceSetName = document.createElement('h1');
    // //     diceSetName.innerText = this.name;

    // //     diceSetList.appendChild(diceSetName)
    // // };