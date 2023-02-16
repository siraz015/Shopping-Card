function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease) {
        newPhoneNumber = phoneNumber + 1;
    } else {
        newPhoneNumber = phoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber) {
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = newPhoneNumber * 1219;
}

document.getElementById('btn-phone-plus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhonePrice(newPhoneNumber);

    calculateSubtotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhonePrice(newPhoneNumber);
    calculateSubtotal();
})