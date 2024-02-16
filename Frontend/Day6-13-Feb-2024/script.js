// Code for the button click event and changing the background color of the button

const myButton = document.getElementById('btn');
myButton.addEventListener('click', function() {
    myButton.style.backgroundColor = 'yellow';
});

// mouseover event
myButton.addEventListener('mouseover', function() {
    myButton.style.backgroundColor = 'red';
});
// mouseout event
myButton.addEventListener('mouseout', function() {
    myButton.style.backgroundColor = 'green';
});

//mouse down event
myButton.addEventListener('mousedown', function() {
    myButton.style.backgroundColor = 'blue';
});


//mouse up event
myButton.addEventListener('mouseup', function() {
    myButton.style.backgroundColor = 'yellow';
});


