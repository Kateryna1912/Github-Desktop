let loginDiv = document.createElement("div");
loginDiv.className = "loginBox";
document.body.appendChild(loginDiv);

let createH2 = document.createElement("h2");
loginDiv.appendChild(createH2);
createH2.innerHTML = "Login";

let createForm = document.createElement("form");
loginDiv.appendChild(createForm);

let userNameDiv = document.createElement("div");
createForm.appendChild(userNameDiv);
userNameDiv.className = "userBox";

let nameInput = document.createElement("input");
userNameDiv.appendChild(nameInput);
nameInput.type = "text";
nameInput.required = "required";

let userNameLabel = document.createElement("label");
userNameDiv.appendChild(userNameLabel);
userNameLabel.innerHTML = "Username";

let userPassDiv = document.createElement("div");
createForm.appendChild(userPassDiv);
userPassDiv.className = "userBox";

let passInput = document.createElement("input");
userPassDiv.appendChild(passInput);
passInput.type = "password";
passInput.required = "required";

let userPassLabel = document.createElement("label");
userPassDiv.appendChild(userPassLabel);
userPassLabel.innerHTML = "Password";

let subButtom = document.createElement("button");
createForm.appendChild(subButtom);
subButtom.innerHTML = "submit";
subButtom.style.cursor = "pointer";
for (let i = 0; i < 4; i++) {
  let createSpan = document.createElement("span");
  subButtom.appendChild(createSpan);
}
