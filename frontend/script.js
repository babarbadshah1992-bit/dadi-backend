console.log("Dadi Ki Dawai Loaded Successfully!");

// Backend URL
const API_URL = "https://dadikidawai-backend.onrender.com/api/search";

async function searchRemedy() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();

    if (!query) {
        alert('Please type something (e.g. hair fall, cold, skin glow)');
        return;
    }

    try {
        // Fetch data from backend
        const response = await fetch(${API_URL}?q=${query});
        const result = await response.json();
        console.log("Search results:", result);

        const container = document.getElementById('resultsContainer');
        container.innerHTML = ""; // clear previous results

        if (result.results.length === 0) {
            container.innerHTML = "<p>No remedy found. Try another keyword.</p>";
        } else {
            const r = result.results[0];
            container.innerHTML = `
                <div class="result-box">
                    <h3>${r.title}</h3>
                    <p><b>Category:</b> ${r.category}</p>
                    <p>${r.description}</p>
                </div>
            `;
        }

    } catch (error) {
        console.error('Error:', error);
        alert("Server error (backend sleeping). Try again.");
    }
}
