// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KDPLeLfq32jdgt5Ct46nhXSPfb4aKuyfZIk40WG9EGZqYiqHPsSl0QvnDJctYOdAFd65uhuKwID6akWns5GVWSb00nrEP04IB');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://thoughtofoceans.com/';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1KDR9cLfq32jdgt5CyC2N3Rg',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));