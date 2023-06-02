import React, { useEffect, useState } from "react";
import style from "./sidebar.module.css";
import { AppContext } from "../../App";
import { useContext } from "react";
import Category from "../Category/Category";
function Sidebar() {
  const { currentUser } = useContext(AppContext);

  const { fullname } = currentUser;
  const [initials, setInitials] = useState("");
  useEffect(() => {
    const nameParts = fullname?.split(" ");
    let initials = "";

    nameParts?.forEach((part) => {
      initials += part.charAt(0);
    });

    setInitials(initials);
  }, [fullname]);

  return (
    <>
    <div className={style.sidebarwrap}>
      <div className={style.userinfo}>
        <div className={style.useravatar}>{initials}</div>
        <div className={style.userdatainfo}>
          <p className={style.usernameinfo}>{currentUser?.fullname}</p>
          <p>{currentUser?.email}</p>
        </div>
      </div>
      <div className={style.navinputwrap}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={style.navcategorywrap}>
    <Category />
  </div>
    </div>
    
    
  </>
  );
}

export default Sidebar;
