const router = require("express").Router();
const questionsRouter = require("./views/questions.routes");
const authRouter = require("./auth.route");

router.use("/auth", authRouter);
router.use("/themes", questionsRouter);
router.use("/questions", questionsRouter);

// /themes/:themesId/questions/:questionId/
module.exports = router;
