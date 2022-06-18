const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

app.use('/', express.static('build'));
app.use('/if', express.static('iiu/dist'));
app.use('/if-games', express.static(path.join(__dirname, '/../if-games')));

app.listen(port, () => {
    console.log(`indrajithmakesgames.com running at http://localhost:${port}`);
});