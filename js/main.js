$(function() {

  /// GLOBAL VARS BEGIN ///
  var simImages = ["barbie.png", "batman.png", "cowboy.png", "news.png", "pizza.png", "tekpix.png", "television.png"];
  var imagePath = "./assets/";
  /// GLOBAL VARS END ///

  $(document)
    .on("ready", function() {
      console.log("Leonardo Simulator 2000"); 
      refreshImage();
    });

  function refreshImage() {
    var currentSim = $(".currentSim");
    var newImageId = Math.floor(Math.random() * 6);
    var newImage = simImages[newImageId];
    console.log(newImage);
    currentSim.css("background", "url(" + imagePath + newImage + ") no-repeat");
  }

});