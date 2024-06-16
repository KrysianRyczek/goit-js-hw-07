
const form = document.querySelector("form.login-form");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const msg = document.querySelector("form.login-form >p");

  if (((event.target.elements.email.value == "") || (event.target.elements.email.value == " ")) & (msg == null)) {
    form.insertAdjacentHTML("beforeend", `<p style ="color:red; font-size:10px">All form fields must be filled in!</p>`);
  }

  if ((event.target.elements.email.value != "") & (event.target.elements.email.value != " ")) {
    if (msg != null) msg.remove();

    const userCredentials = {
      "email": event.target.elements.email.value,
      "password": event.target.elements.password.value
    };

    form.reset();

    console.log(userCredentials);
  }
 
})