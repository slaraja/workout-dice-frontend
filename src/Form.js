
const form = document.getElementById('form');
// const formBtn = document.querySelector('button');
// const nameInput = document.getElementById('name-input');
// const list = document.getElementById('form-list');


// formBtn.addEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);


function handleSubmit(event){
    event.preventDefault() //otherwise will send a post request
    const nameInputField = event.target.querySelector('#name-input')
    
    //grab the value of what the user types into the field
    const nameInputString = nameInputField.value

    //creates a p tag
    const exercisePTag = document.createElement('p')

    //give the p tag text content as a string
    exercisePTag.textContent = nameInputString

    //append p tag to the DOM
    form.appendChild(exercisePTag)

    // function handleError {
    //     const error = (error) => {
    //     console.log(error)
    //     }
    //     }

}





