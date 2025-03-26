// Cronômetro
let seconds = 0;
const cronometro = document.getElementById('cronometro');

function updateCronometro() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    cronometro.textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

setInterval(updateCronometro, 1000);