class Workout {

//special method of a class for creating and initializing an object of that class
    constructor({id, name, exercises}) {
        this.id = id;
        this.name = name;
        this.exercises = exercises;
    }

    renderWorkout() {
        const workoutList = document.getElementById('workout-list')
        workoutList.classList.add('workout')
        
        const workoutName = document.createElement('h1');
        workoutName.innerText = this.name;
        // debugger
        workoutName.id = `workout-${this.id}`

       // create a unique identifier for each workout - dataset

        workoutList.appendChild(workoutName)

        const exerciseUL = this.renderExercises() //returns the ul
        workoutName.appendChild(exerciseUL)
    };

    renderExercises(){
        const exercises = this.exercises
        const ul = document.createElement('ul');

        exercises.forEach(exercise => {
            const newExercise = new Exercise(exercise)

            console.log(exercise, "exercise")

            const nameLi = newExercise.renderExercise()

            // const nameLi = document.createElement('li')
            // nameLi.innerText = exercise.name
            
            // const deleteButton = document.createElement('button')
            // deleteButton.innerText = "Delete"

            // deleteButton.id = exercise.id

            // const repsP = document.createElement('p')
            // repsP.innerText = exercise.reps

            // nameLi.appendChild(repsP)
            // nameLi.appendChild(deleteButton)

            // deleteButton.addEventListener('click', function (event) {
            //     //two arguments - the event, which is the click, and the callback method
            //     event.preventDefault()
            //     //prevent the browser from making a POST request and refreshing
            //     console.log(event.target.id, "event target")

            //create delete request in exerciseservices and invoke it in exercise.js  

            // const configObj = {
            //     method: 'DELETE',
            //     headers: {
            //     "Content-Type": "application/json",
            //     Accept: "application/json"
            // }
      

            // fetch(`http://localhost:3000/exercises/${event.target.id}`, configObj)
            // .then(r => r.json())
            // .then(json => alert(json.message)) 

            // nameLi.remove()


                // })
        // }

            ul.appendChild(nameLi)

        })
        return ul
    }

}