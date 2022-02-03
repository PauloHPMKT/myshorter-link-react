import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './Menu.css'

function Menu() {
  return(
    <div className="menu">
      <a 
        className="social"
        href="https://www.youtube.com"
      >
        <BsYoutube color="#fff" size={24} />
      </a>
      <a 
        className="social"
        href="https://www.instagram.com"
      >
        <BsInstagram color="#fff" size={24} />
      </a>
      <Link className="menu-item" to="/Links">
        Meus Links
      </Link>
    </div>
  )
}

export default Menu