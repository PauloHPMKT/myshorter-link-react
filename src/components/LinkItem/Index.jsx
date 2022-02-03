import { FiX, FiClipboard } from 'react-icons/fi'

import './Link-item.css'



function LinkItem ({ closeModal }) {
  return(
    <div className='modal-container'>
      <div className='modal-header'>
        <h2>Link encurtado</h2>
        <button>
          <FiX size={28} color="#000" onClick={closeModal}/>
        </button>
      </div>

      <span>http://www.devmais/aprendendo-react.com</span>
      <button className='modal-link'>
        http://bit.ly/1920
        <FiClipboard size={28} color="#fff" />
      </button>
    </div>
  )
}

export default LinkItem