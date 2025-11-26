const express = require('express');
const app = express();
app.get('/orders', (req, res) => {
  res.json([{ orderId: 101, amount: 500 }]);
});
app.listen(3002, () => console.log("Order Service running on 3002"));
