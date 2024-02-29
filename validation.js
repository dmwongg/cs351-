// validation.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('accountForm');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var login = document.getElementById('login').value;
        var password = document.getElementById('password').value;
        var email = document.getElementById('email').value;

        if (login === '' || password === '' || email === '') {
            alert('Please fill out all required fields.');
            return false;
        }

        // Additional validation 
        if (password.length < 4) {
            alert('Password must be at least 4 characters long.');
            return false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Add more checks as needed

        return true; // Form is valid
    }
});

		
		// more checks later
