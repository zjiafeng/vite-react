import React, { useState, useCallback, useEffect } from "react";
import IsHeader from './components/header'
import TodoList from './components/todolist'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const handleLink = () => {
        navigate('/demo')
    }

    return (
        <>
            <IsHeader title="这是头部" />
            <TodoList></TodoList>
            <Button type="primary" onClick={handleLink}>Go Demo</Button>
        </>
    )
}

export default Home