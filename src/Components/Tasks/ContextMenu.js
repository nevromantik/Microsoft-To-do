import React, { useState } from "react";
import style from "./contextmenu.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
function ContextMenu({ divStyle, taskId, showDiv, setShowDiv }) {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const filteredTodo = () => {
    const filtered = currentUser?.todos?.filter((el) => el.id !== taskId);

    setCurrentUser((prev) => {
      return { ...prev, todos: filtered };
    });
    setShowDiv(false);
  };

  return (
    <>
      <div
        className={style.optionsWrap}
        style={{ display: "block", position: "absolute", ...divStyle }}
      >
        <div className={style.otherBtns}>
          <div className={style.importantTodo}>
            <button>Segna come importante</button>
          </div>
          <div className={style.completedTodo}>
            <button>Segna come completata</button>
          </div>
          <div>
            <button>In scadenza oggi</button>
          </div>
        
          <div>
            <button>In scadenza domani</button>
          </div>
          <div>
            <button>Seleziona data</button>
          </div>
          <div>
            <button>Sposta attività in</button>
          </div>

          <div className={style.completedActivity}>
            <button onClick={() => filteredTodo()}>Elimina attività"</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContextMenu;
