require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// TODO
app.post('/api/shorturl', (req, res) => {
  const url = JSON.parse(req.body.url);
  console.log(url);
  
});


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
