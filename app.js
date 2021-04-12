const express = require('express')
const https = require('https')
const app = express()
app.get('/', (__request, response) => {
    const url =
        'https://api.openweathermap.org/data/2.5/weather?APPID=a63307ba1cc6efe973291d68a210e13a&q=Tervuren&units=metric'
    https.get(url, (response) => {
        console.log(response.statusCode)
    })
    response.send('Server is up and running.')
})

app.listen(4000, () => {
    console.log('Server is running on port 4000.')
})
