const inputName = document.querySelector("#name-input")

const greetName = (event) => {
  const greetinName = document.querySelector("#name-output")
  if (inputName.value == "" || inputName.value == " ") return greetinName.textContent = "Anonymous"
  return greetinName.textContent = inputName.value.trim()
}

inputName.addEventListener("blur",greetName)