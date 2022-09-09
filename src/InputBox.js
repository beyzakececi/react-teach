import React from "react";

function InputBox(props){
    return (
        <div>
            <input
                type="text"
                onChange={props.handleChange}
                name="deger"
                value={props.deger}
            ></input>
        </div>

    );
}

export default InputBox;