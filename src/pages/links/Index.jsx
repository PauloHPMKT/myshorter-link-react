import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi"
import { Link } from "react-router-dom"

import './Links.css'

function Links () {
	return(
		<div className="container-links">

      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>  
      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />  
          http://treinando-react-github.co
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="red" />
        </button>
      </div>

		</div>
	)
}

export default Links