// Jeffrey Phelps - DU Web Dev Bootcamp 2017/2018 - Week-10 Homework (Node Liri Bot)

const Spotify = require('node-spotify-api');


exports.twitterKeys = {
    consumer_key: 'RuC3iJiXqyPRttQgnzrBUo01S',
    consumer_secret: 'YLY7JcVEJ4fT391CSqpIWJBvaa6O7uluPSAulIZUgRZJSVFFcc',
    access_token_key: '74389406-eOz68dLx1UCcGhR8SxZNVlCk6kYuVtAaAcaLVvB6s',
    access_token_secret: '4AiDJmX5secjGFjtIR7ZryQwkyTYCHmnAO9TJP1uEDQzg',
  }

  exports.spotify = new Spotify({
    id:'bf94c178a64a4055aeddbbd772e7c4c9',
    secret: '02cbe6ff4aff4b8fa854f06310fb02f9'
    });


// OMDB API Keys
// Key: b85b05e0
// API: http://www.omdbapi.com/?i=tt3896198&apikey=b85b05e0
