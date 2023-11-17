/* eslint-disable import/order */
const { raw } = require("express");
const QuestionsPage = require("../../components/pages/QuestionsPage");
const { Question, Theme } = require("../../db/models");

const router = require("express").Router();

router.get("/:index", async (req, res) => {
  try {
    const { index, themesid } = req.params;
    const questions = await Question.findAll({ where: { themeId: 3 } });
    if (questions[index]) {
      const html = res.renderComponent(QuestionsPage, {
        question: questions[index],
        index: Number(index) + 1,
      });
      res.send(html);
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;
