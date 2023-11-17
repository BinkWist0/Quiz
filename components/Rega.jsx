const React = require("react");
const Layout = require("./Layout");

function Rega({ title }) {
  return (
    <Layout title={title}>
      <div className="authCont">
        <h2 className="h2Auth">РЕГИСТРАЦИЯ</h2>
        <form action="/auth/registration" method="POST" className="form">
          <input name="name" className="inputAuth" placeholder="имя" />
          <button type="submit" className="buttonAuth">
            сохранить
          </button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = Rega;
