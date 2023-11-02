import express from "express"
import multer from "multer"
import cors from "cors"

const app = express()
const port = 3000

// middleware
app.use(cors())

const storage = multer.memoryStorage()
const upload = multer({
    storage,
})


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/upload", upload.single("file"), (res, res) => {
    console.log(req.file)
    res.send("File Upload")
})

app.listen(port, () => {
    console.log(`Server is lisening on port ${port}`)
})