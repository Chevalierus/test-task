import React from "react";
import './styles.css'

export default function Modal ({onClose, id, title, body}) {

    return(
        <>  
            <div className='modal' key={id} id={id}>
                <button className="modalClose" onClick={onClose}>Закрыть</button>
                <div className="modalContent">
                    <p className="ModalId">{id}</p>
                    <p className="ModalTitle">{title}</p>
                    <p className="ModalBody">{body}</p>
                </div>
            </div>
        </>
 )
}