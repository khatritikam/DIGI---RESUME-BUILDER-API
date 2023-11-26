import * as express from 'express'

let app:express.Application = express()

app.listen(8000, () => {
    console.log('server is running at port 8000')
})