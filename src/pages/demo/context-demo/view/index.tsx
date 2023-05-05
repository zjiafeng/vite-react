/*
 * @Author: jiafeng 2621275142@qq.com
 * @Date: 2022-09-30 15:10:43
 * @LastEditors: jiafeng 2621275142@qq.com
 * @LastEditTime: 2023-02-08 15:43:48
 * @FilePath: \vite-react\src\pages\demo\context-demo\view\index.tsx
 */
import { UIProvider } from '../ui-context';
import { Child } from './child'
import { useRef } from 'react'
const ContextDemo = () => {
    const UIEvents = {
        funLog: () => {
            console.log('测试')
        }
    }

    const modelRef: any = useRef(null);
    const handleModel = () => {
        modelRef.current.model()
    }

    return (
        <UIProvider UIEvents={UIEvents}>
            <Child ref={modelRef} />
            <button onClick={handleModel}>确定</button>
        </UIProvider>
    )
}

export default ContextDemo