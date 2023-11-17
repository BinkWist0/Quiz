const router = require("express").Router();
const questionsRouter = require("./views/questions.routes");
const authRouter = require("./auth.route");
const themesRouter = require("./themes.route")

router.use("/", themesRouter);
router.use("/auth", authRouter);
router.use("/questions", questionsRouter);

// /themes/:themesId/questions/:questionId/
module.exports = router;
