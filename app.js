import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.js'
import todoRouter from './route.js'
import methodOverride from 'method-override';



dotenv.config()

const port = process.env.PORT

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride("_method", {
    methods: ["POST", "GET", "DELETE", "PUT"]
}))


app.use("/", todoRouter)



app.listen(port, () => {
    connectDB()
    console.log("Server runs on http://localhost:" + port)
})