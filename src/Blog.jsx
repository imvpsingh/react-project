import React from "react";
import Header from "./header";
import "./Blog.css";
import questionsAndAnswers from "./data/data";
import { Link } from "react-router-dom";

export default function Blog() {
  let blogs = questionsAndAnswers.map((value) => {
    return (
      <div className="blog-item">
        <h1>{`${value.id}. ${value.question}`}</h1>
        <p>{value.answer}</p>
        <button>
          <Link to={`/blog/${value.id}`}>View More</Link>
        </button>
      </div>
    );
  });
  return (
    <>
      <Header title="Our Blog"></Header>
      <div className="blog-container">{blogs}</div>
    </>
  );
}
