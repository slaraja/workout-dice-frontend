class DiceSet {
    constructor({id, name, side, workouts}) {
        this.id = id;
        this.name = name;
        this.side = side;
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

};


