let left_trees = document.getElementById('left_trees');
let right_trees = document.getElementById('right_trees');

const beginJourneyLink = document.querySelector('.begin-journey');

beginJourneyLink.addEventListener('click', (e)=> {
    e.preventDefault();

    document.body.classList.add('fade-out');
    let value = e.clientX;

    left_trees.style.transform = `translateX(${value * -1.9}px)`; // Adjust to smaller value for visible effect
    right_trees.style.transform = `translateX(${value * 1.3}px)`; 

    mountain.style.transform = 'scale(10)'

    setTimeout(()=> {
        window.location.href = "home.html";
    }, 1000);
});