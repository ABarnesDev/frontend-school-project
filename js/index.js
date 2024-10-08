document.getElementById('contactForm').addEventListener('submit', checkEmail)
document.getElementById('confirmEmailInput').addEventListener('blur', checkEmail)

function checkEmail(event) {
    var confirmEmailInput = document.getElementById('confirmEmailInput')
    var eamilInput = document.getElementById('eamilInput')
    
    if (eamilInput.value == confirmEmailInput.value) {
        document.getElementById("warning").style.visibility = 'hidden';
    } else {
        document.getElementById("warning").style.visibility = 'visible';

        if (event.type == 'submit') {
            event.preventDefault()
        }
    }
}

function toggleNav() {
    let nav = document.getElementById("navLinks");

    nav.classList.toggle("open");
}