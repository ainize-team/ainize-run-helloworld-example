const express = require('express');

const PORT = 80;
const app = express();

app.get('/', (req, res) => {
  res.json('Hello Wwwwwwwwwwwwwwwwwwworld');
});

app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});
