import React from "react";
import style from "./subtasks.module.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { BsCheck } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
function Subtask({ id, title, completed }) {
  const { selectedTodo, setSelectedTodo, setCurrentUser, currentUser } =
    useContext(AppContext);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const deleteSub = (e) => {
    const subId = e.target.getAttribute("data-id");

    const filtered = selectedTodo?.subTasks?.filter((el) => el.id !== id);

    setSelectedTodo((prev) => {
      return { ...prev, subTasks: filtered };
    });
  };
  return (
    <>
      <div key={id} className={style.subtaskForm}>
        <div className={style.check2} onMouseEnter={() => setIsHover(true)}>
          {isHover || isClicked ? (
            <BsCheck
              style={{
                color: "white",
                position: "relative",
                left: "1px",
                top: "1px",
              }}
            />
          ) : null}
        </div>
        <div className={style.inputandicon}>
          <input className={style.subtaskinput} placeholder={title}></input>
          <BiDotsVerticalRounded
            style={{
              color: "white",
              fontSize: "1rem",
              marginTop: "0.1rem",
            }}
            data-id={id}
            onClick={(e) => deleteSub(e)}
          />
        </div>
      </div>
    </>
  );
}

export default Subtask;
