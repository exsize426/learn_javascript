import React from "react"
import { useRef,useEffect } from "react"
import { createPortal } from "react-dom"
import "./ModalWindow.css"

export default function ModalWindow ({children, open}) { // children - разметка передаваемая в тег dialog
const dialog = useRef();

useEffect(() => {
if (open) {
    dialog.current.showModal()
} else {
    dialog.current.close()
}
}, [open])


return createPortal(
    <dialog ref={dialog} className="modalWindow" >{children}</dialog>,
    document.getElementById('modal')
)

}

    