import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { LinkItem } from '../../components/LinkItem';

import { deleteLink, getLinksSave } from '../../services/store-link';

import './styles.css';

export function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@encurtarLink');

      if (result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDeleteLink(id) {
    const resultDel = await deleteLink(myLinks, id);

    if (resultDel.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(resultDel);
  }

  return (
    <div className="container-links">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>

        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="link-empty">
          <h2 className="empty-list">Lita Vazia...</h2>
        </div>
      )}

      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>

          <button
            className="link-delete"
            onClick={() => handleDeleteLink(link.id)}
          >
            <FiTrash size={24} color="red" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
