import React from "react";
import style from "./subtasks.module.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { BsCheck } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useEffect } from "react";
function Subtask({ id, title, completed }) {
  const { selectedTodo, setSelectedTodo, setCurrentUser, currentUser } =
    useContext(AppContext);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [subtasks, setsubtasks] = useState([]);
  const [currentTodo, setCurrentTodo] = useState([])
  const deleteSub = (e) => {
    const subId = e.target.getAttribute("data-id");

    const filtered = selectedTodo?.subTasks?.filter((el) => el.id !== id);

    setSelectedTodo((prev) => {
      return { ...prev, subTasks: filtered };
    });
  };
  const handleUpdateCompletedSubtask = () => {
    const selectedSubtask = selectedTodo?.subTasks?.find((el) => el?.id === id); // subtask selezionato
    setCurrentUser((prev) => {
      return {
        ...prev,

        subTasks: prev?.subTasks?.map((el) => {
          if (el.id === selectedSubtask.id) {
            return {
              ...el,
              completed: true,
            };
          } else {
            return el;
          }
        }),
      };
    });
  };

  useEffect(() => {
    const selected = currentUser?.todos?.find((el) => el.id === selectedTodo.id); 
    setCurrentTodo(selected)
  }, [currentUser?.todos, selectedTodo.id])
  
  
  return (
    <>
    {currentTodo?.subTasks?.map((el) => {
      return <div key={el.id} className={style.subtaskForm}>
      <div
        className={style.check2}
        onMouseEnter={() => setIsHover(true)}
        onClick={handleUpdateCompletedSubtask}
      >
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
        <input className={style.subtaskinput} placeholder={el.title}></input>
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
    })}
      
    </>
  );
}

export default Subtask;
