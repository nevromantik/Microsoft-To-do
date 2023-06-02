import React, { useEffect, useState } from "react";
import style from "./tasks.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsArrowsFullscreen} from 'react-icons/bs';
import {BsLightbulb} from 'react-icons/bs';
import Task from "./Task";
function Tasks() {
  const { selectedCategory, setSelectedCategory, currentUser, selectedCatId } =
    useContext(AppContext);

    const [tasksList, setTasksList] = useState([])
  useEffect(() => {
    const selected = currentUser?.customCategory?.find((el) => {
      return el?.id === selectedCatId;
    });
    
    setSelectedCategory(selected);
    const filteredTasksList = currentUser?.todos?.filter((el) => el.category === selectedCategory.title)
    setTasksList(filteredTasksList)
}, [selectedCatId, currentUser, selectedCategory, setSelectedCategory]);

  return (
    <div className={style.taskcontainer}>
      <div className={style.taskCategoryDateInfo}>
        <h1> {selectedCategory?.title}</h1>
        <p>venerdì 2 giugno</p>
        
      </div>
      <div className={style.optionsBtns}>
        <button className={style.fullscreenbtn}><BsArrowsFullscreen style={{fontSize:'1rem'}}/></button>
        <button className={style.showDetailsBtn}><BsLightbulb style={{fontSize:'1rem'}}/></button>
        <button className={style.changebcBtn} style={{fontSize:'1rem'}}>°°°</button>
      </div>
      <div className={style.sortTaskBtn}>
      <button>
        <AiOutlineArrowUp style={{fontSize: '1rem', marginRight: '0.5rem'}}/>
        In ordine di importanza</button>
      </div>
      <div className={style.tasksList}>
         {tasksList?.map((el) => {
            return  <Task title={el?.title} category={el?.category} id={el?.id}/>

         })}
      </div>
      <div className={style.addTaskBtn}>
         <input type='text' placeholder="Aggiungi un'attività"></input>
      </div>
    </div>
  );
}

export default Tasks;
