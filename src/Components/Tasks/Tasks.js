import React, { useEffect, useState } from "react";
import style from "./tasks.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
function Tasks() {
  const {
    selectedCategory,
    setSelectedCategory,
    currentUser,
    selectedCatId,
    
  
  } = useContext(AppContext);
  useEffect(() => {
    const selected = currentUser?.customCategory?.find((el) => {
      return el?.id === selectedCatId;
    });
   
    setSelectedCategory(selected );
    console.log("SE", selectedCategory);
  }, [selectedCatId, currentUser, selectedCategory, setSelectedCategory]);

  return <div>{selectedCategory?.title} </div>;
}

export default Tasks;
