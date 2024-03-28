import express from 'express'; 
/*imported from package.json which is created by us using npm init
This is a module import*/
import cors from 'cors'; // to connect data of front end and backend bcz they are running on different
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`)); 
/*listen function is used to make express server.
it is takeing 2 arguments - 1st port number, 2nd- message(in this case)*/