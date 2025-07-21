//A simple Hello Word RESTful endpoint
const express = require('express');
const app = express(); //make notes on this from deepseek on 2nd July
const PORT = 3000;

//Defining a simple GET endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
