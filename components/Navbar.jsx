const React = require("react");

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              style={{ color: "#ffc107" }}
              aria-current="page"
              href="/auth/registration"
            >
              Регистрация
            </a>
            <a className="nav-link" style={{ color: "#ffc107" }} href="/themes">
              Темы
            </a>
            {user && (
              <div className="user-cont">
                <p>Игрок: {user.name}</p>
                <p>Очки: {user.score}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
module.exports = Navbar;

// <div className="contNav">
//   <div className="navLinkOne">
//     <a href="/auth/registration">ГЛАВНАЯ</a>
//   </div>
//   <div className="navLinkTwo">
//     <a href="/themes">КАТЕГОРИИ</a>
//   </div>
// </div>
