const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volme-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let audio = new Audio("notes/a.wav");

const playNote = (key) => {
    audio.src = `notes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key = "${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playNote(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    playNote(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);
document.addEventListener("input", handleVolume);