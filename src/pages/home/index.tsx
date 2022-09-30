import React, { useState, useCallback, useEffect } from "react";
import IsHeader from './components/header'
import TodoList from './components/todolist'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const [inputShow, setInputShow] = useState(false),
        [todoList, setTodoList] = useState([])

    const onShow = () => {
        setInputShow(!inputShow)
    }

    const handleLink = () => {
        navigate('/demo')
    }

    return (
        <>
            <IsHeader title="这是头部" onShow={onShow} />
            <TodoList list={todoList}></TodoList>
            <Button type="primary" onClick={handleLink}>Go Demo</Button>
        </>
    )
}

export default Home