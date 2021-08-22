class Form {

    renderForm(){
        const list = document.getElementById('form-list');
        const form = document.getElementbyID('form');
        const nameInput = document.getElementbyID('name-input');
    };

    addEventListener(event) {
        form.addEventListener('submit', handleSubmit)
        event.preventDefault //otherwise will send a post request
        debugger
    };

}