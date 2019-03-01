import bodyParser = require('body-parser');
import * as express from 'express';
import path = require('path');
import carRouter from './routes/car';
import applyConfig from './config/load-config';

const app = express();

app.use(bodyParser.json({ type: 'application/json' }));


// apply env config
applyConfig(path.resolve(__dirname, 'config/config.env'));


// register routes to listen to and expose
app.use('/api', carRouter);

// initialize the webserver
const host = process.env.SERVER_HOST || '';
const port = parseInt(process.env.SERVER_PORT || '', 10);
app.listen(port, host, () => {
  console.info(`App listening on port ${port}!`);
});
