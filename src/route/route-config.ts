import { lazy } from 'react'

const Login = lazy(() => import('@/pages/login'))
const Home = lazy(() => import('@/pages/home'))
const NotFound = lazy(() => import('@/pages/404'))
const RouteDemo = lazy(() => import('@/pages/demo/route-demo'))
const ReduxDemo = lazy(() => import('@/pages/demo/redux-demo'))
const ContextDemo = lazy(() => import('@/pages/demo/context-demo/view'))

export default [
    {
        path: '/',
        meta: {
            title: '首页',
            isLogin: true
        },
        component: Home
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: Login
    },
    {
        path: '/demo',
        component: lazy(() => import('@/pages/demo')),
        children: [
            {
                path: '',
                redirect: '/demo/route-demo',
            },
            {
                path: '/demo/route-demo/*',
                meta: {
                    title: 'react-route',
                    isLogin: true
                },
                component: RouteDemo,
            },
            {
                path: '/demo/redux-demo',
                meta: {
                    title: 'react-redux',
                    isLogin: true
                },
                component: ReduxDemo
            },
            {
                path: '/demo/context-demo',
                meta: {
                    title: 'react-context',
                    isLogin: true
                },
                component: ContextDemo
            }
        ]
    },
    {
        path: '*',
        meta: {
            title: '404'
        },
        component: NotFound
    }
]