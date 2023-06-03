import React from "react";
import style from "./options.module.css";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { AppContext } from "../../App";
import {AiOutlineCheckCircle} from 'react-icons/ai'
function Options() {
  const {
    selectedCategory,
    setSelectedCategory,
    currentUser,
    backgroundImages,
  } = useContext(AppContext);

  return (
    <>
      <div className={style.optionsWrap}>
        <div className={style.sortBtns}>
          <HiArrowsUpDown style={{fontSize: '1.4rem', marginTop: '0.5rem', position: 'relative', left: '0.5rem'}}/>
          <p style={{position: 'relative', bottom: '0.1rem', left: '1.3rem'}}>Ordina per</p>
          <IoIosArrowForward style={{fontSize: '1.4rem', marginLeft: '12rem', marginTop: '0.5rem'}}/>
        </div>
        <div className={style.iconBcWrap}>
          <div >
            <p style={{marginLeft: '0.8rem'}}>Tema</p>
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
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.otherBtns}>
          <div className={style.completedActivity}>
            <AiOutlineCheckCircle style={{fontSize: '1.4rem', marginLeft: '0.5rem'}}/>
            <button>Mostra attività completate</button>
          </div>
          
        </div>
      </div>

      {/*<div className={style.sortCalendar}>

  </div>*/}
    </>
  );
}

export default Options;
