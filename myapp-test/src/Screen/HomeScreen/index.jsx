import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./style.css";

export default function Home(props) {
  const [count, setcount] = useState(1);
  const [todo, settodo] = useState([{ 'id':0,'task': "complete the review" }])
   const [data, setdata] = useState({id:-1, task: "" });
  function addTask() {
    console.log(todo);
    settodo([...todo, data]);
    console.log(todo);
    console.log(data);
    setdata({ task: "" });
    console.log(data);
  }
  return (
    <div className="home-cont">
      <span className="home-inputfield">
        <input
          type="text"
          name="name"
          id=""
          className="inputfield1"
          placeholder={data.task}
        onChange={(e) => setdata({ id:count,task: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            setcount(count + 1);
            addTask();
          }}
          className="buttonfield"
        >
          Add
        </button>
      </span>
      <span>
        <span>todo list</span>
        <span className="todolist-cont">
          {todo.map((item) => {
            return (
              <div>
                <span>{item.task}</span>
                <span>
                  <input type="checkbox" />
                </span>
              </div>
            );
          })}
        </span>
      </span>
    </div>
      // <div>{title}</div>
  );
}