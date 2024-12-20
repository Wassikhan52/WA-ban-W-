// Function to send the appeal via Gmail
function sendAppeal() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
        var message = 'i want to delete this number because i lost access to this number i didn't receive the code please delete it from Whatsapp and contact me (Gimilton)

Lost/Stolen: Please deactivate my account
Place the device on the iPhone ' + phoneNumber + '\n\nThank you for your attention to this matter.\nBest regards,';
        var subject = 'Request to ban My official WhatsApp Number';
        var recipient = 'smb@support.whatsapp.com'; // The recipient email address
        var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
        window.location.href = mailtoLink;
    } else {
        alert('Please enter a valid number.');
    }
}
