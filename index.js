const express = require('express');
const app = express();
const api = require('./src/api');
app.use(api);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
