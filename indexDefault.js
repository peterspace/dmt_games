const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const app = express();
const backendURL = process.env.BACKEND_URL;

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

//Step1: initial path
//const facebookLink = "https://dmtgames.com/?appId=appId&sub1={name}&sub2={bundleid}&sub3={fbclid}&sub4={pixel}&sub5=MCA&sub6=test&sub7=NPR&sub8={sub4}";
app.get("/", (req, res) => {
  const { installed } = req.query;

  // go to appstore to install app if not already installed
  if (installed != "true") {
    // const appstorelink =
    //   "https://theangerofthegods.onelink.me/MnQE?af_xp=custom&pid=Facebook%20Media%20Source&deep_link_sub2={bundleid}&deep_link_sub3={fbclid}&deep_link_sub4={pixel}&deep_link_sub5=MCA&deep_link_sub6=test&deep_link_sub7=NPR&deep_link_sub8={sub4}";
    // const appStoreLink = "https://apps.apple.com/app/id1510445899";
    const appStoreLink = process.env.FACE_BOOK_LINK;
    // "https://apps.apple.com/app/:appId";

    res.redirect(appStoreLink);
  }

  console.log("app redirect successful");
  const facebookLink = process.env.FACEBOOK_FULL_LINK;
  res.json(facebookLink);
  // res.json({ message: "app redirect successful" });
});

//set marketers link inside app

// office

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

// const facebookLink = "https://dmt-games.onrender.com/?appId=appId&sub1={name}&sub2={bundleid}&sub3={fbclid}&sub4={pixel}&sub5=MCA&sub6=test&sub7=NPR&sub8={sub4}";

//step3: on app launch
// call this on initializing app to fetch back the original link that is needed for tracking user
// because in the associated domain, we may not have th full path, but only the root domain https://dmtgames.com
app.get("/game", (req, res) => {
  // const facebookLink =
  //   "https://dmtgames.com/?appId=appId&sub1={name}&sub2={bundleid}&sub3={fbclid}&sub4={pixel}&sub5=MCA&sub6=test&sub7=NPR&sub8={sub4}";
  // const facebookLink = `${backendURL}/?appId=appId&sub1={name}&sub2={bundleid}&sub3={fbclid}&sub4={pixel}&sub5=MCA&sub6=test&sub7=NPR&sub8={sub4}`;
  // const facebookLink = process.env.FACEBOOK_FULL_LINK;
  const facebookLink = process.env.FACEBOOK_FULL_LINK;

  const installed = "true";
  const newLink = facebookLink + `&installed=${installed}`;

  console.log(newLink);
  // res.redirect(newLink);

  // res.status(200).json(newLink);
  // res.status(200).json(newLink);
  res.status(200).json(newLink);

  // res.json(newLink);
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
