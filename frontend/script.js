console.log("Dadi Ki Dawai Loaded Successfully");

function searchRemedy() {
    const query = document.getElementById("searchInput").value.trim();
    if (query === "") {
        alert("Please type something (e.g., hair fall, cold, skin glow)");
        return;
    }
    
    // Temporary – later full AI backend se connect karenge
    alert("Searching remedies for: " + query);
}
