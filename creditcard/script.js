function qs(selector) {
    return document.querySelector(selector);
}

function isCardNumberValid(number) {
    return number === "1234123412341234";
}

function displayError(message) {
    const errorElement = qs(".errorMsg");
    errorElement.innerHTML = message.replace(/\n/g, "<br>");
}

function submitHandler(event) {
    event.preventDefault();

    let errors = "";
    displayError("");

    const cardNumberField = qs("#card-number");
    const cardNumber = cardNumberField.value.trim();

    if (isNaN(cardNumber)) {
        errors += "Card number must be a number.\n";
    }
    if (!isCardNumberValid(cardNumber)) {
        errors += "Invalid card number.\n";
    }
    if (errors !== "") {
        displayError(errors);
        return false;
    }
    event.target.submit();
}

const form = qs("form");
form.addEventListener("submit", submitHandler);
