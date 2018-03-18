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
        'Cats',
        'Dogs',
        'PICKLE RICK!!',
        'TINY RICK!!'
      ];
      var buttons = [
          `<button class="btn btn-secondary" id="gamer"><p>${topics[0]}</p></button>`,
          `<button class="btn btn-secondary" id="lotr"><p>${topics[1]}</p></button>`,
          `<button class="btn btn-secondary" id="acreed"><p>${topics[2]}</p></button>`,
          `<button class="btn btn-secondary" id="kitty"><p>${topics[3]}</p></button>`,
          `<button class="btn btn-secondary" id="pupper"><p>${topics[4]}</p></button>`,
          `<button class="btn btn-secondary" id="pickle"><p>${topics[5]}</p></button>`,
          `<button class="btn btn-secondary" id="tiny"><p>${topics[6]}</p></button>`
      ];

      for (var i = 0; i < buttons.length; i++) {
        $('#buttons').append(buttons[i]);
      };

      $('#gamer').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/search?api-key=${giphyKey}&q=video+games&limit=10`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          var imageURL = response.data.image_original_url;
          console.log('Success ' + response.data);
          for (let i = 0; i < response.data.length; i++) {
            var gameImage = $('<img>');

            gameImage.attr('src', imageURL);
            gameImage.attr('alt', 'game image');

            $('$images').prepend(gameImage);
          }
        });
      });

      $('#lotr').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/search?api-key=${giphyKey}&q=lord+of+the+rings&limit=10`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          var imageURL = response.data.image_original_url;

          for (let i = 0; i < response.data.length; i++) {
            var lotrImage = $('<img>');

            lotrImage.attr('src', imageURL);
            lotrImage.attr('alt', 'lotr image');

            $('$images').prepend(lotrImage);
          }
        });
      });

      $('#acreed').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/search?api-key=${giphyKey}&q=lord+of+the+rings&limit=10`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          var imageURL = response.data.image_original_url;
          
          for (let i = 0; i < response.data.length; i++) {
            var aCreedImage = $('<img>');

            aCreedImage.attr('src', imageURL);
            aCreedImage.attr('alt', ' image');

            $('$images').prepend(aCreedImage);
          }
        });
      });

      $('#kitty').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/search?api-key=${giphyKey}&q=cats&limit=10`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          var imageURL = response.data.image_original_url;
          
          for (let i = 0; i < response.data.length; i++) {
            var catImage = $('<img>');

            catImage.attr('src', imageURL);
            catImage.attr('alt', 'cat image');

            $('$images').prepend(catImage);
          }
        });
      });

      $('#pupper').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/search?api-key=${giphyKey}&q=lord+of+the+rings&limit=10`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          var imageURL = response.data.image_original_url;
          
          for (let i = 0; i < response.data.length; i++) {
            var pupperImage = $('<img>');

            pupperImage.attr('src', imageURL);
            pupperImage.attr('alt', 'pupper image');

            $('$images').prepend(pupperImage);
          }
        });
      });

      $('#pickle').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/search?api-key=${giphyKey}&q=lord+of+the+rings&limit=10`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          var imageURL = response.data.image_original_url;
          
          for (let i = 0; i < response.data.length; i++) {
            var pickleImage = $('<img>');

            pickleImage.attr('src', imageURL);
            pickleImage.attr('alt', 'pickle image');

            $('$images').prepend(pickleImage);
          }
        });
      });

      $('#tiny').on('click', () => {
        var queryURL = `https://api.giphy.com/v1/gifs/search?api-key=${giphyKey}&q=lord+of+the+rings&limit=10`;

        $.ajax({
          url: queryURL,
          dataType: 'jsonp',
          method: "GET"
        })
        .then(response => {
          var imageURL = response.data.image_original_url;
          
          for (let i = 0; i < response.data.length; i++) {
            var tinyImage = $('<img>');

            tinyImage.attr('src', imageURL);
            tinyImage.attr('alt', 'tiny image');

            $('$images').prepend(tinyImage);
          }
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