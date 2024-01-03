// This is your test secret API key.
const stripe = require('stripe')(
  'sk_test_51L0nKIAoWY7yZrZSTqV7e8AipU6xQKqiiOJwKzwPxE3LOAz97iCAmJWkvTz5NYE6x8gI4MEkaaxclDKvUNh41bF400AbWWnlQr'
);

const calculateOrderAmount = (price) => {
  price = price * 100;
  return price;
};

export default async function handler(req, res) {
  const { price } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(price),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
