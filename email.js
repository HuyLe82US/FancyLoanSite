document.addEventListener('DOMContentLoaded', function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("crY4O1uGK-xKBzcSd"); // Replace with your Public Key
        console.log("EmailJS initialized successfully");
    } else {
        console.error("EmailJS is not defined. Check the library inclusion.");
    }
});
