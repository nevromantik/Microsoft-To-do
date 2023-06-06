import React from "react";
import style from "./login.module.css";
import { Outlet } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";


function LoginLayout() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  
    
  }, [isLoading, setIsLoading])
  

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={style.loginContainer}>
          <div className={style.box}>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default LoginLayout;
