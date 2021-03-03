

function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {                              // recursive way 
        return pin;
    }
    else {
        return getPin();
    }
}
//display generated pin function::
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle calculator button event::
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;                           // console.log(event.target.innerText); inspect giye dekhbow. 
    if (isNaN(digit)) {                                           // C and B doita digit na tai condition a kora hoyese.
        //handle backspace
        // handle clear 
        if (digit === 'Clr') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
        if (digit === 'Dlt') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = typedInput.value.slice(0, -1) ;            //remove last number in input value 
            
        }
    }
    else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin:::

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        // const correctPin = document.getElementById("correct-pin");
        // correctPin.style.display = 'block';
        // const inCorrectPin = document.getElementById("incorrect-pin");
        // inCorrectPin.style.display = 'none';
        displayMatchResult('block', 'none');
    }
    else {
        // const correctPin = document.getElementById("correct-pin");
        // correctPin.style.display = 'none';
        // const inCorrectPin = document.getElementById("incorrect-pin");
        // inCorrectPin.style.display = 'block';
        displayMatchResult('none', 'block');
    }
}

function displayMatchResult(status, incorrect) {
    const correctPin = document.getElementById("correct-pin");
    correctPin.style.display = status;
    const inCorrectPin = document.getElementById("incorrect-pin");
    inCorrectPin.style.display = incorrect;
}

// //remove last number in input value 
// const removeBtn = document.getElementById("remove-btn");
// removeBtn.addEventListener("click", function ()  {
//     let submitNumber = document.getElementById("typed-pin").value;
//     submitNumber = submitNumber.toString();
//     const getSubmitValue = submitNumber.substring(0, submitNumber.length - 1);
//     document.getElementById("typed-pin").value = getSubmitValue;
// }
// )

