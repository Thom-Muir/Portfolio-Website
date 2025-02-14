document.addEventListener("DOMContentLoaded", function () {
    fetch("/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Footer fetch failed: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
