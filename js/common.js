function getElementValueById(elementId) {
    const getElementValue = document.getElementById(elementId);
    const getElementString = getElementValue.innerText;
    const getElementNumber = parseInt(getElementString);
    return getElementNumber;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubtotal() {
    const photeTotal = getElementValueById('phone-total');
    const caseTotal = getElementValueById('case-total');
    const subTotal = photeTotal + caseTotal;

    setTextElementValueById('sub-total', subTotal);

    // set tax amount
    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount)

    // set final amount
    const finalAmount = subTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}