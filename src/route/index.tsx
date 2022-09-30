// import * as React from 'react'
// import { lazy, Suspense } from 'react'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { routeConfig } from './routeConfig'
// import SuspenseLoading from '@/components/suspenseLoading'
// const Login = lazy(() => import('@/pages/login'))
// const RouteDemo = lazy(() => import('@/pages/route-demo'))

// const RouterConfig = () => {
//     return (
//         <BrowserRouter>
//             <Suspense fallback={<SuspenseLoading />}>
//                 <Routes>
//                     <Route path="/login" element={<Login />}></Route>
//                     {
//                         routeConfig.map((route: any, i) => (
//                             <Route key={route.path || i} path={route.path} element={<route.component />}></Route>
//                         ))
//                     }
//                     <Route path="*" element={<Navigate to="/login" />}></Route>
//                 </Routes>
//             </Suspense>
//         </BrowserRouter>
//     )
// }

// export default RouterConfig

// import { Navigate, useRoutes } from 'react-router-dom'
// import routes from './route-config'
// // 渲染路由
// const renderRoutes = (routes: any) => {
//   return routes.map((item: any) => {
//     const route:any = { meta: item.meta, path: item.path }
//     if (item.component) {
//       // element 要接收react.element类型 item.component 是对象 所以要转一下
//       route.element = <item.component />
//     }
//     if (item.children) {
//       route.children = renderRoutes(item.children)
//     }
//     if (item.redirect) {
//       route.element = <Navigate to={item.redirect} />
//     }
//     return route
//   })
// }

// export default function Router () {
//   // useRoutes API 把路由数组整合为 <Router> <Route path="xx" element="xxx"></Route>等 </Router>的路由组件  直接用于BrowserRouter中
//   console.log(renderRoutes(routes))
//   return useRoutes(renderRoutes(routes))
// }

import { Suspense } from 'react' // Suspense的作用是「划分页面中需要并发渲染的部分」
import { Navigate, useRoutes } from 'react-router-dom'
import routes from './route-config'
// 拦截
const RouterBeforeEach = (props: { route: any, children: any }) => {
    if (props?.route?.meta?.title) {
        document.title = props.route.meta.title;
    }
    // const isLogin: boolean = !!Cookies.get('userInfo')
    const isLogin: boolean = true
    if (props?.route?.meta?.isLogin) {
        if (!isLogin) {
            return <Navigate to={'/login'} replace />
        }
    }
    // const location = useLocation()
    const location = { pathname: '' }
    const routerKey = location.pathname
    if (isLogin && ['/login'].includes(routerKey)) {
        return <Navigate to={'/'} replace />
    }
    return (
        <Suspense>
            {props.children}
        </Suspense>
    )
}
// 渲染路由
const renderRoutes = (routes: any) => {
    return routes.map((item: any) => {
        const route: any = { meta: item.meta, path: item.path }
        if (item.component) {
            // element 要接收react.element类型 item.component 是对象 所以要转一下
            // 看着里看着里 
            route.element = <RouterBeforeEach route={item}><item.component /></RouterBeforeEach>
        }
        if (item.children) {
            route.children = renderRoutes(item.children)
        }
        if (item.redirect) {
            route.element = <Navigate to={item.redirect} />
        }
        return route
    })
}

export default function Router() {
    // console.log(renderRoutes(routes));
    
    // useRoutes API 把路由数组整合为 <Router> <Route path="xx" element="xxx"></Route>等 </Router>的路由组件  直接用于BrowserRouter中
    return useRoutes(renderRoutes(routes))
}