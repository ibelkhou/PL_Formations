import React from 'react'
import FormationForm from './FormationForm';
import FormasList from './FormationsList';

const FormasPages = ({ displayPage, formas, forma, sauvegarderForma, removeForma }) => {
  
  if (displayPage === "formulaire") {
    return (<FormationForm forma={forma} sauvegarderForma={sauvegarderForma} />)
  } else {
    return (<FormasList formas={formas} removeForma={removeForma} />)
  }
  
}

export default FormasPages;