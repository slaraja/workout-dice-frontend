class Form {

    

    getElements(){
        const form = document.getElementbyId('form');
        const list = document.getElementById('form-list');
        const nameInput = document.getElementbyId('name-input');
    };


    handleSubmit(event) {
        event.preventDefault() //otherwise will send a post request
        const formBtn = document.querySelector('button');

        formBtn.addEventListener('click', function() {
        alert('clicked!')
    })

    form.addEventListener('submit', handleSubmit)



}}


//     handleClick(){
//     const formBtn = document.querySelector('button');

//     formBtn.addEventListener('click', function() {
//         alert('clicked!')
//     });
// }

