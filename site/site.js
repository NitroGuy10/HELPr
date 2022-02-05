const express = require("express")
const app = express()
const port = 3000

console.log("Hello, site.js!")

app.use("/static", express.static("site/static"))
app.use(express.static("site/pages"))

app.use(express.json())

app.post("/ticket", (request, response) => {
    console.log(request.body)
    response.json({message: "this is my response!"})
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})
