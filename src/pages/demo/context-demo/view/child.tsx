import { useUIContext } from '../ui-context';
import React, { useMemo } from 'react';
import { Button } from 'antd';

export const Child = () => {
    const UIContext = useUIContext();
    const UIProps = useMemo(() => {
        return {
            queryParams: UIContext.queryParams,
            setQueryParamsBase: UIContext.setQueryParamsBase,
            funLog: UIContext.funLog,
            change: UIContext.change
        };
    }, [UIContext]);

    const handleClick = () => {
        UIProps.funLog()
    }
    return (
        <>
            {
                Object.keys(UIProps.queryParams).map((item, index) => <p key={index}>{item}：{UIProps.queryParams[item]}</p>)
            }
            <Button type="primary" onClick={handleClick}>测试</Button>
            <Button type="primary" onClick={UIProps.change}>change</Button>
        </>
    )
} 