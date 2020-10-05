import React from 'react'
import { Link } from 'react-router-dom';
import Forma from './FormationLigne';

const FormasList = ({ formas, removeForma }) => (
  <div>
    <Link to="/displayForma" className="floatRight"><input type="button" value="Ajouter formation" className="bnt bnt-default bnt-xs" /></Link>
    <br/><br/>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Nom de la formation</th>
          <th>Description de la formation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {formas.map(forma => (
          <Forma key={forma.id} {...forma} deleteAct={() => removeForma(forma.id)} />
        ))}
      </tbody>
    </table>
  </div>
)

export default FormasList;