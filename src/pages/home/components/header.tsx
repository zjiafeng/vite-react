import React from "react";

const IsHeader = (props: { title: any; onShow: any; }) => {
    const {title, onShow} = props

    return (
        <>
            <p>
                {title}
                <button onClick={onShow}>+</button>
            </p>
        </>
    )
}

export default IsHeader