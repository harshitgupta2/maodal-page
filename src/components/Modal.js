import { ReactDOM } from 'react'
import './Modal.css'

import React from 'react'

export default function modal({children,isSalesModal}) {
  return (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "4px solid",
        borderColor:isSalesModal ? "#ff4500": "#555",
        textAlign: "center"

      }}>
      {children}
      
      </div>
    </div>
  )
}
