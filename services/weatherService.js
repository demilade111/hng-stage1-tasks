const axios = require("axios");

const getWeatherByIP = async (ip) => {
  try {
    const response = await axios.get(`http://api.weatherstack.com/current`, {
      params: {
        access_key: process.env.WEATHERSTACK_API_KEY,
        query: ip,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

module.exports = {
  getWeatherByIP,
};
