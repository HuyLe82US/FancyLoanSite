$(document).ready(function () {
    $('#send_message').click(function (e) {
        e.preventDefault(); // Stop default form submission

        // Hide all error messages
        $('.error').fadeOut(500);

        // Variable declaration
        let error = false;
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        // Validation
        if (name.length === 0) {
            error = true;
            $('#name_error').fadeIn(500);
        }
        if (email.length === 0 || email.indexOf('@') === -1) {
            error = true;
            $('#email_error').fadeIn(500);
        }
        if (message.length === 0) {
            error = true;
            $('#message_error').fadeIn(500);
        }

        // If no error, proceed to send email
        if (!error) {
            // Disable the submit button
            $('#send_message').attr({ disabled: true, value: 'Sending...' });

            // Collect form data
            const formData = {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
            };

            // Send email using EmailJS
            emailjs
                .send("service_ypq7klo", "template_mk5yp8c", formData)
                .then(function (response) {
                    console.log('Email sent successfully:', response.status, response.text);
                    $('#mail_success').fadeIn(500);
                    $('#send_message').attr({ disabled: false, value: 'Submit Form' });
                })
                .catch(function (error) {
                    console.error('Failed to send email:', error);
                    $('#mail_fail').fadeIn(500);
                    $('#send_message').attr({ disabled: false, value: 'Submit Form' });
                });
        }
    });
});
