import React from 'react'
import '../../App.css'
import DynamicModal from "./DynamicModal"
import useModal from './useModal'

const ModalView = () => {
  const {isShowing, toggle} = useModal()
  return (
    <div className="modal">
      <h5  style={{cursor: 'pointer'}} onClick={toggle}>Show Modal</h5>
      <DynamicModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )
}

export default ModalView
