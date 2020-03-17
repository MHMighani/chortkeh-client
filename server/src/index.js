const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

require('./db/mongoose')

const userRouter = require('./routers/user')
const assetRouter = require('./routers/asset')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(assetRouter)
app.use(morgan('dev'))

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})