$(function() {

  /// GLOBAL VARS BEGIN ///
  var simImages = ["barbie.png", "batman.png", "cowboy.png", "news.png", "pizza.png", "tekpix.png", "television.png"];
  var imagePath = "./assets/";
  var imageInUse;
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
    var newImageId = Math.floor(Math.random() * 6);
    var newImage = simImages[newImageId];

    if(imageInUse != newImage) {
      currentSim.css("background", "url(" + imagePath + newImage + ") no-repeat");
      imageInUse = newImage;
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

});