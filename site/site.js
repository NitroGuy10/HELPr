console.log("Hello, site.js!")

const express = require("express")
const app = express()
const port = 3000

const tickets = require("../tickets/tickets.js")
const db = require("../database/sqlite3/database")


app.use("/static", express.static("site/static"))
app.use(express.static("site/pages"))

app.use(express.json())

app.post("/ticket", (request, response) => {
    let ticket = tickets.makeFromRequest(request)
    db.putTicket(ticket, () =>
    {
        response.json({message: "this is my response!"})
    })
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})
