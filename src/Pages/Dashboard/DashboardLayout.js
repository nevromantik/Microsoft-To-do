import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from './dashboard.module.css';
import { Outlet } from 'react-router-dom';
function DashboardLayout() {
  return (
    <div className={style.dashboard}>
        <Sidebar/>
        <div className={style.dashboardSections}>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout