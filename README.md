# DiaFootCare

Public website for [diafootcare.com](https://diafootcare.com), prepared for Hostinger.

## Local preview

Run `python -m http.server 8000` from the repository root and open `http://localhost:8000`.

## Booking, checkout and WhatsApp

| Setting in `clinic-config.js` | Value |
| --- | --- |
| `bookingUrl` | Public appointment scheduler URL |
| `stripeUrl` | Stripe Payment Link for GBP |
| `paystackUrl` | Paystack Payment Page URL for NGN |
| `whatsappNumber` | Consultant number with country code, digits only |

Until these values are set, visitors can use the clinic’s email to enquire about a visit or request a payment link. Use public URLs and keep payment API keys in the provider dashboards.

See [Hostinger installation instructions](HOSTINGER.txt) for staging and launch checks.
