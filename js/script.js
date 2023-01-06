const form = document.querySelector("#form");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#pass-confirmation");
const errorMsg = document.querySelector(".error-template");
const inputs = document.querySelectorAll("input");
const inputsArr = [...inputs];

function validateForm() {
  inputsArr.forEach((input) => {
    if (input.value === "") {
      showError(input);
    } else {
      showSucces(input);
    }
  });
}

function showError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function showSucces(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("succes");
}

function checkPassword() {
  if (password.value !== passConfirm.value) {
    showError(passConfirm);
    errorMsg.classList.remove("hidden");
  } else {
    showSucces(passConfirm);
    errorMsg.classList.add("hidden");
  }
}
//event handlers
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

inputsArr.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.value === "") {
      showError(input);
    } else {
      showSucces(input);
    }
  });
});

passConfirm.addEventListener("keyup", checkPassword);
