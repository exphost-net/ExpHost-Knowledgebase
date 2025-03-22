document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("search-box");
    const searchResults = document.createElement("ul");
    searchResults.classList.add("search-results");
    searchBox.parentNode.appendChild(searchResults);

    const articles = [
        { title: "Getting Started", url: "articles/getting-started.html" },
        { title: "Billing & Payments", url: "articles/billing.html" },
        { title: "Technical Support", url: "articles/i-broke-the-website.html" },
        { title: "Panel Issues", url: "articles/panel.html" }
    ];

    function updateSearchResults(query) {
        searchResults.innerHTML = "";
        searchResults.style.display = "none";

        const filteredArticles = query.trim() === "" 
            ? articles.slice(0, 4) 
            : articles.filter(article => article.title.toLowerCase().includes(query)).slice(0, 4);

        if (filteredArticles.length > 0) {
            filteredArticles.forEach(article => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = article.url;
                a.textContent = article.title;
                li.appendChild(a);
                searchResults.appendChild(li);
            });

            searchResults.style.display = "block";
            searchResults.style.opacity = "0";
            setTimeout(() => {
                searchResults.style.opacity = "1";
            }, 10);
        }
    }

    searchBox.addEventListener("input", function() {
        updateSearchResults(searchBox.value.toLowerCase());
    });

    searchBox.addEventListener("focus", function() {
        updateSearchResults(""); // Show full list when clicking
    });

    document.addEventListener("click", function(event) {
        if (!searchBox.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.innerHTML = "";
            searchResults.style.display = "none";
        }
    });
});

/* Search Results Dropdown Styling */
const style = document.createElement("style");
style.textContent = `
    .search-results {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 20%;
        background:rgba(19, 19, 32, 0.9);
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        list-style: none;
        padding: 10px;
        margin: 5px 0 0;
        z-index: 1000;
        max-height: 200px;
        overflow-y: auto;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    .search-results li {
        padding: 10px;
        border-radius: 8px;
        transition: background 0.3s;
    }
    .search-results li:hover {
        background: var(--primary-color);
    }
    .search-results li a {
        color: var(--text-color);
        text-decoration: none;
        display: block;
    }
`;
document.head.appendChild(style);