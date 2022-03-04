const express = require('express')
const PORT = process.env.PORT || 8080

express()
    .get('/', (req, res) => {
        res.send('Hello1');
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))