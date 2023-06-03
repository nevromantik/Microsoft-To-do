import React from 'react'
import style from './contextmenu.module.css'
function ContextMenu({divStyle}) {
  return (
    <div style={{display: "block",
    position: "absolute",
    backgroundColor: "#f1f1f1",
    padding: "10px",
    ...divStyle}}>ContextMenu</div>
  )
}

export default ContextMenu