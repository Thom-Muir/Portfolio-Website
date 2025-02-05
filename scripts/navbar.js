document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Navbar fetch failed: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Wait for elements to exist before adding event listener
            setTimeout(() => {
                let hamburger = document.getElementById("hamburger");
                let navbar = document.querySelector(".navbar ul");

                if (hamburger && navbar) {
                    hamburger.addEventListener("click", function () {
                        navbar.classList.toggle("active");
                        this.classList.toggle("rotate-90");
                    });
                }
            }, 100); // Wait 100ms for DOM update
        })
        .catch(error => console.error("Error loading navbar:", error));
});
