const React = require('react');

function Navbar() {
  return (
    <div className="contNav">
      <div className="navLinkOne">
        <a href="/auth/registration">ГЛАВНАЯ</a>
      </div>
      <div className="navLinkTwo">
        <a href="/">КАТЕГОРИИ</a>
      </div>
    </div>
  );
}
module.exports = Navbar;
