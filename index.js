const express =  require('express');
const contentTypeRouter =require('./src/routes/contentTypeRoutes');
const contentRouter =require('./src/routes/contentRoutes');
const errorHandler = require("./src/middleware/errorHandler")

const app = express();
const port = 5050;


app.use(express.json());
app.use('/content-type', contentTypeRouter);
app.use('/content', contentRouter);


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