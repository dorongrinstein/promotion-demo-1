const express = require('express')
const PORT = process.env.PORT || 8080

express()
    .get('/', (req, res) => {
        res.send('Mike Feature 1! feature for nose hair');
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))