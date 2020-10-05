import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { sauvegarderForma } from '../../actions'

const FormationForm = ({ forma, dispatch }) => { 
  let idInput, nameInput, descInput;

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault()
    if (!nameInput.value.trim()) {
      return
    }
    dispatch(sauvegarderForma(idInput.value, nameInput.value, descInput.value))
    history.push("/formations");
  }

  return (
    <form onSubmit={submitForm}>
      <Link to="/formations" > &lt;&lt; Formations</Link><br /><br />
      <h3>Gérer la formation : {forma.name}</h3>
      <input name="id" type="hidden" value={forma.id} ref={node => (idInput = node)} />
      <label htmlFor="name">Nom de la formation</label>
      <input type="text"
          name="name"
          className="form-control"
          placeholder={forma.name ? forma.name : "Nom de la formation"}
          ref={node => (nameInput = node)} />
      <br/>

      <label htmlFor="desc">Description de la formation</label>
      <input type="text"
          name="desc"
          className="form-control"
          placeholder={forma.desc ? forma.desc : "Description de la formation"}
          ref={node => (descInput = node)} />
      <br/>

      <input type="submit" value="Sauvegarder" className="bnt bnt-default bnt-xs" />
    </form>
  )
}

export default connect()(FormationForm);