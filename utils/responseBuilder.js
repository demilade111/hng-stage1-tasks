const buildResponse = (clientIp, name, location, temperature) => {
  return {
    client_ip: clientIp,
    location: location,
    greeting: `Hello, ${name}, the temperature is ${temperature} degrees Celsius in ${location}.`,
  };
};

module.exports = {
  buildResponse,
};
