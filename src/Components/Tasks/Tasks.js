import React, { useEffect, useState } from "react";
import style from "./tasks.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
function Tasks() {
  const { selectedCategory, setSelectedCategory, currentUser, selectedCatId } =
    useContext(AppContext);
  useEffect(() => {
    const selected = currentUser?.customCategory?.find((el) => {
      return el?.id === selectedCatId;
    });

    setSelectedCategory(selected);
  }, [selectedCatId, currentUser, selectedCategory, setSelectedCategory]);

  return (
    <div className={style.taskcontainer}>
      <div className={style.taskCategoryDateInfo}>
        <h1> {selectedCategory?.title}</h1>
        <p>venerdì 2 giugno</p>
        
      </div>
      <div className={style.optionsBtns}>
        <button>btn 1</button>
        <button>btn 2</button>
        <button>°°°</button>
      </div>
      <div className={style.sortTaskBtn}>
      <button>In ordine di importanza</button>
        <div>x</div>
      </div>
      <div className={style.tasksList}>
        TASK
      </div>
      <div className={style.addTaskBtn}>
         <input type='text'></input>
      </div>
    </div>
  );
}

export default Tasks;
