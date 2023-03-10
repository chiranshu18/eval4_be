const express =  require('express');
const cors = require('cors');

const contentTypeRouter =require('./src/routes/contentTypeRoutes');
const contentRouter =require('./src/routes/contentRoutes');
const errorHandler = require("./src/middleware/errorHandler")

const app = express();
const port = 5050;


// app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
app.use('/content-type', contentTypeRouter);
app.use('/content', contentRouter);

app.use(cors());



app.get('/', (req, res) => {
    res.send('running...');
});

app.get('*', (req, res) => {
    res.status(404).send("404 - Not Found 🚨");
});

app.use(errorHandler)

app.listen(port, () => {
    console.log(`The server is listening on port : ${port}`);
});