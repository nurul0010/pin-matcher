function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinText = pin + '';

    if (pinText.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }

}

function showPinDisplay() {

    // generatePin() = pinDisplay;
    const pinValue = generatePin();
    // console.log(pinValue);
    document.getElementById('pin-display').value = pinValue;

}

document.getElementById('pin-gen-btn').addEventListener('click', function () {
    showPinDisplay();
})

document.getElementById('cal-body').addEventListener('click', function (event) {
    const number = (event.target.innerText);
    if (isNaN(number)) {
        const display = document.getElementById('display');
        display.value = '';
    }
    else {
        const display = document.getElementById('display');
        const previousCalc = display.value;
        const newCalc = previousCalc + number;
        display.value = newCalc;
    }
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const pindisplay = document.getElementById('pin-display').value;
    const numberdisplay = document.getElementById('display').value;

    if (pindisplay == numberdisplay) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('warning').style.display = 'none';

    }
    else {
        document.getElementById('warning').style.display = 'block';
        document.getElementById('success').style.display = 'none';

    }
})