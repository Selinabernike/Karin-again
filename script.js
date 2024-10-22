// Membuat objek Audio dengan link suara
const sound = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');

document.getElementById('animateButton').addEventListener('click', function() {
    // Memainkan efek suara
    sound.play();

    const animationArea = document.getElementById('animationArea');
    animationArea.style.display = 'block';
    animationArea.innerHTML = '<img src="https://media.giphy.com/media/3o72FqvErYq4b3G1E0/giphy.gif" alt="Funny Animation" />';
});
