document.addEventListener('DOMContentLoaded', function() {
    const contentBox = document.querySelector('.content');  // Scrollable container

    const lineOne = document.querySelector('.aboutThreeLineOne');
    const lineTwo = document.querySelector('.aboutThreeLineTwo');
    const lineThree = document.querySelector('.aboutThreeLineThree');

    let lastScrollTop = 0;
    let positionLineOne = 0;
    let positionLineTwo = -20;
    let positionLineThree = 10;

    // Scroll delay offsets (in pixels)
    const delayOffset = 1400;

    // Define the boundaries for scrolling (in pixels)
    const minPosition = -100;  
    const maxPosition = 100;   

    contentBox.addEventListener('scroll', function() {
        const scrollTop = contentBox.scrollTop;
        const scrollDown = scrollTop > lastScrollTop;

        const delayOne = delayOffset;
        const delayTwo = delayOffset;
        const delayThree = delayOffset;

        /* Boundary limits for scrolling text to ensure same position is returned to
        Activates after delay */
        if (scrollTop > delayOne) {
            if (scrollDown) {
                positionLineOne = Math.max(positionLineOne - 2, minPosition); 
            } else {
                positionLineOne = Math.min(positionLineOne + 2, maxPosition);  
            }
            lineOne.style.transform = `translateX(${positionLineOne}px)`;
        }

        if (scrollTop > delayTwo) {
            if (scrollDown) {
                positionLineTwo = Math.min(positionLineTwo + 2, maxPosition);
            } else {
                positionLineTwo = Math.max(positionLineTwo - 2, minPosition);
            }
            lineTwo.style.transform = `translateX(${positionLineTwo}px)`;
        }

        if (scrollTop > delayThree) {
            if (scrollDown) {
                positionLineThree = Math.max(positionLineThree - 2, minPosition);
            } else {
                positionLineThree = Math.min(positionLineThree + 2, maxPosition);
            }
            lineThree.style.transform = `translateX(${positionLineThree}px)`;

            if (positionLineThree === minPosition || positionLineThree === maxPosition) {
                contentBox.removeEventListener('scroll', handleScroll);
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
