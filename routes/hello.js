const express = require("express");
const { getWeatherByIP } = require("../services/weatherService");
const { resolveClientIp } = require("../services/ipService");
const { buildResponse } = require("../utils/responseBuilder");

const router = express.Router();

router.get("/", async (req, res) => {
  const clientIp = resolveClientIp(req);
  const name = req.query.visitor_name || "Guest";

  try {
    const data = await getWeatherByIP(clientIp);
    const location = data.location ? data.location.name : "Unknown";
    const temperature = data.current ? data.current.temperature : "Unknown";

    const response = buildResponse(clientIp, name, location, temperature);
    res.json(response);
  } catch (error) {
    console.error("Error in fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
