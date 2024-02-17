// code here

const form = document.querySelector('form');
const input = document.querySelector('#name'); // обращение к инпуту через индентификатор
const message = document.querySelector('#message');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = input.value;
    message.textContent = `${name}, это твоё первое приложение`;
});
