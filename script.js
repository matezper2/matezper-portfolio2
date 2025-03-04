const customCursor = document.querySelector('.custom-cursor');

let mouseX = 0;
let mouseY = 0;


document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY; 
    updateCursorPosition();
});


document.addEventListener('scroll', () => {
    updateCursorPosition();
});


function updateCursorPosition() {

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    customCursor.style.left = `${mouseX + scrollX}px`;
    customCursor.style.top = `${mouseY + scrollY}px`;


    requestAnimationFrame(updateCursorPosition);
}


updateCursorPosition();
