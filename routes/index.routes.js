const router = require("express").Router();
const questionsRouter = require("./views/questions.routes");

router.use("/themes", questionsRouter);
router.use("/questions", questionsRouter);

// /themes/:themesId/questions/:questionId/
module.exports = router;
