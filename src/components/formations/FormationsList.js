import React from 'react'
import Forma from './FormationLigne';

const FormasList = ({ formas, removeForma }) => (
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
)

export default FormasList;