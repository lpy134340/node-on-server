const dao = require("../db/tweets/tweet-dao")

module.exports = (app) => {

    const findAllTweets = (req, res) =>
      dao.findAllTweets()
        .then(tweets => res.json(tweets));

    const createTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "../../../images/react-blue.png",
            "logo-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        dao.createTweet(newTweet)
        .then((newTweet) => res.json(newTweet));
    }

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
        .then((status) => res.send(status));
    }

    const likeTweet = (req, res) => {
        const id = req.params.id;
        const tweet = dao.findTweetById(id)
            .then((tweet) => {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                dao.updateTweet(id, tweet)
                    .then(status => res.send(status));
        });
    }

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
};