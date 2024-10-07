// import.jsx

// React and ReactDOM
export { default as React } from "react";
export { default as ReactDOM } from "react-dom/client";

// Custom Components
export { default as App } from "./App";
export { default as TodoList } from "./todo_list";
export { default as Faqs } from "./faqs";
export { default as Header } from "./header";
export { default as ActiveTab } from "./active_tab";
export { default as Blog } from "./Blog";
export { default as BlogView } from "./BlogView";
export { default as Error404 } from "./Error404";
export { default as Home } from "./Home";

// React Router
export { createBrowserRouter, RouterProvider } from "react-router-dom";

// Notifications
export {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

// Other modules (e.g., CSS files, utilities)
export { default as reportWebVitals } from "./reportWebVitals";
