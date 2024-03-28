// Store the correct password
var correctPassword = prompt("enter your password"); // Replace with the correct password

// Ask user to enter their password
var userPassword = prompt('Please re-enter your password');

// Validate the passwords
if (userPassword === null || userPassword === '') {
    alert('Please enter your password');
} else if (userPassword === correctPassword) {
    alert('Correct! The password you entered matches the original password');
} else {
    alert('Incorrect password');
}
