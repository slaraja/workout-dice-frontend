class Workout {

    constructor({id, dice_set, name}) {
        this.id = id;
        this.dice_set = dice_set;
        this.name = name; 
    }

    renderWorkout() {
        const workoutList = document.getElementById('workout-list')
        workoutList.classList.add('workout')
        
        const workoutName = document.createElement('h2');
        workoutName.innerText = this.name;
    
        workoutList.appendChild(workoutName)
    };

}