var geoip = require('geoip-lite');

const lookup = (ip) => {
    return geoip.lookup(ip);
};

module.exports = {
    lookup
};
