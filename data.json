const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());
app.use(express.json());

// -----------------------------------------------
// 🔍 Improved Fuzzy Search
// -----------------------------------------------
function matches(item, q) {
  q = q.toLowerCase();

  // Combine everything for flexible matching
  const fullText =
    (item.title + " " +
     item.description + " " +
     (item.keywords || []).join(" ") +
     item.herbs.map(h => h.name + " " + (h.how_to_use || "")).join(" "))
      .toLowerCase();

  return fullText.includes(q);
}

// -----------------------------------------------
// 🔍 Main API: /api/search?q=your_query
// -----------------------------------------------
app.get("/api/search", (req, res) => {
  const q = (req.query.q || "").trim().toLowerCase();
  if (!q) return res.json({ results: [] });

  const results = data.filter(item => matches(item, q));

  res.json({ results });
});

// -----------------------------------------------
app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log("Backend running on port " + PORT)
);
