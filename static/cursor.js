const circleCursor = document.getElementById('circleCursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Update mouse position on mousemove
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// Move the cursor with a smooth animation using requestAnimationFrame
function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;  // Adjust the speed (0.1 for smooth movement)
    cursorY += (mouseY - cursorY) * 0.1;

    circleCursor.style.left = cursorX + 'px';
    circleCursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor); // Recursively call the animation
}

// Start the cursor animation
requestAnimationFrame(animateCursor);