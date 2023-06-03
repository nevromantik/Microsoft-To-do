import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./dashboard.module.css";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext } from "react";

function DashboardLayout() {
  const { selectedCategory } = useContext(AppContext);
  console.log(selectedCategory);

  // Ottieni l'URL dell'immagine dalla proprietà selectedCategory
  const backgroundImageUrl = selectedCategory?.background?.url;

  return (
    <div className={style.dashboard}>
      <Sidebar />
      <div
        className={`${style.dashboardSections} ${style.dynamicBackground}`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition:
            backgroundImageUrl ===
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkA…tMDYtMDNUMDY6MzE6MDcrMDA6MDC02gFcAAAAAElFTkSuQmCC" ? '577px 302px' : 'center center',
            backgroundRepeat: 'no-repeat',
          backgroundCover:  backgroundImageUrl !==
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkA…tMDYtMDNUMDY6MzE6MDcrMDA6MDC02gFcAAAAAElFTkSuQmCC" ? '' : 'cover'
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
