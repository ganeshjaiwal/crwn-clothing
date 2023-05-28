require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount, username } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      shipping: {
        name: username,
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      description: "Online shopping payment - Crwn Clothing!",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
