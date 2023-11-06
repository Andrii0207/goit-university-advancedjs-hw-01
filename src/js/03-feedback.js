
import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    textaria: document.querySelector('textarea')
}


refs.form.addEventListener("input", throttle(handlerData, 500));
refs.form.addEventListener("submit", onSubmit);

const LS_KEY = "feedback-form-state";
let formData = JSON.parse(localStorage.getItem(LS_KEY)) || {};

readDataLS();

function handlerData(evt) {
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(LS_KEY, JSON.stringify(formData))
};


function onSubmit(evt) {
    evt.preventDefault();

    const { email, message } = evt.currentTarget.elements;

    if (email.value === "" || message.value === "") {
        alert("Please, fill in all fields the form");
        return;
    }
    refs.form.reset()
    localStorage.removeItem(LS_KEY);
    console.log(formData);
    formData = {};
}

function readDataLS() {
    const readDataLS = JSON.parse(localStorage.getItem(LS_KEY));

    if (readDataLS) {
        refs.textaria.value = readDataLS.message || "";
        refs.email.value = readDataLS.email || "";
    };
};

