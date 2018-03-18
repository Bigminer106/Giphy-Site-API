$(document).ready(() => {

  var config = {
    apiKey: "AIzaSyB4FQHiIvzi6qJ-Hs-ba95LohBZe3Ao0cY",
    authDomain: "giphy-site-api.firebaseapp.com",
    databaseURL: "https://giphy-site-api.firebaseio.com",
    projectId: "giphy-site-api",
    storageBucket: "",
    messagingSenderId: "114048131214"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var giphyKey = '23WDFQu8WREmcjjea8uM2Js83W8G042M';
  var limit = 10;
  var queryString;

  var showGifs = () => {

    var getGifs = () => {
      var topics = [
        'Video Games',
        'Lord of the Rings',
        'Assassin\'s Creed',
        'Mass Effect',
        'Dogs',
        'Cats'
      ];
      var buttons = [
          `<button class="btn btn-secondary" id="gamer"><p>${topics[0]}</p></button>`,
          `<button class="btn btn-secondary" id="lotr"><p>${topics[1]}</p></button>`,
          `<button class="btn btn-secondary" id="acreed"><p>${topics[2]}</p></button>`,
          `<button class="btn btn-secondary" id="mass-effect"><p>${topics[3]}</p></button>`,
          `<button class="btn btn-secondary" id="pupper"><p>${topics[4]}</p></button>`,
          `<button class="btn btn-secondary" id="kitty"><p>${topics[5]}</p></button>`
      ];

      for (var i = 0; i < buttons.length; i++) {
        $('#buttons').append(buttons[i]);
      };

      $('#gamer').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=video+games`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          console.log('Success');

          var data = response.data;

          console.log(data);

          var imageURL = data.image_original_url;
          var gameImage = $('<img>');

          gameImage.attr('src', imageURL);
          gameImage.attr('alt', 'game image');

          $('#images').prepend(gameImage);
        });
      });

      $('#lotr').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=lord+of+the+rings`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          console.log('Success');
          var data = response.data;

          console.log(data);
        
          var imageURL = data.image_original_url;
          var lotrImage = $('<img>');

          lotrImage.attr('src', imageURL);
          lotrImage.attr('alt', 'lotr image');

          $('#images').prepend(lotrImage);
        });
      });

      $('#acreed').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=assassins+creed`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          console.log('Success');

          var data = response.data;

          console.log(data);
          
          var imageURL = data.image_original_url;
          var aCreedImage = $('<img>');

          aCreedImage.attr('src', imageURL);
          aCreedImage.attr('alt', ' image');

          $('#images').prepend(aCreedImage);
        });
      });

      $('#kitty').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=cats`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          console.log('Success');

          var data = response.data;

          console.log(data);
          
          var imageURL = data.image_original_url;
          var catImage = $('<img>');

          catImage.attr('src', imageURL);
          catImage.attr('alt', 'cat image');

          $('#images').prepend(catImage);
        });
      });

      $('#pupper').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=dogs`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          console.log('Success');

          var data = response.data;

          console.log(data);

          var imageURL = data.image_original_url;
          var pupperImage = $('<img>');

          pupperImage.attr('src', imageURL);
          pupperImage.attr('alt', 'pupper image');

          $('#images').prepend(pupperImage);
        });
      });

      $('#mass-effect').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=mass+effect`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          console.log('Success');

          var data = response.data;

          console.log(data);

          var imageURL = data.image_original_url;
          var massEffectImage = $('<img>');

          massEffectImage.attr('src', imageURL);
          massEffectImage.attr('alt', 'mass-effect image');

          $('#images').prepend(massEffectImage);
        });
      });
    }

    getGifs();
  }

  $('#reset').on('click', () => {
    console.log('Reset Clicked');
    $('#images').empty();
  });

  showGifs();
})