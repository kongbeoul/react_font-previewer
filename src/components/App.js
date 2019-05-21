import React from "react";
import Controllbar from "./Controllbar";
import TextAreaForm from "./TextAreaForm";
import Logo from "../assets/images/logo.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="App__Logo">
        <img src={Logo} />
      </h1>
      <Controllbar />
      <TextAreaForm />
    </div>
  );
};

export default App;
