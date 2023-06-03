import React from 'react'
import style from './contextmenu.module.css'
function ContextMenu({divStyle}) {
  return (


    <>
      <div className={style.optionsWrap}  style={{display: "block",
    position: "absolute",
    ...divStyle}}>
        
        <div className={style.otherBtns}>
          <div className={style.completedActivity}>
            
            <button>Mostra attività completate</button>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default ContextMenu