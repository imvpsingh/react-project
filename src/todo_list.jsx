import React, { useState } from "react";
import "./todo_list.css";
import Header from "./header";

export default function TodoList({ display }) {
  let [todoList, setTodoList] = useState([]);
  let onSubmit = (event) => {
    let todoName = event.target.todoInput.value;
    if (!todoList.includes(todoName)) {
      let finalTodoList = [...todoList, todoName];
      setTodoList(finalTodoList);
    } else {
      display("This Todo is Allredy Add");
    }

    event.preventDefault();
  };
  let list = todoList.map((value, index) => {
    return (
      <TodoListItem
        key={index}
        value={value}
        todoList={todoList}
        index={index}
        setTodoList={setTodoList}
      >
        {" "}
      </TodoListItem>
    );
  });

  return (
    <div className="">
      {/* <header>
        {" "}
        <h1> </h1>
      </header> */}
      <Header title={"ADD YOUR TODO"}></Header>
      <div className="main">
        <form onSubmit={onSubmit}>
          <div className="todoDiv">
            <input type="text" name="todoInput"></input>
            <button>Save</button>
          </div>
        </form>
        <div className="todoItem">
          <h1>{`My TODO ${0}/${todoList.length}`}</h1>
          {todoList.length === 0 ? <h2>No data Found</h2> : <ul>{list}</ul>}
        </div>
      </div>
    </div>
  );
}

function TodoListItem({ setTodoList, index, todoList, value }) {
  let removeTodo = () => {
    let newList = todoList.filter((v, i) => i !== index);
    setTodoList(newList);
  };

  let [complete, setComplete] = useState(false);
  return (
    <li
      onClick={() => setComplete(!complete)}
      className={complete ? "todoComplete" : ""}
    >
      {`${index + 1}. ${value}`}
      <span onClick={removeTodo}>&times;</span>
    </li>
  );
}
