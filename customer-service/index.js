const express = require('express');
const app = express();

app.get('/customers', (req, res) => {
  res.json([{ id: 1, name: "Vijayaraj" }]);
});

app.listen(3001, () => console.log("Customer Service running on 3001"));
