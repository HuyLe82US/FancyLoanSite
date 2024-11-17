// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('crY4O1uGK-xKBzcSd'); // Replace 'YOUR_USER_ID' with your EmailJS User ID
});

document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Hide previous success/failure messages
    const mailSuccess = document.getElementById('mail_success');
    const mailFail = document.getElementById('mail_fail');
    mailSuccess.style.display = 'none';
    mailFail.style.display = 'none';

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs
        .send('service_ypq7klo', 'template_mk5yp8c', formData)
        .then(function (response) {
            console.log('Email sent successfully:', response.status, response.text);
            mailSuccess.style.display = 'block'; // Show success message
        })
        .catch(function (error) {
            console.error('Failed to send email:', error);
            mailFail.style.display = 'block'; // Show error message
        });
});
