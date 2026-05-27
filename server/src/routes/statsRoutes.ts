const expressStats = require("express")
const statsRouter = expressStats.Router()
const { statsGet } = require("../controllers/statsController")

statsRouter.get("/", statsGet)

module.exports = statsRouter
