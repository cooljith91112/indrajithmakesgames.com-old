const express = require('express')
const app = express()
const port = 3002

app.use('/', express.static('build'));
app.use('/if', express.static('iiu/dist'));
app.use('/if-games', express.static('ifgames'));

app.listen(port, () => {
    console.log(`indrajithmakesgames.com running at http://localhost:${port}`)
})