//task 1 from second part

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

addLabelToInput(userNameInput);
addLabelToInput(passwordInput);
addLabelToInput(confirmPasswordInput);

