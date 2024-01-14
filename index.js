const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello, this is a simple Express server!');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
``
