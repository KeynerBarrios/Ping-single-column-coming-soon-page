const Container = document.querySelector(".main-container__form");
const Email = document.querySelector(".main-container__form__input");
const Error = document.querySelector(".main-container__form__error");
const button = document.querySelector(".main-container__form__button")

button.addEventListener('click', (event)=> {
    event.preventDefault();
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(regExp.test(Email.value)==true){
        Email.style.border = '1px solid hsla(120, 83%, 68%, 0.812)';
        Error.style.display = 'none'
    }else{
        Email.style.border = '1px solid hsl(354, 100%, 66%)';
        Error.style.display = 'block'
    }
}) 