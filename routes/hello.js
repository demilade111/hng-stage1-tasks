const express = require('express');
const { lookup } = require('../services/geoipService');

const router = express.Router();

router.get('/', async (req, res) => {
    let clientIp = req.clientIp || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (clientIp && clientIp.includes(',')) {
        clientIp = clientIp.split(',')[0];
    }
    if (clientIp === '::1' || clientIp === '127.0.0.1') {
        clientIp = '8.8.8.8'; 
    }

    const geo = await lookup("2001:ac8:8b:2000::43a3");
    const name = req.query.visitor_name || 'Guest';
    const location = geo ? geo.city : 'Unknown';

    const response = {
        client_ip: clientIp,
        location: location,
        greeting: `Hello, ${name}, the temperature is 11 degrees Celsius in ${location}.`
    };

    res.json(response);
});

module.exports = router;
