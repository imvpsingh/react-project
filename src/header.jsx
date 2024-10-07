import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ title = "" }) {
  let btnNames = [
    { name: "HOME", path: "/" },
    { name: "STORE", path: "/store" },
    { name: "TODO", path: "/todo" },
    { name: "TAB", path: "/tab" },
    { name: "FAQ", path: "/faq" },

    { name: "BLOG", path: "/blog" },
  ];
  return (
    <header>
      <nav className="tab">
        {btnNames.map((v, i) => {
          return (
            <li key={i}>
              <Link to={v.path}>{v.name}</Link>
            </li>
          );
        })}
      </nav>
      <h1>
        <u>{title}</u>
      </h1>
    </header>
  );
}
