const React = require("react");
const Layout = require("../Layout");
const Theme = require("../Theme");

function Main({ title, themes, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="cont">
        {themes.map((theme) => (
          <Theme key={theme.id} theme={theme} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = Main;
