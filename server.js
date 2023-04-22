const express = require('express');
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())
const port = 3000


const student = require('./routes/student-routes')


app.use('/api/v1/student', student)


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
