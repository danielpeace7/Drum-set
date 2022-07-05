// Mouse Click

var numberOfClicks = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfClicks; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick);

  function buttonClick() {

    var buttonSelector = this.innerHTML;
    sound(buttonSelector);
    buttonAnimation(buttonSelector)
    
  }  
}

// Keyboard Press

document.addEventListener("keypress", function(event) {
  sound(event.key);
  buttonAnimation(event.key)
})


// Sound
function sound(key) {

  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
  
    default:
      break;
  }
}

function buttonAnimation(currentKey) {

  var animatedClick = document.querySelector("." + currentKey)

  animatedClick.classList.add("pressed");

  setTimeout(function() {
    animatedClick.classList.remove("pressed");
  }, 100);
}