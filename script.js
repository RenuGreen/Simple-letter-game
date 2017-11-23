var speed = 1000;
var currScore = 0;
var maxPossScore = 0;
var interval;

$(function() {
  alert("hello");
  bindKeyPress();
  startGame();
});

function bindKeyPress()
{
  $(document).on("keyup", function(event) {
    var keyPressed = event.which;
    console.log(keyPressed);
    if (keyPressed > 64 && keyPressed < 91) {
      if ($("#"+keyPressed).attr("purpose") == "curr")
      {
        $("#"+keyPressed).stop(true).css({marginTop: '5px', opacity:0}).removeAttr("purpose");
        currScore = currScore + 1;
        $("#score").text(currScore);
        maxPossScore = maxPossScore + 1;
        console.log(maxPossScore+" max")
        if(currScore%3 === 0)
        {
          clearInterval(interval);
          speed = speed*.9;
          interval = setInterval(temp, speed);
          console.log(speed+" speed");
        }
        console.log(currScore + " curr");
      } 
    }
  });
}


function startGame() 
{
  interval = setInterval(temp, speed);
}  

function temp()
{
  animateLetter();
  if(maxPossScore-currScore >= 5)
  {
    clearInterval(interval);
    $("#status").text("over");
    $("#lettersCont li").stop().css({marginTop: '5px', opacity:0}).removeAttr("purpose");
    $("#lettersCont").hide();
  }
}

function animateLetter()
{
  var letter = Math.floor(Math.random() * 26) + 65;
  $("#" + letter).animate({ marginTop: '200px', opacity:1}, 
    { duration: 2000, complete: function(){
      maxPossScore = maxPossScore + 1;
      $("#" + letter).css({marginTop: '5px', opacity:0}).removeAttr("purpose");
      console.log(maxPossScore+" maximum")
    }}).attr("purpose", "curr");
  console.log("random = " + letter);
}



