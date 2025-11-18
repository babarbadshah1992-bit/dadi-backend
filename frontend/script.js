console.log("Dadi Ki Dawai Loaded Successfully!");

// 🔗 Apna Backend URL yaha daalo:
const API_URL = "https://dadikidawai-backend.onrender.com/api/search";

async function searchRemedy() {
    const query = document.getElementById("searchInput").value.trim();

    if (!query) {
        alert("Please type something (e.g. hair fall, cold, skin glow)");
        return;
    }

    try {
        // 🚀 Backend call
        const response = await fetch(${API_URL}?q=${query});
        const result = await response.json();

        console.log("Search Results:", result);

        if (result.results.length === 0) {
            alert("No remedy found. Try another keyword.");
        } else {
            showResults(result.results);   // <-- IMPORTANT
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Server error (backend might be sleeping). Try again.");
    }
}


// ⭐ RESULT DISPLAY FUNCTION ⭐
function showResults(results) {
    const container = document.getElementById("resultsContainer");
    container.innerHTML = ""; // clear previous search

    results.forEach(item => {
        const card = `
            <div style="
                border:1px solid #ccc;
                padding:15px;
                margin:10px 0;
                border-radius:10px;
                background:#fff;
            ">
                <h3>${item.title}</h3>
                <p><b>Category:</b> ${item.category}</p>
                <p>${item.description}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}
