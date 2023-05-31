import React from 'react'
import style from './login.module.css';
import { Outlet } from 'react-router-dom';
function LoginLayout() {
  return (
    <div className={style.loginContainer}>
        <div className={style.box}>
            <Outlet/>
        </div>
    </div>
  )
}

export default LoginLayout