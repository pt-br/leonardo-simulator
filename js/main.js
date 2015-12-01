$(function() {

  /// GLOBAL VARS BEGIN /// 
  var imagePath = "./assets/optimized/";
  var simImages = ["barbie.png", "batman.png", "cowboy.png", "news.png", "pizza.png", "tekpix.png"];
  var positionText = [[395, 55], [130, 338], [125, 62], [135, 365], [370, 355], [368, 70]];
  var jokes = ["Faz cosplay de android que eu vou fazer cosplay de ios",
               "Vou jogar um dado assistindo porn",
               "Se eu tenho um dinossaurinho de plástico, na verdade é um dinossauro morto",
               "Tá matando a mulher... matando de amor",
               "Sabia que eu sou garoto de programa?",
               "Eu não vou mais casar, agora tô só por namorinho",
               "Troquei meu pc pelo meu próprio notebook",
               "Alguém quer um freela aí?",
               "Boquete é o melhor",
               "Mas não cheguei a ser nem friend, quem dirá então na zone",
               "É ruim quando o cara senta no vaso e o pau bate na laje",
               "I'm too hot",
               "Quase na hora de comer o biscoitinho do William",
               "Alguém quer ver uma foto da cabeça da minha rola?",
               "Quero dar top e bottom"
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