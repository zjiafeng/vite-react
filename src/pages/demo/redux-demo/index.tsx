import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, asyncdecrement } from '@/store/redux-toolkit/counterSlice'
import { loadData } from "@/store/redux-toolkit/movicSlice";

const ReduxDemo = () => {
    const { count } = useSelector((state: any) => state.counter)
    const { list } = useSelector((state: { movic: { list: [] } }) => state.movic)
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(loadData())
    }, [])
    return (
        <>
            redux-demo
            <p>redux-toolkit demo 同步<button onClick={() => { dispatch(increment({ step: 2 })) }}>{count}</button></p>
            <p>redux-toolkit demo 异步<button onClick={() => { dispatch(asyncdecrement({ step: 1 })) }}>{count}</button></p>
            <ul>
                {list.map((item: any) => <li key={item.tvId}>{item.name}</li>)}
            </ul>
        </>
    )
}

export default ReduxDemo