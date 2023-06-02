import React, { useEffect } from "react";
import { useState } from "react";
import style from "./category.module.css";
import { BsSun } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import uniqid from "uniqid";
function Categorytest() {
  const navigate = useNavigate();

  const {
    setCurrentUser,
    currentUser,

    catId,
    setCatId,
    setSelectedCategory,
    selectedCategory,
    setSelectedCatId,
    selectedDefaultCatId,
    setSelectedDefaultCatId,
  } = useContext(AppContext);

  const [newCatTitle, setNewCatTitle] = useState("");
  const handleAddCategory = () => {
    setCurrentUser((prev) => {
      const newCategoryObj = {
        title: "Nuovo elenco",
        icon: HiOutlineMenu,
        id: uniqid(),
        background: null,
      };

      const customCategory = prev.customCategory || []; // Verifica se prev.customCategory è definito come un array

      const updatedCustomCategory = [...customCategory, newCategoryObj];

      return {
        ...prev,
        customCategory: updatedCustomCategory,
      };
    });
  };
  const handleUpdateCategory = (catId) => {
    //Ho id input category
    // Ho nuovo title

    const selected = currentUser?.customCategory?.find((el) => {
      return el?.id === catId;
    });

    selected.title = newCatTitle;
    setCurrentUser((prev) => {
      return {
        ...prev,
        customCategory: currentUser.customCategory.map((el) => {
          if (el.customCategory?.id === selected?.id) {
            return { ...el, title: newCatTitle };
          } else {
            return el;
          }
        }),
      };
    });
  };
  console.log(currentUser);

  return (
    <>
      <div className={`${style.x} ${style.categoryContainer}`}>
        {currentUser?.customCategory?.map((cat, index) => {
          return (
            <div
              key={cat.id}
              className={style.category}
              onClick={() => setSelectedCatId(cat.id)}
            >
              <div
                className={style.categoryTitle}
                onClick={() => {
                  navigate("tasks");
                }}
              >
                <form
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                    borderBottom: cat.title === 'Attività' ? ' 1px solid #313131' : null,
                    paddingBottom: cat.title === 'Attività' ? '0.5rem' : null
                  }}
                  className={style.icontitlebox}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdateCategory(catId);
                  }}
                >
                   
                    {cat.title === 'La mia giornata' ? <FiHome style={{ fontSize: "1.5rem", color: "#818e98" }}/> :  <cat.icon
                      style={{ fontSize: "1.5rem", color: "#6e80c9" }}
                    /> }
                    {cat.title === 'Assegnate a me' ? <BiUser  style={{ fontSize: "1.5rem", color: "#8dbfa9" }}/> :  null }
                    {cat.title === 'Importante' ? <AiOutlineStar style={{ fontSize: "1.5rem", color: "#818e98" }}/> :  null }
                    {cat.title === 'Pianificato' ? <BiBookContent style={{ fontSize: "1.5rem", color: "#7183cf" }}/> :  null }
                    {cat.title === 'Attività' ? <BsSun style={{ fontSize: "1.5rem", color: "#818e98" }}/> :  null }

                    

                  
                  <input
                    className={style.inputTitle}
                    type="text"
                    placeholder={cat.title}
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-id={cat.id}
                    onChange={(e) => {
                      const dataId = e.target.getAttribute("data-id");
                      setCatId(dataId);
                      setNewCatTitle(e.target.value);
                    }}
                  ></input>
                </form>

                <div className={style.todocounter}>1</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.categoryInput}>
        <div className={style.addCategoryBtn}>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddCategory();
            }}
          >
            + Nuovo elenco
          </button>
        </div>
      </div>
    </>
  );
}

export default Categorytest;
