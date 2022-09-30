import React from 'react'
import { Outlet } from "react-router-dom"
// Outlet 将其用于父组件中可以为子路由的元素占位，并最终渲染子路由的元素

export const Account = () => {
    return(
        <>
            <h2>客户管理</h2>
            <Outlet/>
        </>
    )
}
