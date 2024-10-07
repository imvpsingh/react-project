import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Error404() {
  let route = useLocation().pathname;
  return (
    <center>
      <div className="blog-view-container ">
        <h1>Error 404 ! Page Not Found</h1>
        <p>
          This Page not Found For This Route :- <br></br>http://localhost:3000/
          {route}
        </p>
        <button className="btn">
          <Link to={"/"}>Gogo Home</Link>
        </button>
      </div>
    </center>
  );
}
