class DiceSets {
    constructor({id, name, side, workouts}) {
        this.id = id;
        this.name = name;
        this.side = side;
        this.workouts = workouts;
    }

    renderDiceSets(arg){
        const diceSet = arg["dice"]
        diceSets.forEach(dice => {
        renderDiceSet(dice)
        })
    }

    renderDiceSet() {
        const diceSetList = document.getElementById('dice-list')
        diceSetList.classList.add('dice')
        
        const diceSetName = document.createElement('h1');
        diceSetName.innerText = this.name;

        diceSetList.appendChild(diceSetName)
    };

renderWorkout() {
    const workoutList = document.getElementById('workout-list')
    workoutList.classList.add('workout')
    
    const workoutName = document.createElement('h2');
    workoutName.innerText = this.name;

    workoutList.appendChild(workoutList)
};
};


