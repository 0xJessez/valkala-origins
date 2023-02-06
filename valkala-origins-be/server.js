const express = require('express')
const app = express()
const PORT = 3001

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

// to extract data from req.body when we get POST, PUT, DELETE requests.
app.use(express.json())