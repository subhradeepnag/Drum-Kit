for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var inn = this.innerHTML;
    makeSound(inn);
    addAnimations(inn);
  });
}

document.addEventListener("keydown", function (event) {
  var btn = event.key;
  makeSound(btn);
  addAnimations(btn);
});

//This function called when button clicked or key pressed
function makeSound(btn) {

    //add audio depending on the button pressed
  if (btn == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (btn == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (btn == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (btn == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (btn == "j") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (btn == "k") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (btn == "l") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}

//This function called when button clicked or key pressed
function addAnimations(btn) {

//selecting the class of this button
  var activeButton = document.querySelector("." + btn);

  //add class to that button class -> pressed
  activeButton.classList.add("pressed");
//   console.log(activeButton);

//remove the pressed class after 0.1 sec
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
  //   activeButton.addClass("pressed");
}
