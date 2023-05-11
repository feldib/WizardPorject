document.addEventListener('DOMContentLoaded', 
() => {
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', () => {
        storage.setItem('splashShown', 'true');
        window.location.href = './phase1.html';
    });
});