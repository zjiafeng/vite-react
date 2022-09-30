import { useParams, useSearchParams } from "react-router-dom"
/**
 * useParams() 获取路由传递的一些参数
 * useSearchParams()获取?后的参数
 */

export const About = () => {
    const routeParams = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(routeParams, searchParams.get('type'))
    return <div>About id: {routeParams.id}</div>
}