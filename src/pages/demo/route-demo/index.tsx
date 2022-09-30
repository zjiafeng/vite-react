import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { Home } from './home'
import { About } from './about'
import { Login } from './login'
import { Account } from './account'

const RouteDemo = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/demo/route-demo'>首页</NavLink></li>
                <li><NavLink to='/demo/route-demo/about/123'>关于我们</NavLink></li>
                <li>
                    <NavLink to='/demo/route-demo/account'>客户管理</NavLink>
                    <div style={{ marginLeft: '10px' }}>
                        <NavLink to='/demo/route-demo/account/list'>客户列表</NavLink><br />
                        <NavLink to='/demo/route-demo/account/form'>客户表单</NavLink>
                    </div>
                </li>
                <li><NavLink to='/demo/route-demo/login'>登录</NavLink></li>
            </ul>
            <div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about/:id' element={<About />}></Route>
                    <Route path='/account/*' element={<Account />}>
                        <Route path="*" element={<Navigate to="list" />} ></Route>
                        <Route path='list' element={<div>我是列表</div>}></Route>
                        <Route path='form' element={<div>我是表单</div>}></Route>
                    </Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default RouteDemo