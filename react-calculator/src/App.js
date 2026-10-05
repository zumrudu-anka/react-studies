import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");

  let clearInputTextValue = () => {
    setInputText("");
  }

  let updatedInputTextValue = (value) => {
    setInputText(inputText.concat(value));
  }

  let calcResult = () => {
    setInputText(eval(inputText).toString());
  }

  return (
    <div className = {"container"}>
      <form className="calculator" name = "calc">
        <input type="text" className = {"value"} readOnly name = "txt" value = {inputText}/>
        <span className="num clear" onClick = {() => clearInputTextValue()}><i>C</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("/")}><i>/</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("*")}><i>*</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("7")}><i>7</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("8")}><i>8</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("9")}><i>9</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("-")}><i>-</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("4")}><i>4</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("5")}><i>5</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("6")}><i>6</i></span>
        <span className="num plus" onClick = {() => updatedInputTextValue("+")}><i>+</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("1")}><i>1</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("2")}><i>2</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("3")}><i>3</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("0")}><i>0</i></span>
        <span className="num" onClick = {() => updatedInputTextValue("00")}><i>00</i></span>
        <span className="num" onClick = {() => updatedInputTextValue(".")}><i>.</i></span>

        <span className="num equal" onClick = {() => calcResult()}><i>=</i></span>

      </form>
    </div>
  );
}

export default App;
