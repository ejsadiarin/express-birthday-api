/**
 * First time using express
 * January 23, 2023 11:11 PM
 * 
 * fully working simple REST API using Express in Node.js (finished: 11:28 PM)
 */
// const app = require('express')();
const express = require('express');
const app = express();
const PORT = 8080;

// add middleware --> so every request is parsed into JSON format before using as data or object in this code
app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`it's alive and listening on http://localhost:${PORT}`)
)

// GET 
app.get('/birthday', (req, res) => {
    res.status(200).send({
        message: 'Happy 19th Birthday to my exquisite self',
        quote: 'Show God His most beautiful creation'
    })
})
// POST
app.post('/birthday/:id', (req, res) => {

    const { id } = req.params;
    const { quote } = req.body;

    if (!quote) {
        res.status(418).send({ message: 'we need a quote! LESGOWW' })
    }

    res.send({
        message: `Happy Birthday! here is your quote: ${quote} and ID of ${id}`,
    })
})