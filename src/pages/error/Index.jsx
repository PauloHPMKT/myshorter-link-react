import { Link } from "react-router-dom"

import './Error.css'

function Error() {
  return(
    <div className="container-erro">
      <img src="notfound.png" alt="Página nao encontrada" />
      <h1>Página não encontrada</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </div> 

  )
}

export default Error