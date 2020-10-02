import React from 'react'

const FormationForm = ({ forma }) => (
  <form>
    <h3>Gérer la formation : {forma.name}</h3>
    <label htmlFor="name">Nom de la formation</label>
    <input type="text"
        name="name"
        className="form-control"
        placeholder="Nom de la formation"
        value={forma.name}/>
    <br/>

    <label htmlFor="desc">Description de la formation</label>
    <input type="text"
        name="desc"
        className="form-control"
        placeholder="Description de la formation"
        value={forma.desc}/>
    <br/>

    <input type="submit" value="Sauvegarder" className="bnt bnt-default bnt-xs" />
  </form>
)

export default FormationForm;