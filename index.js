var express = require('express');
var application = express();

require('dotenv').config();

application.get('/', (request, response) => {
   response.send();
});

application.get('/check-health', (request, response) => {
   response.status(200).json({message: `Service is running on port ${process.env.PORT}`});
});

application.listen(process.env.PORT, () => {
   console.log(`Run service on ${process.env.PORT}`);
});