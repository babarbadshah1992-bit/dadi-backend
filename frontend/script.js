console.log("Dadi Ki Dawai Loaded Successfully!");

// 🔗 Backend API URL
const API_URL = "https://dadikidawai-backend.onrender.com/api/search";

// 🔍 Search Function
async function searchRemedy() {
    const query = document.getElementById("searchInput").value.trim();

    if (!query) {
        alert("Please type something (e.g. hair fall, cold, skin glow)");
        return;
    }

    try {
        const response = await fetch(${API_URL}?q=${query});
        const result = await response.json();

        console.log("Search Results:", result);

        if (result.results.length === 0) {
            alert("No remedy found! Try another keyword.");
        } else {
            displayResults(result.results);
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Server error (backend is sleeping). Try again.");
    }
}

// 🟩 Display Results Function
function displayResults(results) {
    const container = document.getElementById("resultsContainer");
    container.innerHTML = ""; // Clear old results

    results.forEach(item => {
        const card = `
            <div style="border:1px solid #ccc; padding:15px; margin:10px 0; 
                        background:#fff; border-radius:10px;">
                <h3>${item.title}</h3>
                <p><b>Category:</b> ${item.category}</p>
                <p>${item.description}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}
