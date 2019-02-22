import bodyParser = require('body-parser');
import * as express from 'express';
import weatherRouter from './routes/weather';
const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

// register routes to listen to and expose
app.use('/api/weather', weatherRouter);

// initialize the webserver
const host = process.env.YOUR_HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '', 4) || 8085;
app.listen(port, host, () => {
  console.info(`App listening on port ${port}!`);
});
