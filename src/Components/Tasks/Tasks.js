import React, { useEffect, useState } from "react";
import style from "./tasks.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import uniqid from 'uniqid'
import Task from "./Task";
import Options from "../Options/Options";
function Tasks() {
  const { selectedCategory, setSelectedCategory, currentUser, setCurrentUser, selectedCatId, options, setOptions} =
    useContext(AppContext);
    const [showDiv, setShowDiv] = useState(false);
    const [divStyle, setDivStyle] = useState({});
  
    const handleContextMenu = (event) => {
      event.preventDefault();
      setShowDiv(true);
      setDivStyle({ left: event.clientX, top: event.clientY });
    };
  
    const handleMouseDown = () => {
      setShowDiv(false);
    };


  const [tasksList, setTasksList] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  useEffect(() => {
    const selected = currentUser?.customCategory?.find((el) => {
      return el?.id === selectedCatId;
    });

    setSelectedCategory(selected);
    const filteredTasksList = currentUser?.todos?.filter(
      (el) => el.category === selectedCategory.title
    );
    setTasksList(filteredTasksList);
  }, [selectedCatId, currentUser, selectedCategory, setSelectedCategory]);
   
  const handleNewTodo = () => {
    const newTodo = {
        id: uniqid(),
        title: newTodoTitle,
        category: selectedCategory.title,
        subTasks: []
    }
   setCurrentUser((prev) => {
    return {...prev, todos: [...prev.todos, newTodo]}
   });
  }
  return (
    <div className={style.taskcontainer}>
      <div className={style.taskCategoryDateInfo}>
        <h1> {selectedCategory?.title}</h1>
        <p>venerdì 2 giugno</p>
      </div>
      <div className={style.optionsBtns}>
        <button className={style.fullscreenbtn}>
          <BsArrowsFullscreen style={{ fontSize: "1rem" }} />
        </button>
        <button className={style.showDetailsBtn}>
          <BsLightbulb style={{ fontSize: "1rem" }} />
        </button>
        <button className={style.changebcBtn} style={{ fontSize: "1rem" }} onClick={(e) => {
          e.preventDefault();
          setOptions(!options)
        }}>
          °°°
        </button>
        <div>
        {options ? <Options/> : null}
        </div>
        
      </div>
      <div className={style.sortTaskBtn}>
        <button>
          <AiOutlineArrowUp
            style={{ fontSize: "1rem", marginRight: "0.5rem" }}
          />
          In ordine di importanza
        </button>
      </div>
      <div className={style.tasksList}>
        {tasksList?.map((el) => {
          return <Task title={el?.title} category={el?.category} id={el?.id} showDiv={showDiv}
          divStyle={divStyle}
          handleContextMenu={handleContextMenu}
          handleMouseDown={handleMouseDown} />;
        })}
      </div>
      <form className={style.addTaskBtn} onSubmit={(e => {
        e.preventDefault();
        handleNewTodo()
      })} >
        <input type="text" placeholder="Aggiungi un'attività" onChange={(e) => {
            setNewTodoTitle(e.target.value)
        }} ></input>
      </form>
    </div>
  );
}

export default Tasks;
