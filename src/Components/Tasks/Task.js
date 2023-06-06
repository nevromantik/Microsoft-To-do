import React, { useEffect } from "react";
import style from "./task.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import ContextMenu from "./ContextMenu";
import { BsCheck } from "react-icons/bs";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useRef } from "react";
import bip from "../../Assets/bip.mp3";
function Task({
  id,
  title,
  category,
  showDiv,
  divStyle,
  handleContextMenu,
  handleMouseDown,
  todoId,
  setShowDiv,
}) {
  const audioRef = useRef(null);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const {
    completed,
    setCompleted,
    currentUser,
    setCurrentUser,
    selectedCategory,
  } = useContext(AppContext);
  const handleUpdateCompletedTask = (id) => {
    const selectedTodo = currentUser?.todos.find((el) => el?.id === id); // todo selezionato
    setCurrentUser((prev) => {
      return {
        ...prev,
        todos: prev.todos.map((el) => {
          if (el.id === selectedTodo.id) {
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
  const handleCheckClick = (event) => {
    event.stopPropagation(); // Ferma la propagazione dell'evento
    handleUpdateCompletedTask(id);
    setIsClicked(!isClicked);

    //suono
  };
  useEffect(() => {
    const completed = currentUser?.todos?.filter((el) => {
      return el.completed === true && el.category === category;
    });

    setCompleted(completed);
    if (isClicked) {
      audioRef.current.play();
    }
  }, [category, currentUser?.todos, setCompleted, isClicked]);
  return (
    <>
      <audio ref={audioRef}>
        <source src={bip} type="audio/mpeg" />
      </audio>
      <div
        key={id}
        className={style.task}
        onContextMenu={handleContextMenu}
        onMouseDown={handleMouseDown}
        onMouseLeave={() => setIsHover(false)}
      >
        <div>
          <div
            className={style.check}
            onMouseEnter={() => setIsHover(true)}
            onClick={handleCheckClick}
          >
            {" "}
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
        </div>
        <div className={style.infoTodo}>
          <p style={{ textDecoration: isClicked ? "line-through" : "" }}>
            {title}
          </p>

          <p className={style.todoCategory}>{category}</p>
        </div>
        <div className={style.importantIcon}>
          <AiOutlineStar style={{ fontSize: "1.7rem", color: "#aeafaf" }} />
        </div>
      </div>
      {showDiv ? (
        <ContextMenu
          divStyle={divStyle}
          taskId={todoId}
          setShowDiv={setShowDiv}
        />
      ) : null}
    </>
  );
}

export default Task;
