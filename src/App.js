import { useState } from "react";
import "./App.css";
import questionsAndAnswers from "./data/data";
import Faqs from "./faqs.jsx";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import TodoList from "./todo_list.jsx";
import ActiveTab from "./active_tab.jsx";

function App() {
  let [type, setType] = useState(questionsAndAnswers[0].id);
  let display = (message) => {
    NotificationManager.error(message);
  };
  return (
    <>
      <div className="app">
        <NotificationContainer></NotificationContainer>
        <ActiveTab display={display}></ActiveTab>
      </div>
    </>
  );
}

export default App;
