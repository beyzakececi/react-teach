import logo from "./logo.svg";
import "./App.css";
import Beyza from "./Beyza";
import { useState } from "react";

// input box
// input boxa bişiler yazıyorsun
// <h1> tagleri içinde direkt oalrak gözüküyor

function App() {
  const [clickedButton, setClickedButton1] = useState(true);

  const [deger, setDeger] = useState("");

  function handleClick() {
    setClickedButton1(!clickedButton);
  }

  function handleChange(event) {
    const a = event.target.value;

    setDeger(a);
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          hidden={clickedButton}
        />
        <Beyza changeAvailibity={handleClick} isDisable={clickedButton} />
        <input
          type="text"
          onChange={handleChange}
          name="deger"
          value={deger}
        ></input>
        <h1>{deger}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
