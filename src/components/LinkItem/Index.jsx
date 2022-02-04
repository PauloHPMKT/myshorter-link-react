import { FiX, FiClipboard } from 'react-icons/fi'

import './Link-item.css'

function LinkItem ({ closeModal, content }) {

  async function copyLink() {
    await navigator.clipboard.writeText(content.link) // crtl + C
    alert('URL copiada com sucesso')
  }

  return(
    <div className='modal-container'>
      <div className='modal-header'>
        <h2>Link encurtado</h2>
        <button>
          <FiX size={28} color="#000" onClick={closeModal}/>
        </button>
      </div>

      <span>{content.long_url}</span>
      <button className='modal-link' onClick={copyLink}>
        {content.link}
        <FiClipboard size={28} color="#fff" />
      </button>
    </div>
  )
}

export default LinkItem