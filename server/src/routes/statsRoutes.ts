const expressStats = require("express")
const statsRouter = expressStats.Router()
const { statsGet, evTrendGet } = require("../controllers/statsController")

statsRouter.get("/", statsGet)
statsRouter.get("/ev-trend", evTrendGet)

module.exports = statsRouter
