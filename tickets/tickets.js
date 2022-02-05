console.log("Hello, tickets.js!")

module.exports = {
    makeFromRequest
}

const crypto = require("crypto")
const db = require("../database/sqlite3/database")

function makeFromRequest(request)
{
    let ticket = request.body
    // TODO complain if description, location, or contact are too long (>50 characters)

    let ticketId = 0
    do
    {
        ticketId = Math.floor(Math.random() * 4294967296) - 2147483648
    }
    while (db.contains("tickets", "ticketId", ticketId))
    ticket.ticketId = ticketId

    // TODO maybe hash this a little more securely?
    ticket.ipHash = crypto.createHash("sha256").update(request.ip).digest("hex")
    console.log(request.ip)

    // TODO replace with actual functionality; this is for debugging purposes
    ticket.userId = 12345

    ticket.timeOpened = Date.now()

    return ticket
}
