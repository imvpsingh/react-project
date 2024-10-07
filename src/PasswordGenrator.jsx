import React, { useState } from "react";
import "./PasswordGenrator.css";
import { Lovercase, Number, Uparcase, Symbol } from "./data/PassChar";
import { toast, ToastContainer } from "react-toastify";

export default function PasswordGenrator() {
  let [uc, setUc] = useState(false);
  let [lc, setLc] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passlen, setPasslen] = useState(10);
  let [finalPass, setFinalPass] = useState("");

  let genrate = () => {
    if (uc || lc || number || symbol) {
      let genPass = "";
      let finalPassword = "";
      if (lc) genPass += Lovercase;
      if (number) genPass += Number;
      if (symbol) genPass += Symbol;
      if (uc) genPass += Uparcase;
      for (let i = 0; i < passlen; i++) {
        finalPassword += genPass.charAt(
          Math.floor(Math.random() * genPass.length)
        );
      }
      setFinalPass(finalPassword);
    } else {
      toast.error("Select Atleast One");
    }
  };
  let copyPass = () => {
    if (finalPass != "") {
      toast.success("Copy Successfull");
      navigator.clipboard.writeText(finalPass);
      setFinalPass("");
    }
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="passBox">
        <h1 className="h">Password Genrator</h1>
        <div className="inputBox">
          <input readOnly value={finalPass}></input>
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passlen">
          <label>Password Length</label>
          <input
            type="number"
            min={10}
            max={20}
            value={passlen}
            onChange={(event) => setPasslen(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Uparcase</label>
          <input
            type="checkbox"
            checked={uc}
            onChange={() => setUc(!uc)}
          ></input>
        </div>
        <div>
          <label>Lovercase</label>
          <input
            type="checkbox"
            checked={lc}
            onChange={() => setLc(!lc)}
          ></input>
        </div>
        <div>
          <label>Number</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          ></input>
        </div>
        <div>
          <label>Symbol</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          ></input>
        </div>
        <button className="mbtn" onClick={genrate}>
          Genrate Password
        </button>
      </div>
    </div>
  );
}
