import express from 'express'
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(morgan("dev"));
app.use(cors(process.env.CLIENT_URL))

const electionRoutes = require("./routes/electionRoutes")
app.use("/api/election", electionRoutes)

app.get("/api/test", (req, res) => {
  return res.json({ res: "Response /api/test" })
})

app.get("/", (req, res) => {
  return res.json({ res: "Response /" })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
