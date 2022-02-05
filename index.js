console.log("Hello, HELPr!")

// TODO just start off using sqlite but have future-proof functions and stuff so later on i can exchange that seamlessly for postgresql
const db = require("./database/sqlite3/database")
db.hello()

const site = require("./site/site")

