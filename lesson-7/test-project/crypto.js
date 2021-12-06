// Modules imports
import axios from "axios";
import express from "express";
// Creating new server application
const app = express();
// Variable with port to use
const port = 3000;

// Allowing application to use PUG as template engine
app.set("view engine", "pug");

// Defining handler for / path (root)
app.get("/", async function(req, res) {
  // query: { from: 'BTC', to: 'USD' },
  console.log("INCOMMING REQUEST", req.query);
  // Checking if incomming request has needed query parameters
  if (req.query.from && req.query.to) {
    try {
      const rate = await requestRates(req.query.from, req.query.to);
      res.status(200);
      res.render("index", {
        message: `${req.query.from}/${req.query.to}:`,
        messageValue: rate
      });
    } catch (err) {
      res.status(401)
      res.render("index", { message: err.message });
    }
  } else {
    // Just showing error if no needed parameters
    res.status(400)
    res.render("index", {
      message:
        "Incorrect params, specify smth like ?from=BTC&to=USD"
    });
  }
});

app.listen(port, function() {
  console.log(`Server started on port ${port}!`);
});

let requestRates = async (from, to) => {
  // trying to make GET request to get fresh rates
  // https://cex.io/rest-api#last-price
  const response = await axios.get(`https://cex.io/api/last_price/${from}/${to}`);
  const json = response.data;
  console.log('requestRates jsonResponse', json)
  // If response contains .error property, throwing it
  if (json.error) {
    throw Error(`${json.error}`);
  }
  // Otherwise just returning last price property of response
  return json.lprice;
}


