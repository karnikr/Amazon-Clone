const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51MPWqvDy80iXHFhzux9b7njvdYD2pZfss7seHRDyIyQ0SbL24ySUo9fTjgh4ycmYVHNbDxLKXErHrhtCBFaUOSV900I0XJ16gl");

// API


// - App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));


app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request Recieved BOOM!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    // 201 - OK Created something
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example end point
// http://127.0.0.1:5001/challenge-628da/us-central1/api
