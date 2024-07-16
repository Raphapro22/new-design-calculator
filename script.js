function backspaceOrClear() {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = ' ';
    } else if (display.innerText === 'Error') {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1) || '0';
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
