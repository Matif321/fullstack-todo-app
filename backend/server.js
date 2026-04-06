import express from "express"
import dotenv from "dotenv"
import dbconntion from "./config/db.js";
import modelRouter from "./routers/modelRouter.js"

dotenv.config();
const app = express()

app.use(express.json())


app.use("/api/v1/todos", modelRouter)


const port = process.env.PORT || 3000;
dbconntion();


app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

