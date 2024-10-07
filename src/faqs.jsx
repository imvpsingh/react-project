import React from "react";
import questionsAndAnswers from "./data/data";
import { useState } from "react";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import Header from "./header";

export default function Faqs() {
  let [type, setType] = useState(questionsAndAnswers[0].id);

  let item = questionsAndAnswers.map((dataItem, i) => {
    let itemDetials = {
      type,
      setType,
      dataItem,
    };
    return <FaqItems itemDetials={itemDetials} id={i} key={i}></FaqItems>;
  });

  return (
    <>
      <Header title={"Most import Question"}></Header>
      <div className="menu">{item}</div>
    </>
  );
}

function FaqItems({ itemDetials, i }) {
  let display = (message = "nothing") => {
    NotificationManager.success(message);
  };
  let { type, setType, dataItem } = itemDetials;
  return (
    <>
      <div className="item">
        <h2 onClick={() => setType(dataItem.id)}>
          {dataItem.question} {<span>&#10225;</span>}
        </h2>
        <p
          className={type === dataItem.id ? "tab" : ""}
          onClick={() => display(dataItem.answer)}
        >
          {dataItem.answer}
        </p>
      </div>
    </>
  );
}
