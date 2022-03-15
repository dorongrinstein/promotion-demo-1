const express = require('express')
const PORT = process.env.PORT || 8080

express()
    .get('/', (req, res) => {
        res.send('Hello World new version');
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))