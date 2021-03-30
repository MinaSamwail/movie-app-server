const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: "Users" },
  movieId: String,
});

const MovieModel = mongoose.model("Movie", movieSchema);
module.exports = MovieModel;
