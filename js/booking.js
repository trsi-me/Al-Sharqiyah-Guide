const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('booking-name').value.trim();
        if (!name) {
            alert('يرجى إدخال الاسم الكامل');
            return;
        }
        alert('تم استلام طلب حجزك بنجاح، سيتم التواصل معك قريباً.');
        bookingForm.reset();
    });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً على تواصلك، سيتم الرد عليك قريباً.');
        contactForm.reset();
    });
}
