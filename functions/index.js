const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_oZpOJSEYf35T2kzLMaryQxaP00urqixnOW");

//APP
// - App config
const app = express();
// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM??? for the amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen Command
exports.api = functions.https.onRequest(app)