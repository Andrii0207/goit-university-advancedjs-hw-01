
import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    textaria: document.querySelector('textarea')
}


refs.form.addEventListener("input", throttle(handlerData, 500))
refs.form.addEventListener("submit", onSubmit)

const LS_KEY = "feedback-form-state";
const formData = {}

readDataLS()


function handlerData() {
    formData[refs.email.name] = refs.email.value
    formData[refs.textaria.name] = refs.textaria.value

    localStorage.setItem(LS_KEY, JSON.stringify(formData))
}


function onSubmit(evt) {
    evt.preventDefault();

    const formDataInput = evt.currentTarget.elements
    const inputDataValue = formDataInput.email.value
    const textariaDataValue = formDataInput.message.value

    if (inputDataValue === "" || textariaDataValue === "") {
        alert("Please, fill in all fields the form")
        return
    }

    refs.form.reset()
    localStorage.removeItem(LS_KEY)
}

function readDataLS() {
    const readDataLS = JSON.parse(localStorage.getItem(LS_KEY))

    if (readDataLS) {
        refs.textaria.textContent = readDataLS.message || "";
        refs.email.textContent = readDataLS.email || "";

        console.log(readDataLS)
        console.log("email >>>", readDataLS.email)
        console.log("message >>>", readDataLS.message)
    }
}

