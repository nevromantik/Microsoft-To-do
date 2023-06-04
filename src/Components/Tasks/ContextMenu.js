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
          <div>
            <p>I</p>
            <p>Rimuovi da "La mia giornata"</p>
            {/**o aggiungi  */}
          </div>
          <div>
            <p>I</p>
            <p>Segna come importante</p>
          </div>
          <div>
            <p>I</p>
            <p>Segna come completata</p>
            {/**o aggiungi  */}
          </div>
          <div>
            <p>I</p>
            <p>In scadenza oggi</p>
            {/**o aggiungi  */}
          </div>
          <div>
            <p>I</p>
            <p>In scadenza domani</p>
            {/**o aggiungi  */}
          </div>
          <div>
            <p>I</p>
            <p>Seleziona data</p>
            {/**o aggiungi  */}
          </div>
          <div>
            <p>I</p>
            <p>Sposta attività in</p>
            {/**o aggiungi  */}
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
