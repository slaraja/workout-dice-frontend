class DiceSetServices {
    
    constructor(baseURL) {
        this.baseURL = baseURL;
    };
    
    getDiceSets(){
        fetch(this.baseURL) 
        .then(resp => resp.json())
        .then(json => {
            json.forEach(dice => {
                const dicesets = new DiceSet(dice);
              dicesets.renderDiceSet()
            })
        })
    }
}