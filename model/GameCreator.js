const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  firstname: {
    type: String,
    min: 2,
    required: true,
  },
  lastname: {
    type: String,
    min: 2,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = GameCreator = mongoose.model('game', gameSchema);
