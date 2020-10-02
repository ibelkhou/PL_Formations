import React from 'react'
import { Link } from 'react-router-dom';
import modifierIcon from '../../images/modifier.png';
import supprimerIcon from '../../images/supprimer.png';

const Forma = ({ id, name, desc, deleteAct }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{desc}</td>
    <td>
      <Link to={`/displayForma/${id}`}>
        <img src={modifierIcon} width="25" height="25" alt="Modifier" />
      </Link>
      &nbsp; 
      <button onClick={deleteAct} className="buttonTableStyle">
        <img src={supprimerIcon} width="25" height="25" alt="Supprimer" />
      </button>
    </td>
  </tr>
)

export default Forma;