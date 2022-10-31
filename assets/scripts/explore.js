// explore.js

window.addEventListener('DOMContentLoaded', init);
const speechSynthesis = window.speechSynthesis;

function init() {
  // TODO
  voice_load();
  speak_and_smileSwap();
}

function voice_load(){
  speechSynthesis.addEventListener('voiceschanged', () => {
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  });
}

function speak_and_smileSwap(){
  document.querySelector('button').addEventListener('click', () => {
    const utterPhrase = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
    const selectedOption = document.querySelector('select').selectedOptions[0].getAttribute('data-name')
    const voices = speechSynthesis.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name == selectedOption) {
        utterPhrase.voice = voices[i];
    }
    }
    speechSynthesis.speak(utterPhrase);
    document.querySelector('img').src = "assets/images/smiling-open.png";
    utterPhrase.addEventListener('end', () => {
      document.querySelector('img').src = "assets/images/smiling.png";
    })
  });
}

