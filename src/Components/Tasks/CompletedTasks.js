import React from "react";
import style from "./completed.module.css";
import { useContext } from "react";
import App, { AppContext } from "../../App";
function CompletedTasks({title, id}) {
  return (
    <div key={id}>
      <p>{title}</p>
    </div>
  );
}

export default CompletedTasks;
