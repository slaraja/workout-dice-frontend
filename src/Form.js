
const form = document.getElementById('form');
// const formBtn = document.querySelector('button');
// const nameInput = document.getElementById('name-input');
// const list = document.getElementById('form-list');


// formBtn.addEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);


function handleSubmit(event){
    event.preventDefault() //otherwise will send a post request
    // console.log("clicked")
    const nameInputField = event.target.querySelector('#name-input')
    const nameInputString = nameInputField.value

    const exercisePTag = document.createElement('p')
    exercisePTag.textContent = nameInputString

    form.appendChild(exercisePTag)

}


