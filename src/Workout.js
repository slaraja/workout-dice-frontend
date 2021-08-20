class Workout {

    renderWorkout() {
        const workoutList = document.getElementById('workout-list')
        workoutList.classList.add('workout')
        
        const workoutName = document.createElement('h2');
        workoutName.innerText = this.name;
    
        workoutList.appendChild(workoutName)
    };

}