require('dotenv').config();
const express = require('express');
const requestIp = require('request-ip');
const helloRoute = require('./routes/hello');

const app = express();
const port = process.env.PORT || 3000;

app.use(requestIp.mw());

app.use('/api/hello', helloRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
