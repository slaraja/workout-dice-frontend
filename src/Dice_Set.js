class DiceSets {
    constructor({id, name, side, workouts}) {
        this.id = id;
        this.name = name;
        this.side = side;
        this.workouts = workouts;
    };

    renderDiceSet() {
        const diceSetList = document.getElementById('dice-list')
        const diceSetDiv = document.createElement('div')
        diceSetList.classList.add('dice-card')
        
        const diceSetName = document.createElement('h1');
        diceSetName.innerText = this.name;

        diceSetCard.appendChild(diceSetName)
        diceSetList.appendChild(diceSetCard)



        };

};