const axios = require("axios");

const lookup = async (ip) => {
  try {
    const response = await axios.get(`https://ipinfo.io/${ip}/geo`, {
      headers: {
        Authorization: `Bearer ${process.env.IPINFO_TOKEN}`,
      },
    });
    console.log("Geo lookup response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return null;
  }
};

module.exports = {
  lookup,
};
