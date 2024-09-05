let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');

const beginJourneyLink = document.querySelectorAll('begin-journey');

beginJourneyLink.addEventListener('click', (e)=> {
    let value = e.clientX;
    tree1.style.left = value * 1.5 + 'px';
    tree2.style.left = value * -1.5 + 'px';
});