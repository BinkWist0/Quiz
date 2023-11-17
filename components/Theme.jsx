const React = require("react");
function Theme({ theme }) {
  return (
    <div className="card text-bg-dark mb-3" style={{width: "18rem"}}>
      <img src={theme.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{theme.name}</h5>
        <a href={`/questions/0/themes/${theme.id}`} className="btn btn-outline-warning">
          Выбрать
        </a>
      </div>
    </div>
  );
}
module.exports = Theme;

// <div>
//   <img src={theme.img}/>
//   <a href = {`/questions/0/themes/${theme.id}`}><h2>{theme.name}</h2></a>
// </div>
