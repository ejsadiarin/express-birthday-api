/**
 * First time using express
 * January 23, 2023 11:11 PM
 */
const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive and listening on http://localhost:${PORT}`)
)