const display = document.getElementById("display");

// Play sound helper
function playSound(key) {
  const audio = document.getElementById(key);
  const pad = audio.parentElement;

  audio.currentTime = 0;
  audio.play();

  display.innerText = pad.id;
}

// Click event
document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector(".clip");
    playSound(audio.id);
  });
});

// Keyboard event
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    playSound(key);
  }
});