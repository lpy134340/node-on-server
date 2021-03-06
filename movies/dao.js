const model = require('./model');
const findMovieById = (id) =>
  model.findById(id);

const findAllMovies = () => model.find();

const deleteMovie = (id) =>
  model.removeOne({_id: id});

const createMovie = (movie) =>
  model.create(movie);

const updateMovie = (id, movie) =>
  model.updateOne({_id: id},
    {$set: movie});

module.exports = {
  findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie
};
