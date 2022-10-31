// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  select_a_horn();
  change_the_volume();
  play_sound();
}

function select_a_horn(){
  document.getElementById("horn-select").addEventListener("change", () => {
    document.querySelector("img").src = `assets/images/${document.getElementById("horn-select").value}.svg`;
    document.querySelector("audio").src = `assets/audio/${document.getElementById("horn-select").value}.mp3`;
  });
}

function change_the_volume(){ 
  document.getElementById("volume-controls").addEventListener("input", () => {
    var volume_value = document.getElementById("volume").value;
    document.querySelector("audio").volume = volume_value / 100;
    var volume_level;
    if (volume_value == 0) {
      volume_level = "volume-level-0";
    } else if (volume_value < 33) {
      volume_level = "volume-level-1";
    } else if (volume_value  < 67) {
      volume_level = "volume-level-2";
    } else if (volume_value >= 67){
      volume_level = "volume-level-3";
    }
    document.getElementById("volume-controls").querySelector("img").src = `assets/icons/${volume_level}.svg`;
  });
}

function play_sound(){ 
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("audio").play();
    if (document.getElementById("horn-select").value == "party-horn")
      jsConfetti.addConfetti();
  });  
}