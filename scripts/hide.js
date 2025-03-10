document.addEventListener("DOMContentLoaded", function () {
    const emailButton = document.getElementById("email-button");
    const emailBox = document.getElementById("email-box");

    emailButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents jumping to top on click

        // Toggle the email box
        if (emailBox.style.display === "none" || emailBox.style.display === "") {
            emailBox.style.display = "block";
        } else {
            emailBox.style.display = "none";
        }
    });
});
