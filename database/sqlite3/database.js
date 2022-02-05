module.exports = {
    putTicket,
    contains
}

console.log("Hello, database.js!")

const sql = require("sqlite3")

function putTicket (ticket, callback)
{
    // TODO this
    console.log(ticket)

    callback()
}

function contains (table, column, value)
{
    // TODO return true if something exists in the database
    // something something SELECT * FROM table WHERE column = value

    return
}
