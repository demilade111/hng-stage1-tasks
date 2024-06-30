const express = require("express");
const { lookup } = require("../services/geoipService");

const router = express.Router();

router.get("/", (req, res) => {
  const clientIp =
    req.clientIp ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;
  console.log("clientIp :", clientIp);
  const geo = lookup(clientIp);
  const name = req.query.visitor_name;
  const location = geo ? geo.city : "Unknown";
  const response = {
    client_ip: clientIp,
    location: location,
    greeting: `Hello, ${name}, the temperature is 11 degrees Celsius in ${location}.`,
  };
  res.json(response);
});

module.exports = router;
