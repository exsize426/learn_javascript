import React, { useState } from "react"
import ModalWindow from "./ModalWindow"
import "../Components/ModalWindow.css"

export default function ModalSection () {
    const [modal, setModal] = useState(false);
    
    function openModal () {
        setModal(true);
    }

    return (
        <section>
            <h3>Modal window</h3>
            <button onClick={openModal}>Открыть окно</button>
            <ModalWindow open={modal}>
                <h3>Объявление</h3>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Corporis ullam, officiis quibusdam consequuntur repellendus
                    enim veniam distinctio laudantium corrupti nulla numquam magni
                    blanditiis ab impedit consectetur, aut quo vero accusamus.</p>
                    <button onClick={() => setModal(false)}>Закрыть окно</button>
            </ModalWindow>
        </section>
    )
}