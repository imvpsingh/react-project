import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import TodoList from "./todo_list";
import Faqs from "./faqs";
import Header from "./header";
import ActiveTab from "./active_tab";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Blog from "./Blog";
import BlogView from "./BlogView";
import Error404 from "./Error404";
import Home from "./Home";
import Store from "./Store";
let display = (message) => {
  NotificationManager.error(message);
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home display={display}></Home>,
  },
  {
    path: "/todo",
    element: <TodoList display={display}></TodoList>,
  },
  {
    path: "/faq",
    element: <Faqs display={display}></Faqs>,
  },
  {
    path: "/tab",
    element: <ActiveTab display={display}></ActiveTab>,
  },
  {
    path: "/blog",
    element: <Blog display={display}></Blog>,
  },
  {
    path: "/store",
    element: <Store display={display}></Store>,
  },
  {
    path: "/blog/:id",
    element: <BlogView display={display}></BlogView>,
  },
  {
    path: "*",
    element: <Error404 display={display}></Error404>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationContainer></NotificationContainer>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
