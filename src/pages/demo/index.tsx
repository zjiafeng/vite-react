import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

const Demo = () => {
    const [current, setCurrent] = useState<string | any>('');
    const navigate = useNavigate()
    const items: MenuProps['items'] = [
        { label: 'route-demo', key: '/demo/route-demo' }, // 菜单项务必填写 key
        { label: 'redux-demo', key: '/demo/redux-demo' },
        { label: 'context-demo', key: '/demo/context-demo' }
    ];

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        navigate(e.key)
        setCurrent(e.key)
    };
    
    useEffect(() => {
        console.log('123')
        setCurrent(items.find((item: any) => location.href.includes(item?.key))?.key || '')
    }, [])

    return (
        <>
            <Menu items={items} selectedKeys={[current]} mode="horizontal" onClick={onClick} />
            <Outlet />
        </>
    )
}

export default Demo