document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop default redirect

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                form.reset(); // Clear form
                let successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show(); // Show popup
            } else {
                alert("❌ There was a problem sending your message.");
            }
        }).catch(error => alert("❌ Network error. Please try again."));
    });
});
