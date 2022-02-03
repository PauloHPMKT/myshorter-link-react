import React, { useState } from 'react'
import { FiLink } from "react-icons/fi"

import Menu from "../../components/menu/Index"
import LinkItem from '../../components/LinkItem/Index'

import './Home.css'

function Home () {

  const[link, setLink] = useState('')
  const[showModal, setShowModal] = useState(false)

  function handleShortLink() {
    setShowModal(true)
  }

	return(
		<div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="sujeito link logo" />
			  <h1>Sujeito Link</h1>
        <span>Cole seu link para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink 
            size={24} 
            color="#FFF"
          />
          <input 
            placeholder="Cole seu link aqui!" 
            value={link}  
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Gerar Link</button>
      </div>

      <Menu />
      { 
        showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
        />
          
      )}


		</div>
	)
}

export default Home