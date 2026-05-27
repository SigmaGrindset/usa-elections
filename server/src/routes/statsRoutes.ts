const expressStats = require("express")
const statsRouter = expressStats.Router()
const { statsGet, evTrendGet, extremesGet } = require("../controllers/statsController")

statsRouter.get("/", statsGet)
statsRouter.get("/ev-trend", evTrendGet)
statsRouter.get("/extremes", extremesGet)

module.exports = statsRouter
