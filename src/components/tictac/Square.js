import React from "react";

function Square({ value, onClick }) {
  return (
    <div>
      <button className="btn btn-light border sqaure" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;