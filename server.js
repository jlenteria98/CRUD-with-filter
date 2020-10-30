const express = require('express');
const Game = require('./router/gameCreatorRoute');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

require('./db/mongoose');
require('dotenv').config({
  path: './config/config.env',
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api', Game);

app.listen(PORT, () => {
  console.log('Server running at port', PORT);
});
