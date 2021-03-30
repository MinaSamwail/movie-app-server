const express = require("express");
const User = require("../models/User");
const Movie = require("../models/Movie");
const router = express.Router();

router.post("/movie/:id", async (req, res, next) => {
  let id = req.params.id; //verifier le chemin
  try {
    const userId = req.session.currentUser; //verifier le chemin
    const allMoviesId = { UserId: userId, MovieId: id };
    res.status(201).json(
      Movie.create(allMoviesId).then((dataPost) => {
        return User.findByIdAndUpdate(UserId, {
          $push: { MovieId: dataPost._id },
        });
      })
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
