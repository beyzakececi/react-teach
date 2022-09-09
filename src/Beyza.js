import React from "react";

function Beyza(props) {
  return (
    <div>
      <button disabled={!props.isDisable} onClick={props.changeAvailibity}>
        Open
      </button>
      <button disabled={props.isDisable} onClick={props.changeAvailibity}>
        Close
      </button>
      <p>{props.x}</p>
    </div>
  );
}

export default Beyza;
