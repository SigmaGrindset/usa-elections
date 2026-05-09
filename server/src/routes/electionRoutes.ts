
const express = require("express")
const router = express.Router()
const { electionPost, electionGet, electionDelete } = require("../controllers/electionsController")

router.delete("/:year", electionDelete)
router.get("/:year", electionGet)
router.post("/", electionPost)



module.exports = router
