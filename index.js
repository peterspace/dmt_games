const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { errorHandler } = require("./middleware/errorMiddleware.js");
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

//Step1: initial path
app.get("/", (req, res) => {
    console.log({Query: req.query});
     const { sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, installed } = req.query;

  // go to appstore to install app if not already installed
  if (installed != "true") {
    const appStoreLink = process.env.APP_STORE_LINK;

    res.redirect(appStoreLink);
  }

  console.log("app redirect successful");

  const updatedLink =  `https://www.dmtgames.pro/?sub1=${sub1}&sub2=${sub2}&sub3=${sub3}&sub4=${sub4}&sub5=${sub5}&sub6=${sub6}&sub7=${sub7}&sub8=${sub8}`
  // const facebookLink = process.env.FACEBOOK_FULL_LINK;
  const facebookLink = updatedLink;

 // const facebookLink = process.env.FACEBOOK_FULL_LINK;

  const newLink = facebookLink + `&installed=${installed}`;

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

// app.get("/game", (req, res) => {
//   const facebookLink = process.env.FACEBOOK_FULL_LINK;
//   const installed = "true";
//   const newLink = facebookLink + `&installed=${installed}`;
//   console.log(newLink);
//   res.json(newLink);
// });

app.get("/game", (req, res) => {
  const { sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8 } = req.query;

  let subs = [];
  let sub1B = null;
  let sub2B = null;
  let sub3B = null;
  let sub4B = null;
  let sub5B = null;
  let sub6B = null;
  let sub7B = null;
  let sub8B = null;

  if (sub1) {
    subs.push(sub1);
    sub1B = sub1;
  }
  if (sub2) {
    subs.push(sub2);
    sub2B = sub2;
  }
  if (sub3) {
    subs.push(sub3);
    sub3B = sub3;
  }
  if (sub4) {
    subs.push(sub4);
    sub4B = sub4;
  }
  if (sub5) {
    subs.push(sub5);
    sub5B = sub5;
  }
  if (sub6) {
    subs.push(sub6);
    sub6B = sub6;
  }
  if (sub7) {
    subs.push(sub7);
    sub7B = sub7;
  }
  if (sub8) {
    subs.push(sub8);
    sub8B = sub8;
  }

  console.log({ subs });

  console.log({
    sub1B,
    sub2B,
    sub3B,
    sub4B,
    sub5B,
    sub6B,
    sub7B,
    sub8B,
  });
  const facebookLink = process.env.FACEBOOK_FULL_LINK;
  const installed = "true";
  const newLink = facebookLink + `&installed=${installed}`;
  console.log(newLink);
  res.json(newLink);
});


app.get("/installed", (req, res) => {

  console.log({Query: req.query});
   console.log({Params: req.params});

   const { sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8 } = req.query;

  let subs = [];
  const subTest = "unity";
  let subTestB = null;
  let sub1B = null;
  let sub2B = null;
  let sub3B = null;
  let sub4B = null;
  let sub5B = null;
  let sub6B = null;
  let sub7B = null;
  let sub8B = null;

  if (subTest) {
      subs.push(subTest);
      subTestB = subTest;
    }
  if (sub1) {
    subs.push(sub1);
    sub1B = sub1;
  }
  if (sub2) {
    subs.push(sub2);
    sub2B = sub2;
  }
  if (sub3) {
    subs.push(sub3);
    sub3B = sub3;
  }
  if (sub4) {
    subs.push(sub4);
    sub4B = sub4;
  }
  if (sub5) {
    subs.push(sub5);
    sub5B = sub5;
  }
  if (sub6) {
    subs.push(sub6);
    sub6B = sub6;
  }
  if (sub7) {
    subs.push(sub7);
    sub7B = sub7;
  }
  if (sub8) {
    subs.push(sub8);
    sub8B = sub8;
  }

  console.log({ subs });

  console.log({
    subTestB,
    sub1B,
    sub2B,
    sub3B,
    sub4B,
    sub5B,
    sub6B,
    sub7B,
    sub8B,
  });

 const updatedLink =  `https://www.dmtgames.pro/?sub1=${sub1}&sub2=${sub2}&sub3=${sub3}&sub4=${sub4}&sub5=${sub5}&sub6=${sub6}&sub7=${sub7}&sub8=${sub8}`
  // const facebookLink = process.env.FACEBOOK_FULL_LINK;
  const facebookLink = updatedLink;
  
  const installed = "true";
  const newLink = facebookLink + `&installed=${installed}`;
  console.log({redirectLink: newLink});
  res.redirect(newLink);
  // res.json(newLink);
});

app.get("/track_app_installs", async (req, res) => {
  const { advertiser_tracking_id } = req.query;
  console.log("checking installs");

      //====={New update}========================
  // const userExists = User.findOne({userId:advertiser_tracking_id})
  // let facebookLink = ""

  // use advertiser_tracking_id as userId
  // chec

  const app_id = process.env.FACEBOOK_APP_ID;
  const app_access_token = process.env.FACEBOOK_ACCESS_TOKEN;

  if (advertiser_tracking_id) {
    console.log({ advertiser_tracking_id });
    try {
      const response = await axios.post(
        `https://graph.facebook.com/${app_id}/activities?event=MOBILE_APP_INSTALL&event_name=MOBILE_APP_INSTALL&application_tracking_enabled=1&advertiser_tracking_enabled=1&advertiser_id=${advertiser_tracking_id}&access_token=${app_access_token}`
      );


       if (response.data) {
        let result = response.data;
        
        console.log({ result });

      
      }
      //====={New update}========================

        //   if (response.data && userExists) {
    //     let result = response.data;
    //  facebookLink = userExists.faceBookLink
    //          const installed = "true";
    // const newLink = facebookLink + `&installed=${installed}`;
    // console.log({redirectLink: newLink});
        
    //     console.log({ result });
    //     // "success": true
    //     res.json(newLink);

      
    //   }
    } catch (error) {
      // const err = error.response.data;
      console.log(error);
      // return { status: err.success, message: err.message };
      // res.json(err);
    }
  }
  // const advertiser_tracking_id = ""
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

//http://localhost:4000/track_app_installs_test?advertiser_tracking_id=1
