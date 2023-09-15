import React from "react";

const IsHeader = (props: { title: any; }) => {
    const { title } = props

    return (
        <>
            <p>
                {title}
            </p>
        </>
    )
}

export default IsHeader