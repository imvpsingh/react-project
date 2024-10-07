import React from "react";
import Header from "./header";
import Form from "./Form";
import "./Home.css";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import questionsAndAnswers from "./data/data";
import PasswordGenrator from "./PasswordGenrator";
import Weather from "./Weather";

export default function Home({ display }) {
  let data = questionsAndAnswers.map((v, i) => {
    return (
      <div key={i}>
        {i < 6 ? (
          <div className="home-box">
            <h1>{v.question}</h1>
            <p>{v.answer}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  });
  return (
    <div className="main-screen">
      <Header title="Home Page"></Header>
      <Weather></Weather>
      <PasswordGenrator />
      <div className="box">{data}</div>
      <Form display={display}></Form>
    </div>
  );
}
