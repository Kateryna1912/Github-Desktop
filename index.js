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
