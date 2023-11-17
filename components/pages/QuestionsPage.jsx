const React = require("react");
const Layout = require("../Layout");

function QuestionsPage({ question, index, user}) {
  return (
    <Layout user={user}>
      <div className="card text-bg-dark mb-3" style={{ width: "18rem" }}>
        <img src={question.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{question.name}</h5>
        </div>
      </div>
      <form action="" method="POST">
        <div className="mb-3 parent">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Введите ответ
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <button type="submit" className="btn buttonAuth btn-outline-warning">
            Ответить
          </button>
        </div>
      </form>
      <a
        href={`/questions/${index}/themes/${question.themeId}`}
        className="btn btn-next btn-outline-warning"
      >
        Следующий вопрос
      </a>
    </Layout>
  );
}

module.exports = QuestionsPage;

// <div>
//   <img src={question.img} alt="" />
//   <h3>{question.name}</h3>
//   <a href={`/questions/${index}/themes/${question.themeId}`}>Next</a>
// </div>
