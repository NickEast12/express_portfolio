// contact form animations 
const inputBoxLabel = document.querySelector('.form-name-wrapper label');
const inputBox = document.querySelector('.form-name-wrapper');
const inputBoxLabelEmail = document.querySelector('.form-email-wrapper label');
const inputBoxEmail = document.querySelector('.form-email-wrapper');
const textWrapper = document.querySelector('.text-wrapper');
const textWrapperLabel = document.querySelector('.text-wrapper label');
let formFuntion = (x,y) => {
x.addEventListener('click', () => {
    y.style.opacity= '1';
    y.classList.add('placeholder');
    y.style.bottom = '50%';
});
};
let formFuntionTextArea = (x,y) => {
    x.addEventListener('click', () => {
        y.style.opacity= '1';
        y.classList.add('placeholder');
        y.style.bottom = '80%';
    });
    };
formFuntion(inputBox, inputBoxLabel);
formFuntion(inputBoxEmail, inputBoxLabelEmail);
formFuntionTextArea(textWrapper, textWrapperLabel);
