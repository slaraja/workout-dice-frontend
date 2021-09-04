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
        const exercises = this.exercises
        const ul = document.createElement('ul');

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

            nameLi.remove()


            })

            ul.appendChild(nameLi)
            // ul.appendChild(repsP)
            // ul.appendChild(deleteButton)


        })
        return ul
    }

}