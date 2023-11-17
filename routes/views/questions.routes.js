/* eslint-disable import/order */
const QuestionsPage = require("../../components/pages/QuestionsPage");
const { Question } = require("../../db/models");

const router = require("express").Router();

router.get("/:index/themes/:themesId", async (req, res) => {
  try {
    const { index, themesId } = req.params;
    const questions = await Question.findAll({ where: { themeId: themesId } });
    if (questions[index]) {
      const html = res.renderComponent(QuestionsPage, {
        question: questions[index],
        index: Number(index) + 1,
      });
      res.send(html);
    } else {
      res.redirect("/themes");
    }
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;
