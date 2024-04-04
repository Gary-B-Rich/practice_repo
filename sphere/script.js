// script.js for sphere
document.addEventListener("DOMContentLoaded", function() {
    const sphere = document.getElementById('sphere');

    // Initial position
    let posX = 50;
    let posY = 50;
    
    function updatePosition() {
        sphere.style.left = posX + '%';
        sphere.style.top = posY + '%';
    }
    
    document.addEventListener('keydown', function(event) {
        const step = 2; // Change this value to adjust the speed of movement
        
        switch(event.key) {
            case 'ArrowUp':
                posY -= step;
                if (posY < 0) posY = 0;
                break;
            case 'ArrowDown':
                posY += step;
                if (posY > 100) posY = 100;
                break;
            case 'ArrowLeft':
                posX -= step;
                if (posX < 0) posX = 0;
                break;
            case 'ArrowRight':
                posX += step;
                if (posX > 100) posX = 100;
                break;
            default:
                return; // Exit if the arrow keys aren't pressed
        }
        updatePosition();
    });
});