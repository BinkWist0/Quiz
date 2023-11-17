const React = require("react");
const Layout = require("./Layout");

function Rega({ title }) {
  return (
    <Layout title={title}>
      <div className="authCont">
        <h2 className="h2Auth">РЕГИСТРАЦИЯ</h2>
        <form action="/auth/registration" method="POST" className="form">
          <input name="name" className="inputAuth form-control" placeholder="Имя" />
          <button type="submit" className="btn buttonAuth btn-outline-warning">
            Сохранить
          </button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = Rega;
