const express = require('express');
const app = express();
const PORT = process.env.PORT = 3000;

// Setting up the public directory
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log('Server is running at:',PORT);
  });