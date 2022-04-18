var express = require('express');
var application = express();

const port = 3000;

application.get('/', (request, response) => {
   response.send();
});

application.get('/check-health', (request, response) => {
   response.status(200).json({message: 'Service is running'});
});

application.listen(port, () => {
   console.log(`Run service on ${port}`);
});