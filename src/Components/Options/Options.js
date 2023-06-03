import React, { useState } from "react";
import style from "./options.module.css";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { AppContext } from "../../App";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

function Options() {
  const {
    selectedCategory,
    setSelectedCategory,
    currentUser,
    backgroundImages,
    setCurrentUser,
    selectedCat,
    catIdForBg,
    selectedCatId, setSelectedCatId
  } = useContext(AppContext);
  const [openSortBtn, setOpenSortBtn] = useState(false);
  const [bg, setBg] = useState({})
  const [selectedC, setSelectedC] = useState({});
  const handleChangeBg = (id) => {
    const selected = currentUser?.customCategory?.find((el) => el?.id === selectedCatId);
    const selectedColor = backgroundImages.colors.find((color) => color.id === id);
    const selectedImage = backgroundImages.imgs.find((img) => img.id === id);
  
    setCurrentUser((prev) => {
      return {
        ...prev,
        customCategory: prev.customCategory.map((el) => {
          if (el.id === selected?.id) {
            return {
              ...el,
              background: selectedColor || selectedImage,
            };
          } else {
            return el;
          }
        }),
      };
    });
  };


  return (
    <>
      <div className={style.optionsWrap}>
        <div
          className={style.sortBtns}
          onMouseEnter={() => setOpenSortBtn(!openSortBtn)}
        >
          <HiArrowsUpDown
            style={{
              fontSize: "1.4rem",
              marginTop: "0.5rem",
              position: "relative",
              left: "0.5rem",
            }}
          />
          <p style={{ position: "relative", bottom: "0.1rem", left: "1.3rem" }}>
            Ordina per
          </p>
          <IoIosArrowForward
            style={{
              fontSize: "1.4rem",
              marginLeft: "12rem",
              marginTop: "0.5rem",
            }}
          />
        </div>
        <div className={style.iconBcWrap}>
          <div>
            <p style={{ marginLeft: "0.8rem" }}>Tema</p>
          </div>
          <div className={style.iconsBc}>
            {backgroundImages.colors.map((color) => {
              return (
                <div
                  key={color.id}
                  style={{
                    backgroundColor: color.hex,
                    height: "50px",
                    width: "50px",
                    marginRight: "0.3rem",
                    marginBottom: "0.3rem",
                  }}
                  onClick={() => {
                    handleChangeBg(color.id);
                  }}
                ></div>
              );
            })}
            {backgroundImages.imgs.map((img) => {
              return (
                <div
                  key={img.id}
                  style={{ marginRight: "0.3rem", marginBottom: "0.3rem" }}
                >
                  <img
                    src={img.url}
                    alt="theme images"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                    onClick={() => {
                      handleChangeBg(img.id);
                    }}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.otherBtns}>
          <div className={style.completedActivity}>
            <AiOutlineCheckCircle
              style={{ fontSize: "1.4rem", marginLeft: "0.5rem" }}
            />
            <button>Mostra attività completate</button>
          </div>
        </div>
      </div>
      {openSortBtn ? (
        <div className={style.sortCalendar}>
          <div className={style.otherSortBtn}>
            <AiOutlineStar
              style={{
                fontSize: "1.4rem",
                marginLeft: "0.5rem",
                marginTop: "0.6rem",
              }}
            />{" "}
            <p>Importanza</p>
          </div>
          <div className={style.otherSortBtn}>
            <BsCalendarDate
              style={{
                fontSize: "1.4rem",
                marginLeft: "0.5rem",
                marginTop: "0.6rem",
              }}
            />{" "}
            <p>Data di scadenza</p>
          </div>
          <div className={style.otherSortBtn}>
            <MdCreateNewFolder
              style={{
                fontSize: "1.4rem",
                marginLeft: "0.5rem",
                marginTop: "0.6rem",
              }}
            />{" "}
            <p>Data di creazione</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Options;
