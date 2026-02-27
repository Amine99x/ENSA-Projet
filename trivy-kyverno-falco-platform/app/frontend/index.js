const express = require('express');
const app = express();
app.get('/verify', (req, res) => res.json({ status: "✅ ACCÈS AUTORISÉ" }));
app.listen(3005, () => console.log('Auth on 3005'));