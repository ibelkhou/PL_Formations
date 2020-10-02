import React from 'react'
import FormationForm from './FormationForm';
import FormasList from './FormationsList';

const FormasPages = ({ formaId, formas, forma, removeForma }) => {
  
  if (formaId !== "") {
    return (<FormationForm forma={forma} />)
  } else {
    return (<FormasList formas={formas} removeForma={removeForma} />)
  }
  
}

export default FormasPages;