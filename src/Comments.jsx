import React from "react";
import "./Coments.css";

export default function Comments(props) {
  return (
    <>
      <h1 className="hedding">Comments</h1>
      <div className="comment">
        {}
        <div className="comment-box">
          <h1 className="name">Name</h1>
          <h2>Location</h2>
          <p>
            This IS MY COMMENT ABOUT
            <br></br>
            KOMAL KA LAO KAOA JAIA JAHD DIANDA
          </p>
        </div>
        <div className="comment-box">
          <h1 className="name">Name</h1>
          <h2>Location</h2>
          <p>
            This IS MY COMMENT ABOUT
            <br></br>
            KOMAL KA LAO KAOA JAIA JAHD DIANDA
          </p>
        </div>
        <div className="comment-box">
          <h1 className="name">Name</h1>
          <h2>Location</h2>
          <p>
            This IS MY COMMENT ABOUT
            <br></br>
            KOMAL KA LAO KAOA JAIA JAHD DIANDA
          </p>
        </div>
      </div>
    </>
  );
}
