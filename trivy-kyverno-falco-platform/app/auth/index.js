const express = require('express');
const app = express();
app.get('/verify', (req, res) => res.json({ status: "✅ ACCÈS AUTORISÉ" }));
app.listen(3001, '0.0.0.0');