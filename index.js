const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();
const backendURL = process.env.BACKEND_URL;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors());

// -momery unleaked---------
app.set("trust proxy", 1);

//Step1: initial path
//const facebookLink = "https://dmtgames.com/?appId=appId&sub1={name}&sub2={bundleid}&sub3={fbclid}&sub4={pixel}&sub5=MCA&sub6=test&sub7=NPR&sub8={sub4}";
app.get("/", (req, res) => {
  const { installed } = req.query;

  //======={GET USER IP ADDRESS}============================
  const ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "";
  console.log({ ip });

  // go to appstore to install app if not already installed
  if (!installed) {
    // const appstorelink =
    //   "https://theangerofthegods.onelink.me/MnQE?af_xp=custom&pid=Facebook%20Media%20Source&deep_link_sub2={bundleid}&deep_link_sub3={fbclid}&deep_link_sub4={pixel}&deep_link_sub5=MCA&deep_link_sub6=test&deep_link_sub7=NPR&deep_link_sub8={sub4}";
    const appStoreLink = "https://apps.apple.com/app/id1510445899";
    // "https://apps.apple.com/app/:appId";

    res.redirect(appStoreLink);
  }

  console.log("app redirect successful");
  res.json({ ip });
});

//set marketers link inside app

//AASA file path/https://www.dmtgames.com/apple-app-site-association
//associated domain: applinks:www.dmtgames.com

//Step2: automtically by apple
// automatic download link for AASA file done by apple from the associated domain list created in xcode only after the app has been installed on the device
app.get("/apple-app-site-association", (req, res) => {
  // Serve the AASA file
  // default part if no query params
  // Set the appropriate Content-Type header
  res.setHeader("Content-Type", "application/json");
  res.sendFile(__dirname + "/apple-app-site-association.json");
});

//step3: on app launch
// call this on initializing app to fetch back the original link that is needed for tracking user
// because in the associated domain, we may not have th full path, but only the root domain https://dmtgames.com
app.get("/game", (req, res) => {
  // const facebookLink =
  //   "https://dmtgames.com/?appId=appId&sub1={name}&sub2={bundleid}&sub3={fbclid}&sub4={pixel}&sub5=MCA&sub6=test&sub7=NPR&sub8={sub4}";
  const facebookLink = `${backendURL}/?appId=appId&sub1={name}&sub2={bundleid}&sub3={fbclid}&sub4={pixel}&sub5=MCA&sub6=test&sub7=NPR&sub8={sub4}`;

  const installed = "true";
  const newLink = facebookLink + `&installed=${installed}`;

  console.log(newLink);
  res.redirect(newLink);

  // res.json(newLink);
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
