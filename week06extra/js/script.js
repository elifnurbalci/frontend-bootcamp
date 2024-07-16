document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => playSound(button));
});

document.addEventListener('keydown', event => {
    const key = event.key.toUpperCase();
    const button = document.querySelector(`.drum[data-key="${key}"]`);
    if (button) playSound(button);
});

function playSound(button) {
    const sound = new Audio(button.getAttribute('data-sound'));
    sound.play();
    button.classList.add('playing');
    setTimeout(() => button.classList.remove('playing'), 200);
}
