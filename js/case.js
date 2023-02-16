
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if(isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateTotalPrice(newCaseNumber) {
    const caseTotal = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotal;
}

document.getElementById('btn-case-plus').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(true);

    updateTotalPrice(newCaseNumber);
    calculateSubtotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(false);

    updateTotalPrice(newCaseNumber);
    calculateSubtotal()
})