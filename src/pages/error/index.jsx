import { Link } from 'react-router-dom';

import './styles.css';

export const Error = () => (
  <div className="container-error">
    <img src="notfound.png" alt="Página nao encontrada" />

    <h1>Página não encontrada</h1>

    <Link to="/">Voltar para Home</Link>
  </div>
);
