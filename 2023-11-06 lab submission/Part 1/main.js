function checkEmailValidity(inputEmail) {
    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexForEmail.test(inputEmail);
}

// Test cases for email validation
["example@example.com", "test@test.co", "invalid-email.com", "user@@domain.com"].forEach(email => {
    if (checkEmailValidity(email)) {
        console.log(`Email ${email} is correct.`);
    } else {
        console.log(`Email ${email} is incorrect.`);
    }
});

function checkPhoneNumberValidity(inputPhoneNumber) {
    const regexForPhone = /^\d{10}$/;
    return regexForPhone.test(inputPhoneNumber);
}

// Test cases for phone number validation
["1234567890", "0987654321", "123-456-7890", "(123) 456-7890"].forEach(phone => {
    if (checkPhoneNumberValidity(phone)) {
        console.log(`Phone number ${phone} is correct.`);
    } else {
        console.log(`Phone number ${phone} is incorrect.`);
    }
});

function checkDomainValidity(inputDomain) {
    const regexForDomain = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2,})$/;
    return regexForDomain.test(inputDomain);
}

// Test cases for domain validation
["example.com", "sub.example.co", "example", "example..com"].forEach(domain => {
    if (checkDomainValidity(domain)) {
        console.log(`Domain ${domain} is correct.`);
    } else {
        console.log(`Domain ${domain} is incorrect.`);
    }
});
