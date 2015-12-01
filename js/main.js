$(function() {

  /// GLOBAL VARS BEGIN /// 
  var imagePath = "./assets/optimized/";
  var simImages = ["barbie.png", "batman.png", "cowboy.png", "news.png", "pizza.png", "tekpix.png"];
  var positionText = [[395, 55], [130, 338], [125, 62], [135, 365], [370, 355], [368, 70]];
  var jokes = ["Faz cosplay de android que eu vou fazer cosplay de ios",
               "Vou jogar um dado assistindo porn",
               "Se eu tenho um dinossaurinho de plástico, na verdade é um dinossauro morto",
               "Tá matando a mulher... matando de amor"
              ];
  var imageInUse;
  var jokeInUse;
  /// GLOBAL VARS END ///

  $(document)
    .on("ready", function() {
      console.log("Leonardo Simulator 2000"); 
      refreshImage();

      $("#tvButton").click(function() {
        var tvButton = $(this);
        refreshImage();
        rotateButton(tvButton);
      });

    });

  function refreshImage() {
    var currentSim = $(".currentSim");
    var newImageId = Math.floor(Math.random() * 5);
    var newImage = simImages[newImageId];
    var newTextPosTop = positionText[newImageId][0];
    var newTextPosLeft = positionText[newImageId][1];
    var simText = $("#simText");

    if(imageInUse != newImage) {
      currentSim.css("background", "url(" + imagePath + newImage + ") no-repeat");
      imageInUse = newImage;

      simText.css({"top" : newTextPosTop, "left" : newTextPosLeft});

      var newJoke = refreshJoke();

      simText.text(newJoke);
    } else {
      refreshImage();
    }
  }

  function rotateButton(button) {
    var tvButton = button;
    var currentDeg = tvButton.attr("rotation");
    var newDeg = parseInt(currentDeg) + 30;
    tvButton.attr("rotation", newDeg);
    tvButton.css("transform", "rotate(" + newDeg + "deg)");
  }

  function refreshJoke() {
    var maxJokeRange = jokes.length;
    var newJokeId = Math.floor(Math.random() * maxJokeRange);
    var newJoke = jokes[newJokeId];

    if(jokeInUse != newJoke) {
      jokeInUse = newJoke;
      return newJoke;
    } else {
      refreshJoke();
    }
  }



});