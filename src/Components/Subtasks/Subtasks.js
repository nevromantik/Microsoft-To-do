import React from "react";
import style from "./subtasks.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { AiOutlineStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import uniqid from 'uniqid';
import { BsCheck } from "react-icons/bs";
import Subtask from "./Subtask";
function Subtasks() {
  const { selectedTodo, setSelectedTodo, setCurrentUser, currentUser } = useContext(AppContext);
  const [newSubs, addNewSub] = useState('');
  const [updatedSelectedTodo, setUpdatedSelectedTodo] = useState(selectedTodo); // Aggiunto nuovo stato

  const handleAddSubtask = () => {
    const newSub = {
        id: uniqid(),
        title: newSubs,
        category: selectedTodo.category,
        completed: false,
        
      };
      setCurrentUser((prevUser) => {
        const updatedTodos = prevUser.todos.map((todo) => {
          if (todo.id === selectedTodo.id) {
            return {
              ...todo,
              subTasks: [...todo.subTasks, newSub],
            };
          }
          return todo;
        });
    
        return {
          ...prevUser,
          todos: updatedTodos,
        };
      });

      console.log(currentUser?.todos, 'CURRENT')

  }




  
  
  return (
    <>
      

      <div className={style.subTodosWrap}>
      <div className={style.subtodosSubWrap}>
        <div className={style.todoandsubtodos}>
          <div className={style.todo}>
            <div className={style.check} 
          >
                    
            </div>
            <h4 className={style.title}>{selectedTodo.title}</h4>
            <AiOutlineStar
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginTop: "0.3rem",
                marginLeft: "6rem",
              }}
            />
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleAddSubtask()
          }}> 

              <Subtask  />

            <div className={style.inputAddSub}>
            <button type='submit'>              <AiOutlinePlus style={{fontSize: '1rem', color: 'white', marginLeft: '0.3rem'}} />
</button>
              <input type='text' placeholder="Passaggio successivo" onChange={(e) => addNewSub(e.target.value)} />
              
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
   
  );
}

export default Subtasks;
