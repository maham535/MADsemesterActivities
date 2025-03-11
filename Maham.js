const express = require('express');
const app = express();
const port = 3002;
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to the Express.js API.`);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
