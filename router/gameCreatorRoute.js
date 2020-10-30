const express = require('express');
const { update } = require('../model/GameCreator');
const router = express.Router();
const GameCreator = require('../model/GameCreator');

const inputValidation = require('../validation/InputValid');

router.post('/add-game-creator', (req, res) => {
  const { firstname, lastname } = req.body;
  const { errors, isValid } = inputValidation(req.body);

  if (!isValid) {
    return res.status(400).send(errors);
  }
  GameCreator.findOne({ firstname, lastname }).then(datas => {
    if (datas) {
      errors.firstname = 'No duplicate';
      errors.lastname = 'No duplicate';
      return res.status(400).send(errors);
    }

    //add game creator
    const newGameCreator = new GameCreator({
      firstname,
      lastname,
    });

    newGameCreator
      .save()
      .then(data => {
        res.status(201).send(data);
      })
      .catch(() => {
        res.status(400).send("There's something!");
      });
  });
});

router.get('/get-game-creator', (req, res) => {
  GameCreator.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('NO DATA'));
});

router.put('/game-creator/:id', (req, res) => {
  const { firstname, lastname } = req.body;
  const updates = Object.keys(req.body);
  const { errors, isValid } = inputValidation(req.body);

  if (!isValid) {
    return res.status(400).send(errors);
  }
  GameCreator.findById(req.params.id).then(data => {
    if (!data) {
      return res.status(404).send('NO DATA');
    }
    GameCreator.findOne({ firstname, lastname }).then(datas => {
      if (datas) {
        errors.firstname = 'No duplicate';
        errors.lastname = 'No duplicate';
        return res.status(400).send(errors);
      }

      //updates
      updates.forEach(update => (data[update] = req.body[update]));
      data.save();
      res.status(200).send(data);
    });
  });
});

router.delete('/game-creator/:id', (req, res) => {
  GameCreator.findById(req.params.id).then(data => {
    if (!data) {
      return res.status(404).send('NO DATA');
    }

    //delete
    data.remove().then(() => res.status(200).send(data));
  });
});

module.exports = router;
