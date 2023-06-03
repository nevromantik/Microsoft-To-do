import React, { useState } from 'react'
import style from './contextmenu.module.css';
import { useContext } from "react";
import { AppContext } from "../../App";
function ContextMenu({divStyle, taskId}) {
    const {  currentUser} =
    useContext(AppContext);
    let selectedTodo = currentUser?.todos?.find((el) => el.id === taskId);
    console.log(selectedTodo)
    return (
   

    <>
      <div className={style.optionsWrap}  style={{display: "block",
    position: "absolute",
    ...divStyle}}>
        
        <div className={style.otherBtns}>
          <div className={style.completedActivity}>
            
            <button>{selectedTodo.title}</button>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default ContextMenu