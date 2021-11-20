const todos = require('../data/todos.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(todos);
    }

    app.get('/api/todos', findAllTweets);
};