import React from "react";
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
import axios from 'axios'
function Category() {
  const { allUsers, setCurrentUser, currentUser } = useContext(AppContext);

  const [defaultCategory, setDefaultCategory] = useState([
    { title: "La mia giornata", icon: BsSun },
    { title: "Importante", icon: AiOutlineStar },
    { title: "Pianificato", icon: BiBookContent },
    { title: "Assegnate a me", icon: BiUser },
    { title: "Attività", icon: FiHome },
  ]);
  
  const [newCategory, setNewCategory] = useState(''); 

  
  const handleAddCategory = () => {
    setCurrentUser((prev) => {
      const newCategoryObj = {
        title: newCategory,
        icon: HiOutlineMenu 
      };
  
      return {
        ...prev,
        customCategory: [...prev.customCategory, newCategoryObj]
      };
    });     
    
  }
  return (
    <>
    <div className={`${style.x} ${style.categoryContainer}`}>
      <div className={style.defaultcatbox}>
        {defaultCategory.map((cat, index) => {
          return (
            <div key={index} className={style.category}>
              <div className={style.categoryTitle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={style.icontitlebox}
                >
                  {
                    <cat.icon
                      style={{
                        fontSize: "1.5rem",
                        color:
                          cat.title === "Assegnate a me"
                            ? "#8ec0aa"
                            : "#a9a9a9",
                      }}
                    />
                  }

                  <p>{cat.title}</p>
                </div>

                <div className={style.todocounter}>1</div>
              </div>
            </div>
          );
        })}
      </div>
      {currentUser?.customCategory?.map((cat, index) => {
        return (
          <div key={index} className={style.category}>
            <div className={style.categoryTitle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={style.icontitlebox}
              >
                {<cat.icon style={{ fontSize: "1.5rem", color: "#6e80c9" }} />}

                <p>{cat.title}</p>
              </div>

              <div className={style.todocounter}>1</div>
            </div>
          </div>
        );
      })}
  </div>
      <form className={style.categoryInput} onSubmit={(e) => {
        e.preventDefault(); 
        handleAddCategory()
      }}>
        <div className={style.addCategoryBtn}>
          <button>+</button>
        </div>
        <input type="text" placeholder="Nuovo elenco" onChange={(e) => setNewCategory(e.target.value)}/>
      </form>
    </>
  );
}

export default Category;
