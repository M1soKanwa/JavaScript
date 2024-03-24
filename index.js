function getAlert (event) {
    const btn = event.target;

    if (btn.style.backgroundColor === 'green'){
        btn.style.backgroundColor = 'unset';
    } else {
        btn.style.backgroundColor = 'green';
    }
}

const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click',getAlert);






const none = document.getElementById('no-btn');

none.addEventListener('mousemove',display);

function display(event) {
    const none = event.target;
    
    none.style.display = 'none';
}


