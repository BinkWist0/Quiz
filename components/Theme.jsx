const React = require('react');
function Theme({theme}) {
  return (
    <div>
      <img src={theme.img}/>
      <a href = {`/products/category/${theme.id}`}><h2>{theme.name}</h2></a>
    </div>
  );
}
module.exports = Theme;
