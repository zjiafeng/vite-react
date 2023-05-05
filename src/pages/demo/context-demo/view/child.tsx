/*
 * @Author: jiafeng 2621275142@qq.com
 * @Date: 2022-09-30 15:17:44
 * @LastEditors: jiafeng 2621275142@qq.com
 * @LastEditTime: 2023-02-08 15:44:49
 * @FilePath: \vite-react\src\pages\demo\context-demo\view\child.tsx
 */
import { useUIContext } from '../ui-context';
import React, { useMemo, useState, useImperativeHandle, forwardRef } from 'react';
import { Button } from 'antd';

export const Child = forwardRef((props, cref) => {
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

    const [visible, setVisible] = useState(false);
    useImperativeHandle(cref, () => ({
        // model 就是暴露给父组件的方法
        model: () => {
          setVisible(true);
        }
      }));
  
    return (
        <>
            {
                Object.keys(UIProps.queryParams).map((item, index) => <p key={index}>{item}：{UIProps.queryParams[item]}</p>)
            }
            <Button type="primary" onClick={handleClick}>测试</Button>
            <Button type="primary" onClick={UIProps.change}>change</Button>
            {visible.toString()}
        </>
    )
})