import React, { useState } from "react";
import "./activ_tab.css";
import questionsAndAnswers from "./data/data";
import Header from "./header";

export default function ActiveTab({ display }) {
  // let [activeBtn, setActiveBtn] = useState(0);
  let [activePara, setActivePara] = useState(0);
  let next = () => {
    if (activePara < 99) {
      activePara = activePara + 1;
      console.log(activePara);
      setActivePara(activePara);
    } else {
      display("Cant Do Previous Now");
    }
  };
  let previous = () => {
    if (activePara > 0) {
      activePara = activePara - 1;
      console.log(activePara);
      setActivePara(activePara);
    } else {
      display("Cant Do Previous Now");
    }
  };
  return (
    <div className="main">
      {/* <header className="header">
        {" "}
        <h1>Placement Ready Containent</h1>
      </header> */}
      <Header title={"Placement Ready Containent"}></Header>
      <div className="content">
        <ul>
          <li>
            <button onClick={() => previous()}>Pervious</button>
          </li>
          <li>
            <button onClick={() => next()}>Next</button>
          </li>
        </ul>
        <h1 className="h">{`${activePara + 1}.  ${
          questionsAndAnswers[activePara].question
        }`}</h1>
        <p className="p">{`=> ${questionsAndAnswers[activePara].answer}`}</p>
      </div>
    </div>
  );
}
