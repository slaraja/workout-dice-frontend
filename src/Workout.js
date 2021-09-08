class Workout {

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

        workoutName.id = `workout-${this.id}`

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

            ul.appendChild(nameLi)

        })
        return ul
    }

}