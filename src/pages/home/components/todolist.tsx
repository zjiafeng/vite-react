import React from "react";

const TodoList = (props: { list: any; }) => {
    const {list} = props

    const handleChange = () => {
        console.log(1);
    }

    return (
        <>
            <ul>
                {list.map((item: { check: boolean | undefined; flag: any; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; },idx: React.Key | null | undefined)=>{
                    return(
                        <li key={idx} style={{display: 'flex'}}>
                            <input type="checkbox" onChange={handleChange} checked={item.check}></input>
                            <p style={{'textDecoration':item.flag?'line-through':'none'}}>{item.content}</p>
                            <button>新增</button>
                            <button>编辑</button>
                            <button>删除</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TodoList