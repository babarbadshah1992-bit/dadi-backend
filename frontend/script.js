console.log("Dadi Ki Dawai loaded successfully!");

// 🔗 Apna backend URL yaha paste karo:
const API_URL = "https://dadikidawai-backend.onrender.com/api/search";

async function searchRemedy() {
    const query = document.getElementById("searchInput").value.trim();

    if (!query) {
        alert("Please type something (e.g. hair fall, cold, skin glow)");
        return;
    }

    try {
        // 🔥 Fetch data from backend
        const response = await fetch(${API_URL}?q=${query});
        const result = await response.json();

        console.log("Search results:", result);

        if (result.results.length === 0) {
            alert("No remedy found! Try another keyword.");
        } else {
            alert("Found: " + result.results[0].title);
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Server error! Backend might be sleeping. Try again.");
    }
}
