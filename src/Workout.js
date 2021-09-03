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

    renderExercises(){
//create a new instance of the 
        const exercises = this.exercises
        const ul = document.createElement('ul');
        //make sure each one is an instance of the exercise class, like in workout
        exercises.forEach(exercise => {
            console.log(exercise, "exercise")

            const nameLi = document.createElement('li')
            nameLi.innerText = exercise.name
            
            const deleteButton = document.createElement('button')
            deleteButton.innerText = "Delete"

            deleteButton.id = exercise.id

            const repsP = document.createElement('p')
            repsP.innerText = exercise.reps


            nameLi.appendChild(repsP)
            nameLi.appendChild(deleteButton)

            deleteButton.addEventListener('click', function (event) {
                event.preventDefault()
                console.log(event.target.id, "event target")

            //create delete request in exerciseservices and invoke it in exercise.js  

            const configObj = {
                method: 'DELETE',
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

            fetch(`http://localhost:3000/exercises/${event.target.id}`, configObj)
            .then(r => r.json())
            .then(json => alert(json.message)) 


            // remove the deleteButton ELEMENT from the dom
            // fetch(`http://localhost:3000/exercises/${event.target.id}`, configObj)

            // const repsP = document.createElement('p')
            // repsP.innerText = exercise.reps

            // nameLi.appendChild(repsP)
            // nameLi.appendChild(deleteButton)
            nameLi.remove()
            // deleteButton.remove();

            })

            // const link = document.createElement('a')
            // link.innerText = 'link'

            ul.appendChild(nameLi)
            // ul.appendChild(repsP)
            // ul.appendChild(deleteButton)
            // ul.appendChild(link)


        })
        return ul
    }

}

    // deleteExercise(event) {
    
    //     const configObj = {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         }
    //     }
        
    //     fetch(`http://localhost:3000/exercises/${id}`, configObj)
    //         .then(r => r.json())
    //         .then(json => alert(json.message))

    // //removes from DOM
    //     fetch(`${baseUrl}/${id}`, configObj)
    //     event.remove();
    // }

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