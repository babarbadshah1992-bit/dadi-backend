
const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
app.use(cors());
app.use(express.json());

// Simple search endpoint
app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').trim().toLowerCase();
  if (!q) {
    return res.json({ results: [] });
  }

  // simple fuzzy matching on title and description
  const results = data.filter(item => {
    const hay = (item.title + ' ' + item.description + ' ' + item.category).toLowerCase();
    return hay.includes(q);
  });

  // optionally sort by relevance (length of match etc.)
  res.json({ results });
});

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server running on port', PORT));
