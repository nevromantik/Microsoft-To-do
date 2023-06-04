import React from "react";
import style2 from "./completed.module.css";
import { useContext } from "react";
import App, { AppContext } from "../../App";
import ContextMenu from "./ContextMenu";
import { BsCheck } from "react-icons/bs";
import style from "./task.module.css";
import { AiOutlineStar } from "react-icons/ai";
function CompletedTasks({ title, id, category }) {
  return (
    <>
    <div key={id} className={style.task} >
        <div>
          <div className={style.check}>
            {" "}
            <BsCheck
              style={{
                color: "white",
                position: "relative",
                left: "1px",
                top: "1px",
              }}
            />
          </div>
        </div>
        <div className={style.infoTodo}>
          <p>{title}</p>

          <p className={style.todoCategory}>{category}</p>
        </div>
        <div className={style.importantIcon}>
          <AiOutlineStar style={{ fontSize: "1.7rem", color: "#aeafaf", position:'relative', bottom:'0.4rem' }} />
        </div>
      </div>
      
    </>
  );
}

export default CompletedTasks;
