let movies = [
    {_id: '123', title: 'Aliens', stars: 4.5},
    {_id: '234', title: 'Terminator', stars: 4.8},
    {_id: '345', title: 'Avatar', stars: 4.7}
];

module.exports = (app) => {
    const getAllMovies = (req, res) => res.json(movies);
    const deleteMovie = (req, res) => {
        const id = req.params['mid'];
        movies = movies.filter(m => m._id !== id);
        res.json(movies);
    };
    const createMovie = (req, res) => {
        const movie = req.body;
        movies = [...movies, movie];
        res.json(movies);
    }
    const updateMovie = (req, res) => {
        const newMovie = req.body;
        const movieId = req.params['mid'];
        movies = movies.map(movie =>
            movie._id === movieId ? newMovie : movie);
        res.json(movies);
    }
    const saveMovie = (req, res) => {
        const newMovie = req.body;
        const movieId = req.params['mid'];
        movies = movies.map(movie =>
            movie._id === movieId ? newMovie : movie);
        res.json(movies);
    }
app.put('/api/movies/:mid', updateMovie);
    app.post('/api/movies', createMovie);
    app.delete('/api/movies/:mid', deleteMovie);
    app.get('/api/movies', getAllMovies);
    app.put('/api/movies/:mid', saveMovie);
};