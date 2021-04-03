const express = require('express');
const cors = require('cors');

const root = require('./routes/root');

const app = express();

app.use('/', root);

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on ${PORT}`))