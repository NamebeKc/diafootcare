'use strict';
const config = window.diaFootCare;
const link = (id, value) => {
  if (!value) return false;
  let url;
  try { url = new URL(value); } catch { return false; }
  if (url.protocol !== 'https:' || url.username || url.password) return false;
  const anchor = document.getElementById(id);
  anchor.href = url.href;
  anchor.hidden = false;
  return true;
};

const enquiry = document.getElementById('enquiry');
const bookingStatus = document.getElementById('booking-status');
if (link('live-booking', config.bookingUrl)) {
  document.getElementById('book-copy').textContent = 'Use our online scheduler to choose a visit. You can also send the team an enquiry below.';
}
const stripe = link('stripe', config.stripeUrl);
const paystack = link('paystack', config.paystackUrl);
if (stripe || paystack) {
  document.getElementById('payment-copy').textContent = 'Use the checkout link for the currency on your booking confirmation.';
}
if (/^[1-9][0-9]{7,14}$/.test(config.whatsappNumber)) {
  const message = encodeURIComponent('Hello DiaFootCare, I’d like to speak with a consultant.');
  link('whatsapp', 'https://wa.me/' + config.whatsappNumber + '?text=' + message);
}

enquiry.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact-detail').value.trim();
  if (!name || !contact) {
    bookingStatus.textContent = 'Enter your name and an email address or phone number.';
    return;
  }
  const body = encodeURIComponent('Hello DiaFootCare,\n\nI would like to enquire about an appointment.\n\nName: ' + name + '\nPreferred contact: ' + contact);
  window.location.href = 'mailto:info@diafootcare.com?subject=Appointment%20enquiry&body=' + body;
  bookingStatus.textContent = 'Send the draft from your email app. If it doesn’t open, email info@diafootcare.com directly.';
});
