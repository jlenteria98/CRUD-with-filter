if (process.env.NODE_ENV === 'production') {
  module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
  };
} else {
  module.exports = {
    MONGODB_URI: 'MONGODB_URI=mongodb://localhost/game-crud',
  };
}
