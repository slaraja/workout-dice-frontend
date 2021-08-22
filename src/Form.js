class Form {

    renderForm(){
        const form = document.getElementbyId('form');
        const list = document.getElementById('form-list');
        const nameInput = document.getElementbyId('name-input');
    };

    addEventListener(event) {
        form.addEventListener('submit', eventListener)
        event.preventDefault //otherwise will send a post request
        debugger
    };

}