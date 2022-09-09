import React from "react";

function BigText(props) {
    
    return (
      <div>
        <h1>{props.deger==""?"not found":props.deger}</h1>
      </div>
    );
  }
  
  export default BigText;