import React from "react"

export default function JSX (props)  {
    return (
        <div>
            <h1>
                "Hello {props.name}"
            </h1>

            <p>
                Время : {props.date}
            </p>
    </div>
    )
   

}