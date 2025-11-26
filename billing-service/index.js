const express = require("express");
const app = express();

app.get("/bill", (req, res) => {
  res.json({ billId: 555, status: "PAID" });
});

app.listen(3003, () => console.log("Billing Service running on 3003"));
