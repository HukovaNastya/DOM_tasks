//task 1 from second part


//First solution
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const addLabelToInput = (input) => {
    const inputId = input.getAttribute("id")
    if(input === confirmPasswordInput) {
        input.insertAdjacentHTML("beforebegin", ` <label for=${inputId} class="label">Confirm Password</label>`);
    } else {
        input.insertAdjacentHTML("beforebegin", ` <label for=${inputId} class="label">${inputId}</label>`);
    }
}

// addLabelToInput(userNameInput);
// addLabelToInput(passwordInput);
// addLabelToInput(confirmPasswordInput);

//second solution

const inputLists = document.querySelectorAll("input");
inputLists.forEach((elem) => addLabelToInput(elem));

//task 2  from second part

const form = document.getElementById("registrationForm");
const submitButton = document.querySelector(".btn");
submitButton.setAttribute("type", "submit");

const addErrorElemToInput = (input) => {
    input.insertAdjacentHTML("afterend", ` <small>Error message</small>`);
}

inputLists.forEach((elem) => addErrorElemToInput(elem));

const showError = (input, message)=> {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.classList.add("error");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.classList.remove("error")
}


function checkLength(input, message) {
    if (!input.value.length) {
        showError( input, message );
    } else {
        showSuccess(input);
    }
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkLength(userNameInput, "Please fill input");
    checkLength(passwordInput, "Please fill input");
    checkLength(confirmPasswordInput, "Please fill input");
});
