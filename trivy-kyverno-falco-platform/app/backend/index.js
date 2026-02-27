const express = require('express');
const axios = require('axios');
const app = express();
app.get('/data', async (req, res) => {
  const auth = await axios.get('http://auth-service.devsecops.svc.cluster.local:3001/verify');
  res.json({ secret: "Trésor sécurisé !", auth: auth.data.status });
});
app.listen(3002, '0.0.0.0');