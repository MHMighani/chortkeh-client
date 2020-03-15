const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const assetRouter = require('./routers/asset')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(userRouter)
app.use(assetRouter)

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})