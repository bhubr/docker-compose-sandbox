const express = require('express');
const { port } = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Running on ${port}`);
});

