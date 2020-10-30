const mongoose = require('mongoose');
const mongodbURI = require('../config/keys').MONGODB_URI;

mongoose.connect(
  mongodbURI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log('Connected to database!');
  }
);
