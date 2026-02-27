const express = require('express');
const app = express();
app.get('/verify', (req, res) => res.json({ status: "✅ ACCÈS AUTORISÉ" }));
app.get('/health', (req, res) => res.status(200).send('ok'));
app.listen(3001);