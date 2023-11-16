const router = require('express').Router()
const questionsRouter = require("./views/questions.routes")

router.use("/questions", questionsRouter)


module.exports = router