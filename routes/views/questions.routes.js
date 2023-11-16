const questionsPage = require("../../components/pages/QuestionsPage");
const {Question} = require("../../db/models") 

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const questions = await Question.findAll()
        const html = res.renderComponent(questionsPage, )
        
    } catch (error) {
        
    }
});

module.exports = router;
