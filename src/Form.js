
const form = document.getElementById('form');
// const formBtn = document.querySelector('button');
// const nameInput = document.getElementById('name-input');
// const list = document.getElementById('form-list');


// formBtn.addEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);

//handle submit gets an event obj arg automatically
    function handleSubmit(event){
        event.preventDefault() //otherwise will send a post request
        const nameInputField = event.target.querySelector('#name-input')
        const repsInputField = event.target.querySelector('#reps-input')
    
        //grab the value of what the user types into the field
        const inputs = {
            name: nameInputField.value,
            reps: repsInputField.value
       }
    
        //creates a p tag
        const exercisePTag = document.createElement('p')
        const exercisePTagReps = document.createElement('p')

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(inputs)
        }
    }
        
        // fetch("http://localhost:3000/exercises", configObj)
        // .then(r => r.json())
        // .then(json => renderWorkout(json.inputs))
        
        // }

    
        //give the p tag text content as a string
        // exercisePTag.textContent = nameInputString    
        // exercisePTagReps.textContent = repsInputString
    
    
    //     //append p tag to the DOM
    //     form.appendChild(exercisePTag)
    //     form.appendChild(exercisePTagReps)


    // function handleSubmit(event){
    //     event.preventDefault() //otherwise will send a post request
    //     const nameInputField = event.target.querySelector('#name-input')
    //     const repsInputField = event.target.querySelector('#reps-input')
    
    //     //grab the value of what the user types into the field
    //     const nameInputString = nameInputField.value
    //     const repsInputString = repsInputField.value
    
    //     //creates a p tag
    //     const exercisePTag = document.createElement('p')
    //     const exercisePTagReps = document.createElement('p')
    
    
    //     //give the p tag text content as a string
    //     exercisePTag.textContent = nameInputString    
    //     exercisePTagReps.textContent = repsInputString
    
    
    //     //append p tag to the DOM
    //     form.appendChild(exercisePTag)
    //     form.appendChild(exercisePTagReps)