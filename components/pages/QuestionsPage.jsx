const React = require("react");
const Layout = require("../Layout");

function QuestionsPage({ question, index }) {
  return (
    <Layout>
      <div>
        <img src={question.img} alt="" />
        <h3>{question.name}</h3>
        <a href={`${index}`}>Next</a>
      </div>
    </Layout>
  );
}

module.exports = QuestionsPage;
