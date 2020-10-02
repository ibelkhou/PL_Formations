import React from 'react'
import { Link } from 'react-router-dom';
import modifierIcon from '../../images/modifier.png';
import supprimerIcon from '../../images/supprimer.png';

const Forma = ({ id, name, desc, deleteAct, AfficheAct }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{desc}</td>
    <td>
      <Link to={'/formations/:'+id}>
        <img src={modifierIcon} className="iconStyle" alt="Modifier" />
      </Link>
      &nbsp; 
      <button onClick={deleteAct}>
        <img src={supprimerIcon} className="iconStyle" alt="Supprimer" />
      </button>
    </td>
  </tr>
)

export default Forma;