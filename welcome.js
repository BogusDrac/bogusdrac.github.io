document.addEventListener("DOMContentLoaded", function () {
  var detailsForm = document.getElementById("detailsForm");
  detailsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var name = nameInput.value;
    var email = emailInput.value;

    // Create and append welcome message
    var container = document.createElement("div");
    container.classList.add("container");
    var heading = document.createElement("h1");
    heading.textContent = "Welcome, " + name + "!";
    var emailParagraph = document.createElement("p");
    emailParagraph.textContent = "Your email address: " + email;

    container.appendChild(heading);
    container.appendChild(emailParagraph);

    // Replace the existing content with the welcome message
    var body = document.body;
    body.innerHTML = "";
    body.appendChild(container);
  });
});

