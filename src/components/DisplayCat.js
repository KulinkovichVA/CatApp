import React from "react";

function DisplayCat({cat}){
  return (
    <div className = "DisplayFact">
      <img src={cat.picture} alt={cat.name} />
      <div className="CatFact">{cat.fact}</div>
    </div>
  )
}

export default DisplayCat;