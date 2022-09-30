import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    return (
        <div onClick={goHome}>Login: 去首页</div>
    )
}