import React from 'react'
import style from './task.module.css';
import { AiOutlineStar } from "react-icons/ai";

function Task({id, title, category}) {
  return (
    <div key={id} className={style.task}>
     <div className={style.check}></div>
     <div className={style.infoTodo}>
        <p>{title}</p>
        <p className={style.todoCategory}>{category}</p>
     </div>
     <div className={style.importantIcon}>
         <AiOutlineStar style={{fontSize:'1.7rem', color: '#aeafaf'}}/>
     </div>
    </div>
  )
}

export default Task