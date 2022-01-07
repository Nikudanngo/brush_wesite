// This is your test secret API key.
// const stripe = require('stripe')('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'); //本番
// const STRIPE_PUBLISHABLE_KEY=<'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'>;　//本番
const STRIPE_PUBLISHABLE_KEY='sk_test_51KDPLeLfq32jdgt5Ct46nhXSPfb4aKuyfZIk40WG9EGZqYiqHPsSl0QvnDJctYOdAFd65uhuKwID6akWns5GVWSb00nrEP04IB'; //テスト
const stripe = require('stripe')(STRIPE_PUBLISHABLE_KEY); //今はテスト
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://thoughtofoceans.com';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: 'allthumbs.co@gmail.com',
    submit_type: 'pay',
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    
    shipping_address_collection: {
      // AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CV, CW, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MK, ML, MM, MN, MO, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, US, UY, UZ, VA, VC, VE, VG, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW, ZZ,
      allowed_countries: ['JP', 'US', 'CA','CH'],
    },
    shipping_options: [
      {
        shipping_rate: 'shr_1KEyavLfq32jdgt5rGvnQnpP',
      },
    ],
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        // price: 'price_1KDR9cLfq32jdgt5CyC2N3Rg', //本番
        price: 'price_1KDQ5CLfq32jdgt5tkglXJlU', //テスト
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});
