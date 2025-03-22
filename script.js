document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("search-box");
    searchBox.addEventListener("input", function() {
        console.log("Searching for: ", searchBox.value);
    });
});