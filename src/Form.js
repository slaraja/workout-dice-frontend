
const form = document.getElementById('form');
const formBtn = document.querySelector('button');
const nameInput = document.getElementbyId('name-input');    
// const list = document.getElementById('form-list');
const nameInputString = nameInput.value


formBtn.addEventListener('submit', handleSubmit);


function handleSubmit(event){
    event.preventDefault() //otherwise will send a post request
    // console.log("clicked")

}


