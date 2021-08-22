class Workout {

    static all = []

    constructor({id, name, dice_set}) {
        this.id = id;
        this.name = name; 
        this.dice_set = dice_set;

        //remembers all of the workouts
        Workout.all.push(this)

    }


    renderWorkouts(arg){
        const Workout = arg["data"]
        Workouts.forEach(data => {
        renderWorkout(data)
        })
    }

    renderWorkout() {
        const workoutList = document.getElementById('workout-list')
        workoutList.classList.add('workout')
        
        const workoutName = document.createElement('h2');
        workoutName.innerText = this.name;
    
        workoutList.appendChild(workoutName)
    };

}

