// ==========================================================================
// CONTACT FORM SUBMISSION & FEEDBACK (WEB3FORMS)
// ==========================================================================

export function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm || !formMessage) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Transmitting Request...</span>';
        }

        try {
            const formData = new FormData(contactForm);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                showFormMessage('Thank you! Your inquiry has been received. Our team will contact you within 24 hours.', 'success');
                contactForm.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error) {
            showFormMessage('Unable to send at this moment. Please reach out to us directly via WhatsApp or email.', 'error');
            console.error('Form submission error:', error);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }
        }
    });

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 7000);
    }
}
