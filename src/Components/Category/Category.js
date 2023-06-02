import React, { useEffect } from "react";
import { useState } from "react";
import style from "./category.module.css";

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
    defaultCategory,
    setDefaultCategory,
    catId,
    setCatId,
    setSelectedCategory,
    selectedCategory,
    setSelectedCatId,
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
        <div
          className={style.defaultcatbox}
          onClick={(e) => {
            navigate("tasks");
          }}
        >
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
                  }}
                  className={style.icontitlebox}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdateCategory(catId);
                  }}
                >
                  {
                    <cat.icon
                      style={{ fontSize: "1.5rem", color: "#6e80c9" }}
                    />
                  }
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
