import React from "react";
import questionsAndAnswers from "./data/data";
import { useLocation, Link } from "react-router-dom";

export default function BlogView() {
  let currentId = useLocation().pathname.split("/")[2];
  let BlogData = questionsAndAnswers.filter((v) => v.id == currentId)[0];

  return (
    <center>
      <div className="blog-view-container">
        <h1>{`${BlogData.id}. ${BlogData.question}`}</h1>
        <p>{BlogData.answer}</p>
        <button className="btn">
          <Link to={`/blog`}>Go Back</Link>
        </button>
      </div>
    </center>
  );
}
