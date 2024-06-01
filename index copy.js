const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const User = require("./models/User.js");
const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:5000",
      "http://127.0.0.1:5000",
      process.env.FRONTEND_URL,
      process.env.BACKEND_URL,
      "*",
    ],
    credentials: true,
  })
);

// -momery unleaked---------
app.set("trust proxy", 1);

const backend = process.env.BACKEND_URL;
const app_id = process.env.FACEBOOK_APP_ID;
const app_access_token = process.env.FACEBOOK_ACCESS_TOKEN;

//Step1: initial path

app.get("/", async (req, res) => {
  const ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "";
  console.log({ userIPAddress: ip });
  console.log({ Query: req.query });
  const {
    sub1,
    sub2,
    sub3,
    sub4,
    sub5,
    sub6,
    sub7,
    sub8,
    installed,
    advertiser_tracking_id,
  } = req.query;

  // Check if user email already exists
  const userExists = await User.findOne({ ipAddress: ip });
  const userTrackingIdExists = await User.findOne({
    advertiserTrackingId: advertiser_tracking_id,
  });

  let facebookLink = "";

  // Redirect to app store if not installed
  if (installed !== "true") {
    const appStoreLink = process.env.APP_STORE_LINK;
    return res.redirect(appStoreLink);
  }

  console.log("app redirect successful");

  let newLink = "";

  if (userTrackingIdExists) {
    console.log("user exists");
    facebookLink = userTrackingIdExists.userLink;
  } else if (userExists) {
    console.log("user exists");
    facebookLink = userExists.userLink;
  } else {
    console.log("new user");

    // New user
    const updatedLink = `${backend}/?sub1=${sub1}&sub2=${sub2}&sub3=${sub3}&sub4=${sub4}&sub5=${sub5}&sub6=${sub6}&sub7=${sub7}&sub8=${sub8}`;

    const newUser = await User.create({
      ipAddress: ip,
      userLink: updatedLink,
    });

    if (newUser) {
      facebookLink = updatedLink;
      console.log({ "New user created": newUser });
    }
  }

  if (installed) {
    newLink = facebookLink + `&installed=${installed}`;
  } else {
    newLink = facebookLink;
  }

  console.log({ redirectLink: newLink });
  res.json(newLink);
});

//set marketers link inside app

// office

//AASA file path//https://www.dmtgames.pro/.well-known/apple-app-site-association
//associated domain: applinks:www.dmtgames.pro
//Step2: automtically by apple
// automatic download link for AASA file done by apple from the associated domain list created in xcode only after the app has been installed on the device
app.get("/.well-known/apple-app-site-association", (req, res) => {
  // Serve the AASA file
  // default part if no query params
  // Set the appropriate Content-Type header
  res.setHeader("Content-Type", "application/json");
  res.sendFile(__dirname + "/apple-app-site-association.json");
});

//step3: on app launch
// call this on initializing app to fetch back the original link that is needed for tracking user
// because in the associated domain, we may not have th full path, but only the root domain https://www.dmtgames.pro

// add advertiser_tracking_id to installed API call in unity app
app.get("/installed", async (req, res) => {
  const ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "";
  const { advertiser_tracking_id } = req.query;

  const userExists = await User.findOne({ ipAddress: ip });
  const userTrackingIdExists = await User.findOne({
    advertiserTrackingId: advertiser_tracking_id,
  });

  let newLink = "";

  // if only advertiser tracking id exists
  if (userTrackingIdExists) {
    console.log("only advertiser tracking id exists");
    const facebookLink = userTrackingIdExists.userLink;
    const installed = "true";
    newLink = facebookLink + `&installed=${installed}`;
  } else if (userExists) {
    console.log("only ip exists");
    const facebookLink = userExists.userLink;
    const installed = "true";
    newLink = facebookLink + `&installed=${installed}`;
  } else {
    console.log("user does not exist");
    newLink = backend; // take back to home link for redirect to app store
  }
  console.log({ redirectLink: newLink });
  res.redirect(newLink);
});

app.get("/track_app_installs", async (req, res) => {
  const ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "";
  const { advertiser_tracking_id } = req.query;

  if (advertiser_tracking_id) {
    console.log({ advertiser_tracking_id });
  }
  console.log("checking installs");

  const userExists = await User.findOne({ ipAddress: ip });

  if (userExists) {
    console.log({ userExists });
  }

  //save advertiser_tracking_id to user database on first app launch
  if (userExists && !userExists.advertiserTrackingId) {
    userExists.advertiserTrackingId =
      advertiser_tracking_id || userExists.advertiserTrackingId;

    const updatedUser = await userExists.save();

    if (updatedUser) {
      console.log({ "User updated": updatedUser });
    }
  }

  if (advertiser_tracking_id) {
    console.log({ advertiser_tracking_id });
    try {
      const response = await axios.post(
        `https://graph.facebook.com/${app_id}/activities?event=MOBILE_APP_INSTALL&event_name=MOBILE_APP_INSTALL&application_tracking_enabled=1&advertiser_tracking_enabled=1&advertiser_id=${advertiser_tracking_id}&access_token=${app_access_token}`
      );

      if (response.data) {
        let result = response.data;

        console.log({ result });
        //{ result: { success: true } }
      }
      //====={New update}========================
    } catch (error) {
      // const err = error.response.data;
      console.log(error);
      // return { status: err.success, message: err.message };
      // res.json(err);
    }
  }
});

// fetch all users
app.get("/all_users", async (req, res) => {
  const allUsers = await User.find();

  if (allUsers) {
    console.log({ allUsers });
    res.status(200).json(allUsers);
  }
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    server;
  })
  .catch((err) => console.log(err));