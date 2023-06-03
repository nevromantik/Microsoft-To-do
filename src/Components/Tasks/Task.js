import React from "react";
import style from "./task.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import ContextMenu from "./ContextMenu";
function Task({ id, title, category, showDiv, divStyle, handleContextMenu, handleMouseDown }) {
 
  return (
    <>
      <div
        key={id}
        className={style.task}
        onContextMenu={handleContextMenu}
        onMouseDown={handleMouseDown}
      >
        <div>
          <div className={style.check}></div>
        </div>
        <div className={style.infoTodo}>
          <p>{title}</p>

          <p className={style.todoCategory}>{category}</p>
        </div>
        <div className={style.importantIcon}>
          <AiOutlineStar style={{ fontSize: "1.7rem", color: "#aeafaf" }} />
        </div>
      </div>
      {showDiv ? <ContextMenu divStyle={divStyle} /> : null}
    </>
  );
}

export default Task;
