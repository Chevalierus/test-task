import React, { useState } from "react";
import './styles.css'
import { createPortal } from "react-dom";
import Modal from "./Modal/Modal";

export default function ServiceCard ({id, title, body, name, Image}) {
      const [showModal, setShowModal] = useState(false)

    return (
        <>  
          <li className="cardItem" key={id}>
              <Image/>
                <h3 className="cardItemName">{name}</h3>
                <p className="cardItemText">Создадим уникальный и удобный дизайн.</p>
              <button className="cardItemMore roboto-condensed" onClick={() => setShowModal(true)}>Подробнее →</button>
              {showModal && createPortal(
              <Modal key={id} id={id} title={title} body={body} onClose={() => setShowModal(false)}/>,
              document.body
          )}
          </li>
        </>
    )
}